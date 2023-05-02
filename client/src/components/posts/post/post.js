import React from "react";
import useStyles from './styles'
import { useSelector  } from "react-redux";
const Single_Post = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts); 
    // console.log( "IN THE POSTS/POST JS FILE");
    console.log(posts);
    return (
        <h1>Single_Post</h1>
    );
}

export default Single_Post ;  