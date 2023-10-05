import { useFormik } from 'formik'
import { useState } from 'react'
import { BsBriefcaseFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { MdInsertPhoto, MdLocationOn, MdOutlineMailOutline } from 'react-icons/md'
import { registerSchema } from '../Features/Auth/Registration/Schemas'

const MyDetails = () => {
    const [isDisabled, setIsDisabled] = useState(false)

    const {values, errors, handleChange, handleSubmit, touched, isSubmitting, handleBlur} = useFormik({
        initialValues: {
            email: "",
            number: "",
            name: "",
            gender: "",
            age_bracket: "",
            profession: "",
            current_location: "",
            home_location: "",
            photo: "",
            any_other: ""
        },
        validationSchema: registerSchema
    })

  return (
    <section className='flex'>
        <article className='p-10 w-full flex flex-col gap-5 items-start justify-center'>
            <h5>My Details</h5>
            <form className='w-full grid gap-3'>
                <div className='grid grid-cols-3 gap-5 w-full'>
                    <div className=''>
                        <label htmlFor='number'>Phone number</label>
                        <div
                            className={`${errors.number && touched.number ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsFillTelephoneFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='tel'
                                id='number'
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your phone number'
                            />
                        </div>
                        {errors.number && touched.number && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.number}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='name'>Username</label>
                        <div
                            className={`${errors.name && touched.name ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsFillPersonFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your full name'
                            />
                        </div>
                        {errors.name && touched.name && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.name}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='current_location'>Current Location</label>
                        <div
                            className={`${errors.current_location && touched.current_location ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdLocationOn className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='current_location'
                                value={values.current_location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your current location'
                            />
                        </div>
                        {errors.current_location && touched.current_location && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.current_location}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='home_location'>Home Location</label>
                        <div
                            className={`${errors.home_location && touched.home_location ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdLocationOn className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='name'
                                value={values.home_location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your home location'
                            />
                        </div>
                        {errors.home_location && touched.home_location && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.home_location}</p>}
                    </div>
                    {/* start here */}
                    <div className=''>
                        <label htmlFor='gender'>Gender</label>
                        <div
                            className={`${errors.gender && touched.gender ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <select className='w-full bg-white'>
                                <option className='text-gray-500'>Select gender</option>
                                <option className='text-gray-500' value="male">Male</option>
                                <option className='text-gray-500' value="female">Female</option>
                                <option className='text-gray-500' value="prefer_not_to_say">Prefer not to say</option>
                            </select>
                        </div>
                        {errors.gender && touched.gender && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.gender}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='age_bracket'>Age bracket</label>
                        <div
                            className={`${errors.age_bracket && touched.age_bracket ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                           <select className='w-full bg-white'>
                                <option className='text-gray-500'>Select age bracket</option>
                                <option className='text-gray-500' value="18-25">18-25</option>
                                <option className='text-gray-500' value="26-35">26-35</option>
                                <option className='text-gray-500' value="36-45">36-45 </option>
                                <option className='text-gray-500' value="45-60">46-60 </option>
                                <option className='text-gray-500' value="above_60">Above 60 </option>
                            </select> 
                        </div>
                        {errors.age_bracket && touched.age_bracket && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.age_bracket}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='Profession'>Profession</label>
                        <div
                            className={`${errors.profession && touched.profession ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsBriefcaseFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='profession'
                                value={values.profession}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your profession'
                            />
                        </div>
                        {errors.profession && touched.profession && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.profession}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='photo'>Upload photo</label>
                        <div
                            className={`${errors.photo && touched.photo ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdInsertPhoto className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='file'
                                id='photo'
                                value={values.photo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your home location'
                            />
                        </div>
                        {errors.name && touched.name && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.name}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='any_other'>Any other information</label>
                        <div
                            className={`${errors.any_other && touched.any_other ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <textarea
                                className='outline-none w-full p-1'
                                id='any_other'
                                rows={1}
                                value={values.any_other}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter any other info'
                            >
                            </textarea>
                        </div>
                        {errors.name && touched.name && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.name}</p>}
                </div>
                </div>
               <button className={`text-white text-center h-11 ${isDisabled && `opacity-50`} bg-[#ff7b7b] shadow-md rounded-md`} type='submit'>Continue</button>
            </form>
        </article>
    </section>
  )
}

export default MyDetails