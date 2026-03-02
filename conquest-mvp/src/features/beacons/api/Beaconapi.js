import { SupabaseClient } from "@supabase/supabase-js"
import { supabase } from "./supabaseClient"



export const loader = async () => {
const{data, error} = await supabase //from superbase we get the data and the error info
.from('beacon')//inside the data section be choose the beacon table we made
.select('*') //select the whole thing 

if (error) throw error //if an error is happened in the process throw it on the screen
return data //otherwise return the table in this data box and go 
    



}

export const addBeacon = async(beacon) => { //make an addbeacon function which takes a beacon parameter 

    //STEP 6 -> UPDATE THE DATA BY GETTING THE TABLE WE MADE IN SUPABASE PASSING INTO IT THE NEWLY MADE BEACONOBJ,

    if(!beacon||!beacon.title?.trim()) //if no beacon is given or no beacon id too return back abort mission
        throw new Error('Please input beacon name...')

        const{data, error} = await supabase
        .from('beacon') //hey supabase from my beacons table 
        .insert([beacon]) //please put inside the beacon values as a beacon we just made with input

    if(error) throw error //if an error is found please stop and throw error on screen

    const{data: allBeacons, error:fetchError} = await supabase
    .from('beacon') //FROM THE BEACON TABLE NOW WITH THE NEW OBJ 
    .select('*') //SELECT THE WHOLE THING 
    
   if (fetchError) throw fetchError
   return allBeacons //RETURN THE WHOLE UPDATED TABLE IT BACK TO THE USEBEACONS 
}

export const deleteBeacon = async (id) =>{
    const{data, error} = await supabase
    .from('beacon')
    .delete()
    .eq('id', id)

if (error) throw error

    const{data: allBeacons, error:fetchError} = await supabase
    .from('beacon')
    .select('*')
    
   if (fetchError) throw fetchError
   return allBeacons

}


export const clearBeacons = async() => {
    const{data, error} = await supabase
    .from('beacon')
    .delete()
    .neq('id', 0)



    if (error) throw error

    return([])
}

export const rsvpBeacons = async(updatedattendees, beaconID) => {


    const{data: allBeacons, error: fetchError} = await supabase
    .from('beacon')
    .update({attendees: updatedattendees})
    .eq('id', beaconID)
    .select()

    if (fetchError) throw fetchError
    return allBeacons


}