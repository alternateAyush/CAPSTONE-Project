import { mongoose } from "mongoose";
import Issues from "../models/issues.js";

export const createIssue = async (req, res) => {
  try {
    var issue = req.body;
    const newIssue = new Issues(issue);
    await newIssue.save();
    res.status(201).json(newIssue);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

export const getAllIssues = async (req, res) => {
  try {
    const allIssues= await Issues.find();
    console.log("issues get hit");
    res.status(200).json(allIssues);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
