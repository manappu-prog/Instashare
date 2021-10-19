import React, { useContext , useEffect, useState} from 'react'
import { Navbar } from '../../container';
import Feed from '../../container/feed';
import Profilefeed from '../../container/profilefeed';
import { UserContext } from '../../context/user'
import { db } from '../../firebase';
import './style.css'

export default function Profile() {
    const [user, setUser] = useContext(UserContext).user;
    const [posts, setPosts] = useState([]);



    return (
        <div className="profile_page">
            <Navbar />
            {user? 
                <div className="profile">
                    <div className="profile_info">
                        <div className="profile_img"><img  src={user.photoURL}></img></div>
                        <div className="profile_bio">
                            <div className="profile_bioinner">
                                <div>
                                    <p className="profile_username">{user.email.replace("@gmail.com","")}</p>
                                </div>
                                <div>
                                    <p className="profile_display">{user.displayName}</p>
                                    <p className='profile_email'>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <Profilefeed />
                </div>
            : <></>}
        </div>
    )
}
