import { useFormik } from 'formik'
import { BsFillLockFill } from 'react-icons/bs'
import { MdOutlineMailOutline } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from './Schemas'
import { loginUser } from '../authSlice'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async () => {
        try {
            await login(values.email, values.password);
            navigate('/welcome');
        } catch (error) {
            alert(error.message);
        }
    };

    const login = async (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                await dispatch(loginUser({ email, password }));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };

    const {values, errors, handleChange, handleSubmit, touched, isSubmitting, handleBlur} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit
    })

  return (
    <section className='flex justify-center items-center h-screen'>
        <article className='p-10  flex flex-col gap-5 items-center justify-center'>
            <h5 className='text-xl text-center'>Log in into your account</h5>
            <form className='w-full grid gap-3' onSubmit={handleSubmit}>
                <div className='grid gap-5'>
                    <div className=''>
                        <label htmlFor='email'>Email Address</label>
                        <div
                            className={`${errors.email && touched.email ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdOutlineMailOutline className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='email'
                                id='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your email address'
                            />
                        </div>
                        {errors.email && touched.email && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.email}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='password'>Password</label>
                        <div
                            className={`${errors.password && touched.password ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsFillLockFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='password'
                                id='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your password'
                            />
                        </div>
                        {errors.password && touched.password && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.password}</p>}
                    </div>
                </div>
                <p>Don't have an account yet? <Link to='/register' className='text-semibold text-[rgb(14,141,69)]'>Register</Link></p>
               <button className={`text-white text-center h-11 ${(isSubmitting) && `opacity-50`} bg-[rgb(14,141,69)] shadow-md rounded-md`} type='submit'disabled={isSubmitting}>Log in</button>
            </form>
        </article>
    </section>
  )
}

export default Login