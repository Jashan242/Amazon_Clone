import './App.css'
import CartView from './Component/CartView'
import Header from './Component/Header'
import Home from './Component/Home'
import Signin from './Component/Signin'
import ProductDetail from './Component/ProductDetail'
import { BrowserRouter,Routes,Route, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<CartView/>
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"/product-detail/:productId",
        element:<ProductDetail/>
      }
    ]
  }
])

export default AppRouter