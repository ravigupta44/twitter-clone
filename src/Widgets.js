import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1463076741581185031"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RaviGup92514431"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://reactjs.org/"}
          options={{ text: "#reactjs is awesome", via: "RaviGup92514431" }}
        />
      </div>
        </div>
    );
}

export default Widgets;
