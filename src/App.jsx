import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Features/Auth/Login/Login'
import Register from './Features/Auth/Registration/Register'
import MyDetails from './Features/MyDetails/MyDetails'
import Dashboard from './Pages/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/mydetails' element={<MyDetails />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App