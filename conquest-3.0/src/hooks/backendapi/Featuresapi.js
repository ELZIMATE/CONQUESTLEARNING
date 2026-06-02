import { supabase } from "../../assets/features/tools/supabaseClient"

const getDateOrToday = (selectedDate) => selectedDate ?? new Date().toISOString().split('T')[0]

const updateOrInsert = async(table, payload, match) => { //update or insert function that takes in the 
// table we want to update or insert into, this works brackets to brackets when Update or Insert is called within the functions callback to match and puts in the table we name from the backend into the table const param, same goes for the others
//payload const param gets filled with the whole thing object storing the whole todos list. 
// the payload which is the data we want to update or insert, and the match which is the criteria for finding the row to update, match is filled with the user id and date to find the specific row for that user and date
  const updatePayload = { ...payload } //make a box called update payload and what it does is copy the whole todos list and 
  Object.keys(match).forEach((key) => { //object.keys takes the matched date and the id and for each item inside the array it will delete all the other ones which dont match the criteria and leave the date and userid for ones that do 
    delete updatePayload[key]
  })

  let updateQuery = supabase
    .from(table)
    .update(updatePayload)

  Object.entries(match).forEach(([key, value]) => {
    updateQuery = updateQuery.eq(key, value)
  })

  const { data: updatedRows, error: updateError } = await updateQuery.select()

  if (updateError) throw updateError
  if (updatedRows.length > 0) return updatedRows

  const { data, error } = await supabase
    .from(table)
    .upsert([payload])
    .select()

  if (error) throw error
  return data
}

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

      if (error) throw error
      return data

}

export const addList = async(thing) => {

  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    return updateOrInsert("daily_logs", thing, {
      user_id: thing.user_id,
      date: thing.date
    })
    

}












export const addtimer = async(timers) => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    return updateOrInsert("daily_logs", timers, {
      user_id: timers.user_id,
      date: timers.date
    })
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

    return updateOrInsert("daily_logs", entries, {
      user_id: entries.user_id,
      date: entries.date
    })
    



}



export const addSOTW = async(song, weekstart) => {
  const { data: {session}} = await supabase.auth.getSession()


  return updateOrInsert("weekly_logs", {
    user_id: session.user.id,
    WeekStart: weekstart,
    SOTW: song
  }, {
    user_id: session.user.id,
    WeekStart: weekstart
  })
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







export const addquote = async(quote) => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    const{ data, error} = await supabase
    .from("quotes")
    .upsert([quote], {onConflict: 'user_id'})
        
       if (error) throw error
       return data 
    



}

export const fetchquotes = async() => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}


const{error, data} = await supabase
.from("quotes")
.select("*")
.eq('user_id', session.user.id)


if (error) throw error
return data
}

export const fetchRoutines = async() => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}


const{error, data} = await supabase
.from("Routines")
.select("*")
.eq('user_id', session.user.id)


if (error) throw error
return data
}



export const addRoutine = async(Routine) => {
  const { data: { session } } = await supabase.auth.getSession()
  console.log('session in addtimer:', session)

  if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")
  }

    return updateOrInsert("Routines", Routine, {
      user_id: Routine.user_id,
    })
    



}
