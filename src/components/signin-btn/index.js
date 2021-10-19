
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/user";
import { signInWithGoogle } from '../../services/auth';
import './style.css'

export default function SignInBtn() {
    const  [, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () =>{
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);

    };
    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign In With Google</p>
        </div>
    )
}
