import { useNotes } from "../Contexts"
import { Link } from "react-router-dom"

function ShowNotes({note}) {



 const {deleteNotes , EditNotes } = useNotes()
 

    return(
        <>
       
      
          <div
           
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
             <Link to={`/notes/${note.id}`}>

           <input
              type="text"
              className="text-gray-800 font-medium border-none focus:outline-none cursor-pointer"
              value={note.text}
              readOnly={true}
              onChange={(e) => EditNotes({ text: e.target.value }, note.id)}
            />


            </Link>
            <div className="flex justify-end gap-5">
            <div className="mt-4 flex justify-end">

              <button
              // onClick={checkEdit}
              
               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                <Link to={`/notes/${note.id}`}>
              <svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg>  
                </Link>
              </button>
              
            </div>
            <div className="mt-4 flex justify-end">
              <button
               onClick={() => deleteNotes(note.id)}
               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
              </button>
            </div>
            </div>
          </div>
         
       
    
        </>
    )
}

export default ShowNotes