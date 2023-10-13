import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Login from './Features/Auth/Login/Login'
import Register from './Features/Auth/Registration/Register'
import MyDetails from './Features/MyDetails/MyDetails'
import Dashboard from './Pages/Dashboard'
import ErrorPage from './Pages/ErrorPage'
import Profile from './Pages/Profile'
import Welcome from './Pages/Welcome'
import { AuthProvider } from './Features/Auth/context/AuthContext'
import RequireAuth from './Features/Auth/RequireAuth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SearchContextProvider } from './context/SearchContext'

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


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AuthProvider>
          <SearchContextProvider>
           <RouterProvider router={router} /> 
          </SearchContextProvider>
        </AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" 
        />
      </QueryClientProvider>
    </>
  )
}

export default App