import { useEffect } from "react"
import { useState } from "react"
import {  useSelector } from "react-redux";

function WetherHook(){
    const wether = useSelector(state => state.wether)

    const [wether_Api , setWether_Api] = useState("")

    const api_key = "e15470177d852cecd48b92ec3dbec9a0"

    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wether.text}&appid=${api_key}`)
    .then((resp) => resp.json())
    .then((resp) => setWether_Api(resp))

    
   } , [wether.text])

   

    return(wether_Api)
}

export default WetherHook