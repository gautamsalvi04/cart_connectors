import React from 'react'

function Inp({
    label = '',
    name = '',
    type='text',
    attr='',
    className='',
    placeholder='enter the text',
    isRequired = false,
    onchange =()=>{},
    value="",
    ...rest
     
  }){
    return (
        <div className='w-1/2'>
          <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-800">
            {label}
          </label>
          <input
            type={type}
            id={name}
            {...rest}
            className={`bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
            placeholder={placeholder}
            required={isRequired} onChange={onchange} value={value}
          />
        </div>
      )
}

export default Inp
