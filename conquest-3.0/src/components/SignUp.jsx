const SignUp = async() => {
    const{data, error} = await supabase.auth.signUp({
        email: email,
        password: password
        
    })
}