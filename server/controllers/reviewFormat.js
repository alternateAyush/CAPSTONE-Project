import { mongoose } from "mongoose";
import ReviewFormat from "../models/reviewFormat.js";

export const createReviewFormat = async (req, res) => {
  try {
    var format = req.body;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const allFormat=await ReviewFormat.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$createdAt" }, currentMonth] },// 23rd day
        ]
      }
    })
    if(allFormat && allFormat.length>0){
      const preFormat = allFormat[0];
      console.log(preFormat.createdAt);
      const updatedFormat = await ReviewFormat.findByIdAndUpdate(preFormat._id, format, {
        new: true,
      });
      res.status(201).json(updatedFormat);
    }else{
      const newFormat = new ReviewFormat(format);
      await newFormat.save();
      res.status(201).json(newFormat);
    }    
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

export const getReviewFormat = async (req, res) => {
  try {
    const reviewFormat = await ReviewFormat.find();
    console.log("get hit");
    res.status(200).json(reviewFormat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
