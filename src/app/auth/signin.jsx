import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit = (data) => {
    console.log('Got the data...', data);
  };
  
  const handleShowPassowrd = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword)
  };
  
  const formLabelStyle = "text-lg font-semibold";
  
  return (
    <section className="space-y-8">
      <Form {...form} >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 px-4"
        >
          <FormField
            control={ form.control }
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={formLabelStyle}>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@ex.com" {...field} />
                </FormControl>
                {/* <FormDescription>This is your email.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={ form.control }
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={formLabelStyle}>Password</FormLabel>
                <div className="flex relative">
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} {...field} />
                  </FormControl>
                  <Button 
                    onClick={handleShowPassowrd}
                    size="sm"
                    className={`
                      m-0.5 
                      absolute 
                      right-0
                      bg-white 
                      hover:bg-accent 
                      hover:cursor-pointer 
                      shadow-none 
                      border-none
                    `}
                  >
                    <Icon icon={showPassword ? "eyeOpen" : "eyeOff"} className="text-black"/>
                  </Button>
                </div>
                {/* <FormDescription>This is your email.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full h-10"
            aria-label="Login to your Account"
          >
            Log in
          </Button>
        </form>
      </Form>
      <div className="text-center text-sm">
      <p>
        Don't have an account?{' '}
        <a href="#" className="text-primary hover:underline">
          Create Account
        </a>
      </p>
      </div>
    </section>
  )
}

export default Signin
