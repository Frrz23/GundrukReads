import React from 'react'

const Categories = () => {
  return (
    <>
      <div className=''>
        <p className='pl-32'>New</p>
        <div className='flex justify-between items-center'>
          <p className='pl-32'>3324</p>
          <div className='flex space-x-4 pr-28'>
            <p>Order By</p>
            <p>Latest</p>
            <p>Trending</p>
            <p>Most Views</p>
            <p>New</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-24 '>
        {/* Add your grid items here */}
      </div>
    </>
  )
}

export default Categories
