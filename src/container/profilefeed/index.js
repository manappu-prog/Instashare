import React, {useState, useEffect, useContext} from 'react'
import { Post } from '..'
import { UserContext } from '../../context/user';
import { db } from '../../firebase';
import './style.css'

export default function Profilefeed() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useContext(UserContext).user;

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot)=>{
            var filPost=snapshot.docs.filter((doc)=>(doc.data().username===user.displayName));
            setPosts(filPost.map((doc)=>({id:doc.id,post:doc.data()})));
        })
    }, []);

    return (
        <div className="profilefeed">
            {posts.map(({id,post})=>{
                return <Post
                    key={id} 
                    id={id}
                    profileUrl={post.profileUrl}
                    username={post.username}
                    photoURL={post.photoUrl}
                    caption={post.caption}
                    comments={post.comments}
                />
            })}
        </div>
    );
}
