import { 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import Icon from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DESTINATIONS } from "@/config/app.config"
import Icons from "@/lib/icons"
import { useState } from "react"

const LocationInput = ({ form }) => {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  const city = form.watch('city');

  const citySelectHandler = (e, index) => {
    const selectedDestination = DESTINATIONS[index];
    form.setValue('city', selectedDestination?.city || '');
    setIsPopOverOpen(false);
  }
  
  return (
    <section>
      <Popover open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
        <PopoverTrigger>
          <FormField
            control={ form.control }
            name="city"
            render={({ field }) => (
              <FormItem>
                    <div className="flex items-center gap-1">
                      <Icon icon="bed" size="32" />
                      <FormControl>
                        <Input 
                          type="city"
                          placeholder="Where are you going?" 
                          {...field}
                          className="w-full h-full px-2 text-sm border-0 shadow-none focus-visible:ring-transparent focus-visible:ring-offset-transparent placeholder:font-normal placeholder:text-foreground focus:placeholder-muted-foreground"
                        />
                      </FormControl>
                      <div
                        role="button"
                        className={`transition-all duration-100 ease-in-out ${
                          city 
                            ? 'p-0.5 rounded-full bg-red-500 text-white border hover:cursor-pointer hover:bg-red-600 hover:scale-110'
                            : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          form.setValue('city', '');
                        }}
                        aria-label="Clear the city Input"
                      >
                        <Icon icon="clear" size="22" />
                      </div>
                    </div>
              </FormItem>
            )}
          />
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="max-h-[300px] overflow-y-auto">
            { DESTINATIONS.map((destination, index) => {
              return (
                <div 
                  key={ index }
                  className="flex gap-2 items-center m-2 border-b-2 hover:bg-accent"
                  onClick={(e) => citySelectHandler(e, index)}
                >
                  <Icon icon="mapPin" size="24" />
                  <div>
                    <p className="font-semibold text-muted-foreground">
                      { destination.city }
                    </p>
                    <p className="text-sm text-muted-foreground">
                      { destination.country }
                    </p>
                  </div>
                </div>
              );
            }) }
          </div>
        </PopoverContent>
      </Popover>
    </section>
  )
}

export default LocationInput
