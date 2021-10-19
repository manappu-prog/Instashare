import React, { useContext , useState} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../context/user'
import { logout } from '../../services/auth'
import './style.css'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'
import img1 from './images/icon.png'
import img2 from './images/cameraicondribbble.gif'

export default function Navbar() {
    const [user, setUser] = useContext(UserContext).user;
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signOut = async () =>{
        var letusknow=  await logout();
        console.log(letusknow);
        setUser(null);
    }




    let showSignin = () =>{
        let formdiv=document.querySelector('.form-div');
        formdiv.classList.toggle('show');
        let feed=document.querySelector('.feed');
        let create=document.querySelector('.CreatePost');
        create.classList.toggle('opacity')
        feed.classList.toggle('opacity');
    }



    const signUp = async (event) => {
        event.preventDefault();
       await auth.createUserWithEmailAndPassword(email , password)
        .then((authUser) => {
          let sel=document.querySelectorAll('.loginform input');
          sel.forEach((ele)=>{
              ele.value="";
          })  
          return authUser.user.updateProfile({
            displayName: username
          })
        })
        .catch((error) => alert(error.message));
      }
    const signIn = async (e) => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email,password)
        .then((authUser)=>{
            console.log(authUser);
            setUser(authUser.user);
            let sel=document.querySelectorAll('.loginform input');
            sel.forEach((ele)=>{
              ele.value="";
            }) 
            document.querySelector('.form-div').classList.remove('show');
            let feed=document.querySelector('.feed');
            let create=document.querySelector('.CreatePost');
            feed.classList.remove('opacity');
            create.classList.remove('opacity');
        })
        .catch((error)=>{alert(error.message)});
    }


    



    

    const dropDown = () =>{
        let drop=document.querySelector(".menu_options");
        /*for(let i=0; i<2; i++){
            let div=document.createElement('div');
            div.classList.add("navbar_dropdown_list");
            let button=document.createElement('button');
            button.innerText="logout";
            button.classList.add("logout-button");
            div.append(button);
            drop.appendChild(div);
        }*/
        let it=document.querySelector(".fas");
        it.classList.toggle("rotate");
        drop.classList.toggle("menu_toggle");
    }
    //<img onClick={dropDown} className="navbar_img" src={user.photoURL} />
    return (
        <div className="navbar">
            <div className="form-div">
                <form className="loginform">
                    <input type="text" name="username" placeholder="enter username.." value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <input type="email" name="email" placeholder="enter email.." value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    <input type="password" name="password" placeholder="enter password.." value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <button className="signinbutton" onClick={signIn}>Login</button>
                    <p >or</p>
                    <button className="signinbutton" onClick={signUp}>Signup</button>
                </form>
            </div>
            <div>
                <p className="app-icon">Instashare</p>
            </div>
            <div className="app-camera">
                <img src={img2} />
            </div>
            {user ? 
                <div className="navbar_menu">
                    <div className="navbar_divimg"><i class="fas fa-bars" onClick={dropDown}></i></div>
                    <div className="menu_options">
                        <ul className="menu_list">
                            <li className="home-list"><Link className="home-link" to="/">Home</Link></li>
                            <li className="profile"><Link className="profile-link" to="/profile">Profile</Link></li>
                            <li className="logout"><Link className="logout-link" onClick={signOut}>Logout</Link></li>
                            
                        </ul>
                        
                    </div> 

                </div>
            : <button className="loginbutton" onClick={showSignin}>Login</button>}
        </div>
    )
}
/*<div className="navbar_dropdown">
                        <div className="menu_button">
                            <button className="logout-button" onClick={callLogout}>Logout</button>
                        </div>
                        <div class="menu_profile">
                            <button className="profile">Profile</button>
                        </div>
                    </div>*/
                    
