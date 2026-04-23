import { data } from "react-router-dom"
import { supabase } from "../../assets/features/tools/supabaseClient"

const getDateOrToday = (selectedDate) => selectedDate ?? new Date().toISOString().split('T')[0]

export const fetchtimer = async(selectedDate) => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}



const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id) //take out the user id from the table which ever user session the userid is approapriately matched
.eq('date', getDateOrToday(selectedDate)) // take out the date which is the selected date we passed in from the selected date stateful we set with inputs
.maybeSingle() //return null instead of throwing when there is no row for that date


if (error) throw error
return data //send it back to who called it

}


export const fetchList = async(listdate) => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}

const today = new Date().toISOString().split('T')[0]

const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id)
.eq('date', listdate)
.maybeSingle()


if (error) throw error
return data
}

export const removeItem = async(index) => {
  const{data, error} = await supabase
      .from('daily_logs')
      .delete()
      .eq('index', index)

      return data

}

export const addList = async(thing) => {

  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    const{ data, error} = await supabase
    .from("daily_logs")
    .upsert([thing], {onConflict: 'user_id, date'})
        
       if (error) throw error
       return data 
    

}












export const addtimer = async(timers) => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    const{ error} = await supabase
    .from("daily_logs")
    .upsert([timers], {onConflict: 'user_id, date'})
        
       if (error) throw error
}



export const fetchjournal = async(selectedDate) => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}

const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id)
.eq('date', selectedDate)
.maybeSingle()


if (error) throw error
return data

}














export const addentry = async(entries) => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    const{ data, error} = await supabase
    .from("daily_logs")
    .upsert([entries], {onConflict: 'user_id, date'})
        
       if (error) throw error
       return data 
    



}


export const addGOTW = async(game, weekstart) => {
  const { data: {session}} = await supabase.auth.getSession()


  const{data, error} =  await supabase
  .from("weekly_logs")
  .upsert([{user_id: session.user.id,
    WeekStart: weekstart,
    GOTW: game
  }], {onConflict: 'user_id, WeekStart'})

    if (error) throw error
    return data
}


export const fetchGOTW = async(weekstart) => {
   const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

  const{data, error} = await supabase
  .from('weekly_logs')
  .select('*')
  .eq('user_id', session.user.id)
  .eq('WeekStart', weekstart)
  .maybeSingle()

  if (error) throw error
  return data 






}

export const addSOTW = async(song, weekstart) => {
  const { data: {session}} = await supabase.auth.getSession()


  const{data, error} =  await supabase
  .from("weekly_logs")
  .upsert([{user_id: session.user.id,
    WeekStart: weekstart,
    SOTW: song
  }], {onConflict: 'user_id, WeekStart'})

    if (error) throw error
    return data
}


export const fetchSOTW = async(weekstart) => {
   const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

  const{data, error} = await supabase
  .from('weekly_logs')
  .select('*')
  .eq('user_id', session.user.id)
  .eq('WeekStart', weekstart)
  .maybeSingle()

  if (error) throw error
  return data 






}



export const addCalories = async(calories, weekstart) => {
  const { data: {session}} = await supabase.auth.getSession()


  const{data, error} =  await supabase
  .from("weekly_logs")
  .upsert([{user_id: session.user.id,
    WeekStart: weekstart,
    calories: calories
  }], {onConflict: 'user_id, WeekStart'})

    if (error) throw error
    return data
}


export const fetchCalories = async(weekstart) => {
   const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

  const{data, error} = await supabase
  .from('weekly_logs')
  .select('*')
  .eq('user_id', session.user.id)
  .eq('WeekStart', weekstart)
  .maybeSingle()

  if (error) throw error
  return data 






}
