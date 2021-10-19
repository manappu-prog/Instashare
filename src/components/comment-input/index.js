import React,{useContext, useState} from 'react'
import { UserContext } from '../../context/user';
import { db } from '../../firebase';
import './style.css'

export default function CommentInput({comments,id}) {
    const [comment, setComment] = useState("");
    const [user, setUser] = useContext(UserContext).user;
    const [commentArray, setCommentArray] = useState(comments?comments:[]);

    const addComment = () =>{
        if(comment!=""){
            commentArray.push({
                comment: comment,
                username: user.displayName,
            })

            db.collection("posts").doc(id).update({comments: commentArray})
            .then(function(){
                setComment("");
                console.log("comment added");
            }).catch(function(error){
                console.log(error);
            });
        }
    }

    return (
        <div className="commentInput">
            <textarea class="commentInput_textarea" rows="1" placeholder="write a comment.."
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            >
            </textarea>
            <button onClick={addComment} className="commentInput_btn">Post</button>
            
        </div>
    )
}
