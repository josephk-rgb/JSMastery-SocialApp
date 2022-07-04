import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postsMessages = await postMessage.find();

    res.status(200).json(postsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  res.send("Post Creation");
};