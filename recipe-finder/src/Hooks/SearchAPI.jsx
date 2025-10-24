import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function SearchAPI(){
    const [response , setResponse] = useState("")
    const RecipeName = useSelector(state => state.Recipe)
    useEffect(()=> {
        // fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((res) => setResponse(res))
    } , [RecipeName.text])

    return(response)
}

export default SearchAPI    