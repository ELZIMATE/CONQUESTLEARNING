import { useEffect, useState} from "react";
import { supabase } from "../conquest-mvp/src/features/beacons/api/supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js"

export const getAttendees = async () => {
        const{data, error} = await supabase
        .from('ATTENDEES')
        .select('username')
    

    if (error) throw error 
        return data.map(a=>a.username)
    }




export const addAttendees = async(un) => {

    if(!un)
        throw new Error('write something')

    const{error} = await supabase
    .from('ATTENDEES')
    .insert([{username:un}])
    

    if (error) throw error


    const{data, error: fetchError} = await supabase
        .from('ATTENDEES')
        .select('username')
    
    if(fetchError) throw fetchError

    return data.map(a=>a.username)

}


export const removeAttendees = async (id) =>{
    const{data, error} = await supabase
    .from('ATTENDEES')
    .delete()
    .eq('username', username)

if (error) throw error
   return data.map(a=>a.username)

}
