const AuthLayout = ({ children, pageTitle, pageDescription }) => {
  return (
    <section className="container my-10 sm:w-[480px] space-y-6 border shadow-lg rounded-md">
      {/* Part 1 : Logo, title, description */}
      <div className='py-2 space-y-1  flex flex-col gap-1 items-center'>
        <div className=" p-2 shadow-lg rounded-md">
          <img 
            src="assets/bookingcom-icon-logo.svg"
            alt=""
            className='w-[50px] h-[50px] object-cover'
          />
        </div>
        <h1 className='text-lg font-semibold'>{ pageTitle }</h1>
        <p className='text-sm'>{ pageDescription }</p>
      </div>

      {/* Part 2 : SignIn or SingUp */}
      { children }
    </section>
  )
}

export default AuthLayout
