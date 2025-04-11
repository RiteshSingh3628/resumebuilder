import React, { useState, useRef } from 'react'
import { FaCamera } from 'react-icons/fa'

function Heading() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    city: '',
    country: '',
    pinCode: '',
    phoneNumber: '',
    email: ''
  })

  const fileInputRef = useRef(null)
// this function is used to handle the image change
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // this function is used to handle the image click
  const handleClick = () => {
    fileInputRef.current.click()
  }

  // this function is used to validate the email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // this function is used to validate the email
    return re.test(email)
  }

  // this function is used to validate the phone number
  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/
    // this function is used to validate the phone number
    return re.test(phone)
  }

  // this function is used to validate the pin code
  const validatePinCode = (pin) => {
    const re = /^[0-9]{6}$/
    return re.test(pin)
  }

  // this function is used to handle the form submission    
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone number
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number'
    }

    // Validate PIN code
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'PIN code is required'
    } else if (!validatePinCode(formData.pinCode)) {
      newErrors.pinCode = 'Please enter a valid 6-digit PIN code'
    }

    setError(newErrors)

    // If no errors, proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData)
      // Add your form submission logic here
    }
  }

  const handleChange = (e) => {
    // this function is used to handle the input change

    // this function is used to update the form data
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error[name]) {
      setError(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className='ml-[100px]'>
      <h1 className='text-4xl font-bold my-5'>What's the best way to contact you?</h1>
      <p className='text-gray-500 my-5'>We'll use this information to contact you for further questions.</p>
      <form onSubmit={handleSubmit} className='flex gap-7 p-10'>
        {/* Image upload section */}
        <div>
          {selectedImage ? (
            <div className='w-[120px] h-[150px] relative'>
              <img src={selectedImage} alt='Uploaded' className='w-full h-full object-cover'/>
              <button 
                type="button"
                onClick={() => setSelectedImage(null)} 
                className='absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full'
              >
                X
              </button>
            </div>
          ) : (
            <div
              onClick={handleClick} 
              className='w-[120px] h-[150px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-md overflow-hidden group cursor-pointer flex flex-col items-center justify-center'
            >
              <FaCamera className='text-3xl mb-2 text-gray-400'/>
              <span className="text-sm text-gray-400">Click to upload photo</span>
              <input 
                type="file" 
                accept='image/*' 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className='hidden'
              />
            </div>
          )}
        </div>

        {/* details section */}
        <div className='grid grid-cols-2 w-11/12 gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='firstName'>First Name *</label>
            <input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your first name' 
              className={`border-2 p-2 rounded ${error.firstName ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.firstName && <span className="text-red-500 text-sm">{error.firstName}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='middleName'>Middle Name</label>
            <input 
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your middle name' 
              className='border-2 border-blue-300 p-2 rounded'
            />
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='lastName'>Last Name *</label>
            <input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your last name' 
              className={`border-2 p-2 rounded ${error.lastName ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.lastName && <span className="text-red-500 text-sm">{error.lastName}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='city'>City *</label>
            <input 
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your city' 
              className={`border-2 p-2 rounded ${error.city ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.city && <span className="text-red-500 text-sm">{error.city}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='country'>Country *</label>
            <input 
              name="country"
              value={formData.country}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your country' 
              className={`border-2 p-2 rounded ${error.country ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.country && <span className="text-red-500 text-sm">{error.country}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='pinCode'>PIN Code *</label>
            <input 
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              type="text" 
              placeholder='Enter 6-digit PIN code' 
              className={`border-2 p-2 rounded ${error.pinCode ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.pinCode && <span className="text-red-500 text-sm">{error.pinCode}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='phoneNumber'>Phone Number *</label>
            <input 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="text" 
              placeholder='Enter 10-digit phone number' 
              className={`border-2 p-2 rounded ${error.phoneNumber ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.phoneNumber && <span className="text-red-500 text-sm">{error.phoneNumber}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email *</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="text" 
              placeholder='Enter your email' 
              className={`border-2 p-2 rounded ${error.email ? 'border-red-500' : 'border-blue-300'}`}
            />
            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
          </div>
        </div>

        
      </form>

      <div className="col-span-2 flex justify-end mt-4">
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
    </div>
  )
}

export default Heading
