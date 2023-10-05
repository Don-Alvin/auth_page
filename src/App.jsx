import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Features/Auth/Login/Login'
import Register from './Features/Auth/Registration/Register'
import MyDetails from './Pages/MyDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mydetails' element={<MyDetails />} />
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