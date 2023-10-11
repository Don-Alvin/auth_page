import { useFormik } from 'formik'
import { BsBriefcaseFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { MdInsertPhoto, MdLocationOn } from 'react-icons/md'
import { myDetailsSchema } from './Schema'

const MyDetails = () => {
    const {values, errors, handleChange, handleSubmit, touched, isSubmitting, handleBlur} = useFormik({
        initialValues: {
            phone_number: "",
            first_name: "",
            last_name: "",
            gender: "",
            age_bracket: "",
            professional: "",
            current_location: "",
            home_sub_county: "",
            home_ward: "",
            home_village: "",
            photo_url: "",
            other_info: ""
        },
        validationSchema: myDetailsSchema
    })

  return (
    <section className='flex'>
        <article className='p-10 w-full flex flex-col gap-5 items-start justify-center'>
            <h5>My Details</h5>
            <form className='w-full grid gap-3' onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                    <div className=''>
                        <label htmlFor='first_name'>First name</label>
                        <div
                            className={`${errors.first_name && touched.first_name ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsFillPersonFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='first_name'
                                value={values.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your first name'
                            />
                        </div>
                        {errors.first_name && touched.first_name && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.first_name}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='last_last_name'>Last name</label>
                        <div
                            className={`${errors.last_name && touched.last_name ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsFillPersonFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='last_name'
                                value={values.last_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your last name'
                            />
                        </div>
                        {errors.last_name && touched.last_name && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.last_name}</p>}
                    </div>
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
                        <label htmlFor='professional'>Profession</label>
                        <div
                            className={`${errors.professional && touched.professional ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <BsBriefcaseFill className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id='professional'
                                value={values.professional}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your profession'
                            />
                        </div>
                        {errors.professional && touched.professional && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.professional}</p>}
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
                        <label htmlFor='home_sub_county'>Home Sub County</label>
                        <div
                            className={`${errors.home_sub_county && touched.home_sub_county ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdLocationOn className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id="home_sub_county"
                                value={values.home_sub_county}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your home sub county'
                            />
                        </div>
                        {errors.home_sub_county && touched.home_sub_county && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.home_sub_county}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='home_ward'>Home Ward</label>
                        <div
                            className={`${errors.home_ward && touched.home_ward ? `border-[#E71807]` : `border-gray-500`} border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdLocationOn className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id="home_ward"
                                value={values.home_ward}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your home ward'
                            />
                        </div>
                        {errors.home_ward && touched.home_ward && <p className='text-white mt-5 text-center p-2 bg-[#E71807] rounded'>{errors.home_ward}</p>}
                    </div>
                    <div className=''>
                        <label htmlFor='home_village'>Home village</label>
                        <div
                            className={ `border border-solid border-gray-500 rounded-md p-2 flex items-center gap-2`}
                        >
                            <MdLocationOn className='text-gray-700 h-4 w-6' />
                            <input
                                className='outline-none w-full'
                                type='text'
                                id="home_village"
                                value={values.home_village}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter your home location'
                            />
                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor='photo'>Upload photo</label>
                        <div
                            className={`border-gray-500 border border-solid rounded-md p-2 flex items-center gap-2`}
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
                    </div>
                    <div className=''>
                        <label htmlFor='other_info'>Any other information</label>
                        <div
                            className={`border-gray-500 border border-solid rounded-md p-2 flex items-center gap-2`}
                        >
                            <textarea
                                className='outline-none w-full p-1'
                                id='other_info'
                                rows={1}
                                value={values.other_info}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Enter any other info'
                            >
                            </textarea>
                        </div>
                </div>
                </div>
               <button className={`text-white text-center h-11 ${isSubmitting && `opacity-50`} bg-[rgb(14,141,69)] shadow-md rounded-md`} disabled={isSubmitting} type='submit'>Continue</button>
            </form>
        </article>
    </section>
  )
}

export default MyDetails