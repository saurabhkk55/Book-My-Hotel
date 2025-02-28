import { Form } from "@/components/ui/form"
import DateSelectInput from "./date-select-input"
import LocationInput from "./location-input"
import OccupancyInput from "./occupancy-input"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

const Search = () => {
  const form = useForm({
    defaultValues: {
      city: '',
    },
  });

  const onSubmit = (data) => {
    console.log("Data recieved => ", data)
  }

  return (
    <div className="bg-red-">
      <Form {...form} >
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-4"
        >
          <LocationInput form={form} />
          <DateSelectInput />
          <OccupancyInput />
          <Button>Search</Button>
        </form>
      </Form>




    </div>
  )
}

export default Search
