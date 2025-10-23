import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './App/Shop.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/RecipeDetails' element={<RecipeDetails/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
