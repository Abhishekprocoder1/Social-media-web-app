import React, { useState } from "react";
import p1 from '../../Image/person/1.jpeg';
import pr1 from '../../Image/Post/1.jpeg';
import "./Post.css";
import like1 from '../../Image/like.png';
import hert from '../../Image/heart.png';
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../Data/Data";
const Post = ({post}) => {
  const [like,setlike]=useState(post.like);
  const [isliked,setisliked]=useState(false);

  const likehandler=()=>{
    setlike(isliked?like-1:like+1)
    setisliked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWapper">
        <div className="postTop">
          <div className="postTopleft">
            <img className="postprofileImage" src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} />
            <span className="postUername">
                    {Users.filter((u)=>u.id===post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                   <img src={like1} className="LikeIcon" onClick={likehandler}/>
                   <img src={hert} className="LikeIcon" onClick={likehandler}  />
                   <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomReft">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
