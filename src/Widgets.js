import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets()  {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder='Search Twitter' />
            </div>
            
            <div className="widget__widgetContainer">
                <h2> What's happening </h2>
                <TwitterTweetEmbed tweetId={'858551177860055040'} />
                <TwitterTimelineEmbed sourceType='profile' screenName='cleverqazi' options={{ height:400 }} />
                <TwitterShareButton url={'https://facebbok.com/cleverprogrammer'} options={{ text: "reactJs", via: 'cleverqazi' }} />
            </div>
        </div>
    )
}

export default Widgets;