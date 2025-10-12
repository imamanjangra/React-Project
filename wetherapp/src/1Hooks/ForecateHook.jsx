import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


function ForecasteHook(){
    const wether = useSelector(state => state.wether)

    const [Forcst_Api , setForcat_Api] = useState("")
     const api_key = "2a591f52675ebfba308e143ffe71bbca"

     useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${wether.text}&appid=${api_key}`)
        .then(resp => resp.json())
        .then(resp => {
            if(resp.cod == "200"){
                setForcat_Api(resp)
            }
            else{
                alert("City name not found. Please enter a valid city name!")
                
            }
        })

    } , [wether.text])
    
    return(Forcst_Api)
}

export default ForecasteHook