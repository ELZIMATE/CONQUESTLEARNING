import { supabase } from "../../conquest-mvp/src/features/beacons/api/supabaseClient"


export const loader = async() =>{
    const{data, error} = await supabase
    .from("board")
    .select("*")

    if (error) throw error
    return data
}



export const addmsg = async (msg) => {
    const{data, error} = await supabase
    .from ("board")
    .insert([msg])

    if(error) throw error
    
    const{data:allBoard, error:throwError} = await supabase
    .from("board")
    .select("*")

    if (throwError) throw throwError
    return allBoard

}

export const delmsg = async(id) => {
    const{data, error} = await supabase
    .from("board")
    .delete()
    .eq('id', id)
    if(error) throw error
    
    const{data:allBoard, error:throwError} = await supabase
    .from("board")
    .select("*")

    if (throwError) throw throwError
    return allBoard

}


export const clrmsg = async() =>  {
    const{data, error} = await supabase
    .from("board")
    .delete()
    .neq('id', 0)
    if (error) throw error

    return ([])
}
