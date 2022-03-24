import React, { useState, useEffect } from 'react';
import TweetBox from  './TweetBox';
import Post from  './Post';
import './Feed.css';
import database from './firebase';
import { doc, onSnapshot, collection, query} from "firebase/firestore";

// import Avatar from '@mui/material/Avatar';

function Feed() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     database.collection('posts').onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     ))
    // }, []);
    useEffect(() => {
        const q = query(collection(database, "posts"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => doc.data()))
        });
      }, [])
 
    return (
        <div className='feed'>
            {/* header */}
            <div className="feed__header">
                <h2> Home </h2>
            </div>

            {/* tweet box */}
            <TweetBox />

            {/* post */}
            {posts.map(post => (
                <Post 
                    displayName={post.displayName} 
                    username={post.username} 
                    verified={post.verified} 
                    text={post.text}  
                    image={post.image} 
                    avatar={post.avatar}
                />
            ))}
        </div>
    );
}

export default Feed;