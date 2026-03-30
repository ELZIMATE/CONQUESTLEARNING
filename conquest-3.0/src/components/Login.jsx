import { supabase } from "../assets/features/tools/supabaseClient"

import { useState } from "react"

const Login = ({onLogin}) => {


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState('')
    const[message, setMessage] = useState('')

    const handleLogin = async() => {
        setError('')
        setMessage('')
        const{data, error} = await supabase.auth.signInWithPassword({email, password})
        if (error){
            setError(error.message)
        }else{
            onLogin(data.user)
        }




    }

    const handleSignup = async() => {
        setError('')
        setMessage('')
        const{ data, error } = await supabase.auth.signUp({email, password})
        if (error){
            setError(error.message)
        } else if (data.session?.user){
            onLogin(data.session.user)
        } else {
            setMessage('Check your email to confirm your account, then log in.')
        }


    }

    return(
        <div>
            <h2>Conquest</h2>

            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" value ={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}

        </div>
    )

}

export default Login







