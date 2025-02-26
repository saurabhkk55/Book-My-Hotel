import Icon from "../ui/icon"
import { Button } from "../ui/button"
import { SERVICE_LIST }  from "@/config/app.config"

const Header = () => {
    return (
        <header className="bg-brand py-2">
            <div className="container">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <a href="#" aria-label="Go to Booking.com"> 
                            <img
                                width={144}
                                height={24}
                                src="/assets/booking.com.svg" 
                                alt="Logo of Booking.com"
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <Button className="bg-white text-primary cursor-pointer rounded-sm hover:bg-white/95">
                            Register
                        </Button>
                        <Button className="bg-white text-primary cursor-pointer rounded-sm hover:bg-white/95">
                            LogIn
                        </Button>
                    </div>
                </div>
                <div className="flex gap-1 items-center ">
                    {SERVICE_LIST.map(
                        (item) => {
                            return (
                                <Button key={item.id} className={`bg-transparent font-normal rounded-full hover:bg-white/10
                                    cursor-pointer flex justify-center items-center gap-2 px-2 h-11 ${item.active && 'border border-white bg-white/10'}`}>
                                    <Icon icon={item.icon} />
                                    {item.title}
                                </Button>
                            )
                        }
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
