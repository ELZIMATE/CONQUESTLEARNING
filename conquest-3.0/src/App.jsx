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




function App() {





  

  const feats = useFeatures()

  const{user, setUser, setWorkTime, setFitnessTime, setSocialTime, setLeisureTime} = feats 


      useEffect(() => {
    const fetchLoad = async() => {

      const data = await fetchtimer()
      setWorkTime(data.WorkTime)
      setFitnessTime(data.FitnessTime)
      setSocialTime(data.SocialTime)
      setLeisureTime(data.LeisureTime)

    }

    fetchLoad()

  }, [])

  useEffect(() => {
    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error("Error loading Supabase session:", error.message)
        return
      }

      setUser(data.session?.user ?? null)
    }

    loadSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => authListener.subscription.unsubscribe()
  }, [setUser])

  const handleLogin = (userData) => {
    setUser(userData)
  }
  
  return(
  <BrowserRouter>
  {!user ? (<Login onLogin={handleLogin}/>) :
  (

  <Routes>
    
    <Route path = "/" element={<HUD {...feats} />}/>
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
