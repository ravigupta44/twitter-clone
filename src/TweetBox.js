import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import "./TweetBox.css";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1223970466332737542/5KcuuW9O_400x400.jpg"/>
                    <input  placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
