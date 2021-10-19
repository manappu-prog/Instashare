import React , {useContext,useEffect, useState} from 'react';
import { Comment } from '../../components';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../context/user';
import { db, storage } from '../../firebase';
import './style.css';

export default function Post({profileUrl,username,id,photoURL,caption,comments}) {
    const [user, setUser] = useContext(UserContext).user;

    const deletePost=() =>{
        var un=user.displayName;
        if(un===username){
        var imageRef=storage.refFromURL(photoURL);
        imageRef.delete().then(function(){
            console.log("successfully deleted");
        }).catch(function(error){
            console.log(error);
        });

        db.collection("posts").doc(id).delete().then(function(){
            console.log("delete post successful");
        }).catch(function(error){
            console.log(error);
        });
        }
    }

    return (
        <div className="post">
            <div className="post_header">
                <div className="post_headerLeft">
                    <img src={profileUrl} className="post_profilePic" />
                    <p style={{marginLeft:"8px"}}>{username}</p>
                </div>
                <button onClick={deletePost} className="post_delete">Delete</button>
            </div>
            <div className="post_center">
                <img src={photoURL} className="post_photoUrl" />
            </div>
            <div>
                <p><span style={{fontWeight: "500", marginRight: "4px"}}>{username}</span>
                {caption}
                </p>
            </div>
            
            {comments ? comments.map((comment)=>
            <Comment username={comment.username} caption={comment.comment}/>) : <></>}
            {user? <CommentInput comments={comments} id={id} /> : <></>}

        </div>
    );
}
