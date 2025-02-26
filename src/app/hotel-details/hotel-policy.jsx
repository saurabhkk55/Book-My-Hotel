import React from 'react'

const HotelPolicy = ({ hotelInfo }) => {
  return (
    <section className='space-y-4'>
      {/* Part 1 : Hotel Policy heading */}
      <h1 className='mt-6 font-bold text-2xl'>Hotel Policy</h1>
      
      {/* Part 2 : Hotel checkin & checkout */}
      <div className='flex gap-4 pl-5'>
        <div>
          <span>Check-in</span>
          <div
            className="mt-3 relative px-4 py-1 border border-border before:absolute before:size-4 
            before:rotate-[44deg] before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border"
          >
            <p className="text-lg font-semibold">{hotelInfo.hotelPolicy.checkIn}</p>
          </div>
        </div>
        <div>
          <span>Check-out</span>
          <div
            className="mt-3 relative px-4 py-1 border border-border before:absolute before:size-4 
            before:rotate-[44deg] before:bg-background before:-top-2 before:left-2 before:border-t before:border-l before:border-border"
          >
            <p className="text-lg font-semibold">{hotelInfo.hotelPolicy.checkout}</p>
          </div>
        </div>
      </div>
      
      {/* Part 3 : Hotel rules */}
      <div>
        { hotelInfo.hotelPolicy.rules.map((rule, index) => {
          return (
            <li key={index} className='font-light text-sm'>{ rule }</li>
          )
        }) }
      </div>
    </section>
  )
}

export default HotelPolicy
