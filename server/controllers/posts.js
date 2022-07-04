import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postsMessages = await postMessage.find();

    res.status(200).json(postsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;

  const newPost = new PostMessage(post);

  try {
    newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
