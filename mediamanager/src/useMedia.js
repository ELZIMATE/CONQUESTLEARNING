import { useState } from "react";

const useMedia = () => {

    const[games, setGames] = useState([])

    return{games, setGames}

}

export default useMedia