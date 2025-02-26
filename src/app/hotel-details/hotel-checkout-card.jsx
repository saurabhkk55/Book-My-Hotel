import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"

const HotelCheckoutCard = ({ hotelInfo }) => {
  return (
    <section className="space-y-4 p-2 ml-4 rounded-md shadow-lg border border-border">
      {/* Part 1 : Price */}
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-bold">₹718.75</h1>
        <span className="line-through font-light">₹1,078.125</span>
      </div>

      {/* Part 2 : Price Summary */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>
            Your savings
          </span>
          <span className="font-bold">
            ₹359.375
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            Total Price
          </span>
          <span className="font-bold">
            ₹718.75
          </span>
        </div>
      </div>

      {/* Part 3 : Continue to booking button */}
      <Button className="w-full py-6 text-center">Continue to Book</Button>
      
      {/* Part 4 : One line Booking record statement */}
      <div className="flex gap-1 text-yellow-500 text-sm items-center font-semibold">
        <Icon icon="zap" size="16" className="fill-yellow-500" />
        <p>
          1k+ people booked this OYO in last 6 months
        </p>
      </div>

      {/* Part 5 : Cancellation policy */}
      <Cancellationpolicy cancellationpolicy={ hotelInfo.cancellationPolicy } />
    </section>
  )
}

export default HotelCheckoutCard


const Cancellationpolicy = ({ cancellationpolicy }) => {
  return (
    <HoverCard >
      <HoverCardTrigger>
        <div className="flex gap-1 items-center text-red-700 text-sm font-semibold">
          <span>Cancellation policy</span>
          <Icon icon="circleAlert" size="14" className="" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="space-y-2 w-[360px] bg-white shadow-lg p-2 rounded-md" side="left" >
        <h3 className='text-base font-semibold'>Cancellation Policy</h3>
        <ul className="space-y-2 list-disc pl-4">
          { cancellationpolicy.map((policy, index) => {
            return (
              <li key={index} className='text-sm leading-relaxed font-medium text-accent-foreground'>
                { policy }
              </li>
            );
          }) }
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}