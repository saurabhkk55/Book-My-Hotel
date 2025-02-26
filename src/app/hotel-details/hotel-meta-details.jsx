import Icon from "@/components/ui/icon"

const HotelMetaDetails = ({hotelData}) => {
  return (
    <section>
      {/* PART - 1 : Hotel name, location & Rating */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Hotel Almond Resorts and Spa</h1>
          <p className="font-light">{hotelData.hotel.contactInfo.address}, {hotelData.hotel.city}</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 bg-brand rounded-t-md text-white p-1 font-bold">
            <span>
              4.8
            </span>
            <span>
              <Icon icon="star" size="14" className="fill-white"/>
            </span>
          </div>
          <div className="bg-secondary rounded-b-md text-xs p-1">
            <span>
              663 Ratings
            </span>
          </div>
        </div>
      </div>

      {/* PART - 2 :  */}
      {/* PART - 2.1 : Diamond batch for Company-Serviced */}
      <div className="mt-4 flex gap-2 items-center bg-secondary w-fit rounded-sm p-1 text-xs">
        <Icon icon="gem" size="14"/>
        <span>
          Company-Serviced
        </span>
      </div>

      {/* PART - 2.2 : Curve & 5.0... */}
      <div className="mt-2 pl-2 flex gap-2 items-center">
        <Icon icon="curve" className="-mt-3" />
        <p>5.0 · Check-in rating &gt; Delightful experience</p>
      </div>

      {/* PART - 2.3 : Heart & Located Less... */}
      <div className="mt-4 p-2 bg-orange-50 flex items-center gap-1 text-orange-600 rounded-md">
        <Icon icon="heart" size="16" />
        <p>Located Less Than 5 Km From Medanta Hospital | Located 3 Kms From Omaxe Celebration Mall</p>
      </div>

      {/* PART - 2.4 : Amenities */}
      <div>
        <h1 className="mt-4 font-bold text-2xl">Amenities</h1>
        <div className="mt-1 flex flex-wrap gap-2 w-[calc(180px*2+100px)]">
          {hotelData.hotel.amenities.map((facility, index) => {
            return (
              <div key={index} className="flex gap-2 items-center">
                <Icon icon="check" size="16" className="text-green-500" />
                <p className="w-[180px]">{facility}</p>
              </div>
              
            )
          })}
        </div>
      </div>

      {/* PART - 2.4 : About this Property */}
      <div>
        <h1 className="mt-4 font-bold text-2xl">About this Property</h1>
        <p className="mt-1 text-sm">OYO Townhouse is based on the needs of the millennial traveler. Every single element of the hotel – from the breakfast menu to the booking process has been re-engineered for comfort, efficiency, convenience and affordability. Each Townhouse is designed to complement its neighborhood.</p>
      </div>
    </section>
  )
}

export default HotelMetaDetails
