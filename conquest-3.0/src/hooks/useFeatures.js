import { useState } from "react"

const useFeatures = () => {
    const[entry, setEntry] = useState('')
    const[counter, setCounter] = useState(0)
    const[list, setList] = useState([])
    const[running, isRunning] = useState(false) 
    const[status, setStatus] = useState(false)
    const[calories, setCalories] = useState(0)
    const[song, setSong] = useState('')
    const[game, setGame] = useState('')
    const[calsopen, setCalsOpen] = useState(false)
    const[gameopen, setGameOpen] = useState(false)
    const[songopen, setSongOpen] = useState(false)
    const[category, setCategory] = useState('work')
    const [workTime, setWorkTime] = useState(0)
    const [socialTime, setSocialTime] = useState(0)
    const [fitnessTime, setFitnessTime] = useState(0)
    const [leisureTime, setLeisureTime] = useState(0)
    const [waketime, setWakeTime] = useState(0)
    const [sleepTime, setSleepTime] = useState()
    const[submitted, setSubmitted] = useState([])
    const[user, setUser] = useState(null)
    const[quote, setQuote] = useState('')
    const[quoteCollection, setQuoteCollection] = useState([])
    const[quoteStatus, setQuoteStatus] = useState(false)
    const[selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA'))
    const[dayData, setDayData] = useState(null)
    const[listdate, setListDate] = useState(new Date().toLocaleDateString('en-CA'))
    const[listdata, setListData] = useState(null)
    const[journalDate, setJournalDate] = useState(new Date().toLocaleDateString('en-CA'))
    const[weekstart, setWeekStart] = useState(new Date().toLocaleDateString('en-CA'))



    


return{entry, setEntry, counter, setCounter, list, setList, running, 
    isRunning, status, setStatus, calories, setCalories, game, setGame, 
    song, setSong, calsopen, setCalsOpen, gameopen, setGameOpen, 
    songopen, setSongOpen, category, setCategory, workTime, setWorkTime, 
    socialTime, setSocialTime, fitnessTime, setFitnessTime, leisureTime,
    setLeisureTime, submitted, setSubmitted, user, setUser, quote, setQuote, 
    quoteStatus, setQuoteStatus, quoteCollection, setQuoteCollection, selectedDate, 
    setSelectedDate, setDayData, dayData, listdate, setListDate, listdata, setListData, 
    journalDate, setJournalDate, weekstart, setWeekStart, waketime, setWakeTime, sleepTime, setSleepTime}
}
export default useFeatures