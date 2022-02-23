import React from 'react';
import TweetBox from "./TweetBox";
import "./Feed.css";
import Post from './Post';


function Feed() {
    


    return (
        <div className="feed">
            <div className="feed__header">
                    <h2>Home</h2>
             </div>
            <TweetBox/>
            <Post displayName="Ravi Gupta" username="RaviGup92514431" verified={true} text="FireBase Not working" avatar="https://pbs.twimg.com/profile_images/1223970466332737542/5KcuuW9O_400x400.jpg" image="https://www.wallpapertip.com/wmimgs/75-756328_cool-gamer-background-hd.jpg"  />
            
            <Post displayName="Ravi Gupta" username="RaviGup92514431" verified={true} text="FireBase Not working" avatar="https://pbs.twimg.com/profile_images/1223970466332737542/5KcuuW9O_400x400.jpg" image="https://www.wallpapertip.com/wmimgs/75-756328_cool-gamer-background-hd.jpg"  />

            <Post displayName="Ravi Gupta" username="RaviGup92514431" verified={true} text="FireBase Not working" avatar="https://pbs.twimg.com/profile_images/1223970466332737542/5KcuuW9O_400x400.jpg" image="https://www.wallpapertip.com/wmimgs/75-756328_cool-gamer-background-hd.jpg"  />

            <Post displayName="Ravi Gupta" username="RaviGup92514431" verified={true} text="FireBase Not working" avatar="https://pbs.twimg.com/profile_images/1223970466332737542/5KcuuW9O_400x400.jpg" image="https://www.wallpapertip.com/wmimgs/75-756328_cool-gamer-background-hd.jpg"  />

        </div>
    );
}

export default Feed;
