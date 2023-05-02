import PostMessage from "../models/postMessage.js";



 
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({message : error.message}); 
    }
};

export const createPost = async (req, res) => {
    const user_post = req.body;
    const new_user_post = new PostMessage(user_post);
    try{
        await new_user_post.save();
        res.status(201).json(new_user_post);
    }
    catch (error) {
        res.status(409).json({message : error.message}); 
    } 
};