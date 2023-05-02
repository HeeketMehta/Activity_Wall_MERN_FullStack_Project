import React from "react";

import Single_Post from "./post/post.js";
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Single_Post />
            <Single_Post /> 
        
        </>
        
    );
}

export default Posts;  