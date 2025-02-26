import { TRENDING_DESTINATIONS } from '@/config/app.config';
import Destination from './destination';

const TrendingDestination = () => {
  return (
    <section id="trending-destination" className="container my-16">
        <div className="mb-4 space-y-1">
            <h2 className="text-2xl font-bold">Trending Destinations</h2>
            <p className="text-base text-muted-foreground">
                Most popular choices for travellers from India
            </p>
        </div>

        <div className="grid grid-cols-6 gap-4">
            {TRENDING_DESTINATIONS.map((destination, index) => {
                return (
                    <Destination key={index} title={destination.title} img={destination.image} className={destination.className}/>
                )
            })}
        </div>
        
    </section>
  )
}

export default TrendingDestination
