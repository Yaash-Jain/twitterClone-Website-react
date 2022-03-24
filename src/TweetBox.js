import React, { useState } from 'react';
import './TweetBox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import database from './firebase';
import { doc, onSnapshot, collection, query} from "firebase/firestore";



function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    function sendTweet(e) {
        e.preventDefault();
    
        database.collection('posts').add({
            displayName: "Amay Jain",
            username: "amayjain",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "AJ"
        });
    
        setTweetMessage(" ");
        setTweetImage(" ");
      };
    

    return (
        <>
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar>YJ</Avatar>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"  
                        placeholder="What's Happening ?" />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"  
                    className="tweetBox__imageInput" 
                    placeholder="Enter image URL" />

                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'> Tweet </Button>
            </form>
        </div>
        </>
    );
}

export default TweetBox;