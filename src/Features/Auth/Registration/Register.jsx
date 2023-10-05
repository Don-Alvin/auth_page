import React, { useState } from 'react'
import { registerSchema } from './Schemas'
import { useFormik } from 'formik'
import { BsBriefcaseFill, BsFillLockFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md"

const Register = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    const {values, errors, handleChange, handleSubmit, touched, isSubmitting, handleBlur} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: registerSchema
    })

  return (
    <section className='flex'>
    <article className='p-10  flex flex-col gap-5 items-start justify-center'>
        <h5>Create Account</h5>
        <form className='w-full grid gap-3'>
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
           <button className={`text-white text-center h-11 ${isDisabled && `opacity-50`} bg-[#ff7b7b] shadow-md rounded-md`} type='submit'>Continue</button>
        </form>
    </article>
</section>
  )
}

export default Register