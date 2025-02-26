import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HotelRoomPicker = ({hotelData}) => {
  return (
    <section className="bg-blue-">
      <h1 className="mt-4 font-bold text-2xl">Choose your room</h1>
      <HotelRoomPickerCard hotelData={hotelData} />
    </section>
    // <div>HotelRoomPicker</div>
  )
}

export default HotelRoomPicker

const HotelRoomPickerCard = ({hotelData}) => {
  return (
    <>
      {/* PART - 1 : Star & Selected Category */}
      <div className="mt-2 p-1 pl-6 flex items-center gap-1 bg-brand text-white rounded-t-lg">
        <Icon icon="star" className="fill-yellow-600 text-yellow-600" size="14" />
        <h6 className="text-sm">Selected Category</h6>
      </div>

      {/* PART - 2 : Room Body */}
      <div className="mb-2">
        {hotelData.rooms.map((room, index) => {
          return (
            // PART - 2.1 : Facilities in the room
            <div key={index} className="pt-2 mb-4 border rounded-b-md">
              <div className="flex justify-between border-b">
                <div className="px-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold">{room.type}</h2>
                    {room.isSelected && <Icon icon="check" size="26" className="text-white bg-green-600 rounded-full p-1" /> }
                  </div>
                  
                  <div>
                    {room.amenities.map((facility, index) => {
                      return (
                        <div key={index}>
                          <div className="mt-1 flex gap-1 items-center">
                            <Icon icon="check" size="16" className="text-green-500" />
                            <p>{facility}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Room Image */}
                <div className="px-4 w-[240px] h-[180px]">
                  <img src={room.photos[0]} alt="room" className="object-cover size-full rounded-lg" />
                </div>
              </div>

              {/* PART - 2.2 : Price & Select Button */}
              <div className="mt-2 pb-2 px-4 flex justify-between items-center">
                <div className="flex items-center gap-3 ">
                  <span className="text-lg font-bold">₹{room.price}</span>
                  <span className="text-sm line-through font-light">₹1,078.125</span>
                </div>
                <div className="px-8 py-2">
                  <Button
                    disabled={room.isSelected}
                    disabled:opacity-80="true"
                    variant="outline"
                    size="lg"
                    className={`
                      ${!room.isSelected ? 'text-destructive' : 'text-black'} 
                      font-semibold
                      w-[180px]
                      hover:cursor-pointer
                    `}
                  >
                    {room.isSelected && <Icon icon="check" size="16" className="bg-green-600 text-white rounded-full p-[2px]" />}
                    {room.isSelected ? 'SELECTED' : 'SELECT'}
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}