import PropertyViewController from './property-view-controller'
import { HOTEL_DATA, HOTEL_INFO } from './hotel-details-dummy-data';
import HotelMetaDetails from './hotel-meta-details';
import HotelRoomPicker from './hotel-room-picker';
import HotelCheckoutCard from './hotel-checkout-card';
import HotelPolicy from './hotel-policy';

const HotelDetails = () => {
  const hotelData = HOTEL_DATA;
  const hotelInfo = HOTEL_INFO;
  return (
    <div className='container mt-6'>
      <PropertyViewController hotelData={hotelData} />
      <div className='flex mt-4'>
        <div className='flex-1 w-2/3'>
          <HotelMetaDetails hotelData={hotelData} />
          <HotelRoomPicker hotelData={hotelData} />
          <HotelPolicy hotelInfo={hotelInfo} />
        </div>
        <div className='w-1/3 relative'>
          <div className="sticky top-4">
            <HotelCheckoutCard hotelInfo={hotelInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetails
