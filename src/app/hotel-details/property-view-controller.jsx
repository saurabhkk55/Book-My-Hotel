import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PropertyViewController = ({hotelData}) => {
  const hotelImages = hotelData.hotel.photos;
  return (
    <section>
      <Carousel 
        opts={{
          breakpoints: {
            '(min-width: 1024px)': { slidesToScroll: 2 },
          },
        }}
        className="overflow-hidden rounded-lg"
      >
        <CarouselContent className="-ml-0.5">
          {hotelImages.map((hotelImg, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-1/2 pl-0.5">
                <img src={hotelImg} alt='hotel-img-index-${index}' className='object-cover h-96 w-full '/>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-1 shadow-lg" />
        <CarouselNext className="right-1 shadow-lg" />
      </Carousel>
    </section>
  )
}

export default PropertyViewController
