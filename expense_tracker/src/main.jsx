import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Add from './Components/Add.jsx'
import About from './Components/About.jsx'
import History from './Components/History.jsx'
import { ExpenseProvider } from './Context/Expense_Context.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/History' element={<History/>}/>
      <Route path='/About' element={<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseProvider  >
    <RouterProvider router={router}/>
    </ExpenseProvider>
  </StrictMode>,
)
