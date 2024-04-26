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
    res.status(200).json(allIssues.reverse());
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateIssue = async (req, res) => {
  const { id: _id } = req.params;
  const issue = req.body;
  try {
    const updatedIssue = await Issues.findByIdAndUpdate(_id, issue, {
      new: true,
    });
    res.status(201).json(updatedIssue);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};

export const deleteIssue = async (req, res) => {
  const { id: _id } = req.params;
  try {
    await Issues.findByIdAndDelete(_id);
    res.status(200).json({ message: `Issue ${_id} deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
};