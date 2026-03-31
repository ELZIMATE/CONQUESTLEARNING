import { supabase } from "../../assets/features/tools/supabaseClient"


export const fetchtimer = async(timers) => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}

const today = new Date().toISOString().split('T')[0]

const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id)
.eq('date', today)
.single()


if (error) throw error
return data

}


export const fetchList = async() => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}

const today = new Date().toISOString().split('T')[0]

const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id)
.eq('date', today)
.single()


if (error) throw error
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



export const fetchjournal = async(entries) => {
  const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) {
    throw new Error("No active Supabase session. Log in again before saving timer data.")

}

const today = new Date().toISOString().split('T')[0]

const{error, data} = await supabase
.from("daily_logs")
.select("*")
.eq('user_id', session.user.id)
.eq('date', today)
.single()


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
