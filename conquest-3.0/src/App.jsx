import { BrowserRouter, Routes, Route, data } from "react-router-dom"
import HUD from "./components/HUD"
import TimerScreen from "./components/Screens/TimerScreen"
import Journal from "./components/Jounal"
import ToDoList from "./components/ToDoList"
import useFeatures from "./hooks/useFeatures"
import ProgressBar from "./components/ProgressBar"
import Login from "./components/Login"
import { useEffect } from "react"
import { supabase } from "./assets/features/tools/supabaseClient"
import Quotes from "./components/QuoteBook"
import { fetchtimer } from "./hooks/backendapi/Featuresapi"
import History from "./components/History"




function App() {





  

  const feats = useFeatures() //the hooks will be ran and called from inside here

  const{user, setUser, setWorkTime, setFitnessTime, setSocialTime, setLeisureTime} = feats //we pull these setter functions and user stateful out of the hooks file (under feats) 




  useEffect(() => { //synchronised to run when the setUser setter function to set and load user is changed.
    const loadSession = async () => { //This here is what actually retrieves the sessions and data for the corresponding user
      const { data, error } = await supabase.auth.getSession() //goes into supabase authorisation section and checks for session to see if it exists and stores inside the data const

      if (error) { //if there is an error
        console.error("Error loading Supabase session:", error.message) //show this error in the console
        return //return back not allowing data login 
      }

      setUser(data.session?.user ?? null) //than the session which is started before stored inside data box if the data session exists and the user exists from before too
      // put it inside the user state otherwise null 

    loadSession() //load session runs immediately
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => { //go into the supabase authorisation section and check or listen to any logins or 
    // logouts taking the event handler to know which happened did we log out ot in and session to see whose session it happened to
      setUser(session?.user ?? null) //now change the user state if session is already existing when we login or logout.
    })

    return () => authListener.subscription.unsubscribe() //when the app unmounts stop checking and loading in the user session
  }, [setUser]) //when setUser is changed the session loaded in needs to be changed



  const handleLogin = (userData) => { //function which gives user data to the user state when logging in 
    setUser(userData) //setter to setUser puts the userData in.
  }
  
  return(
  <BrowserRouter>
  {!user ? (<Login onLogin={handleLogin}/>) :
  (

  <Routes>
    
    <Route path = "/" element={<HUD {...feats} />}/> {/* creates a routing path which directs the website to the hud when "/" is put in the top url and puts all the hooks with ...feats copied in */}
    <Route path = "/timer" element={<TimerScreen {...feats} />}/>
    <Route path = "/jounal" element={<Journal {...feats} />}/>
    <Route path = "/ToDoList" element={<ToDoList {...feats} />}/>
    <Route path = "/ProgressBar" element={<ProgressBar {...feats}/>}/>
    <Route path="/QuoteBook" element={<Quotes {...feats}/>}/>
  </Routes>
  
  )} 
  </BrowserRouter>)


}

export default App
