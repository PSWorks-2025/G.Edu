import React,{useState,useEffect} from 'react'
import { FaLock } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import { MdAlternateEmail } from "react-icons/md";
import { signIn } from '../../services/service';
import { auth } from '../../services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import "./styles.css"
function Login() {
    const navigation = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const handleSignIn = async (e) => {
        e.preventDefault()
        const isAuthenticated = await signIn(Email, Password)
        if(isAuthenticated){
            navigation("/home")
        } 
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if (user){
                navigation('/home',{userId:user.uid})
            }
        })

        return () => unsubscribe()
    },[])

    return (
        <div className='authContainer'>
                <div className="wrapper">
                        <form action="">
                                <h1>Login</h1>
                                <div className="input-box">
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required />
                                        <MdAlternateEmail className='icon'/>
                                </div>

                                <div className="input-box">
                                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required  />
                                        <FaLock className='icon'/>
                                </div>

                                <div className="forgot">
                                        <a href="#">Forgot password?</a>
                                </div>

                                <button onClick={handleSignIn} type="submit">Login</button>
                                <div className="register-link">
                                        <p>Don't have an account? <Link to="/sign-up">Register</Link></p>
                                </div>
                        </form>
                </div>
        </div>
    )
}

export default Login