import React from 'react'
import './style.css'
import { SignInBtn } from '../../components'
import { CreatePost, Navbar } from '../../container'
import Feed from '../../container/feed'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <CreatePost />
            <Feed />
        </div>
    )
}
