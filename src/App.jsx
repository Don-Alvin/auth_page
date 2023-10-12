import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Features/Auth/Login/Login'
import Register from './Features/Auth/Registration/Register'
import MyDetails from './Features/MyDetails/MyDetails'
import Dashboard from './Pages/Dashboard'
import ErrorPage from './Pages/ErrorPage'
import Profile from './Pages/Profile'
import Welcome from './Pages/Welcome'
import { AuthProvider } from './context/AuthContext'
import RequireAuth from './Features/Auth/RequireAuth'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<RequireAuth />}>
        <Route path='/mydetails' element={<MyDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/:id' element={<Profile />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      
    </>
  )
}

export default App