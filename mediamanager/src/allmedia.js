import { supabase } from "../../conquest-mvp/src/features/beacons/api/supabaseClient"

export const loader = async() =>{
    const{data, error} = await supabase
    .from("GAMES")
    .select("*")

    if(error) throw error
    return data
}                   

export const addgame = async (gametask) => {
    const{data, error} = await supabase
    .from ("GAMES")
    .insert([gametask])

    if(error) throw error
    
    const{data:allGames, error:throwError} = await supabase
    .from("GAMES")
    .select("*")

    if (throwError) throw throwError
    return allGames

}
