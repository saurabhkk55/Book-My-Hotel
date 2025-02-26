const Destination = ({title, img, className}) => {
  return (
    <div className={`h-[270px] rounded-lg overflow-hidden relative ${className}`}>
      <img 
        src={`assets/${img}`} 
        alt={title} 
        className="object-cover size-full z-[1]" 
      />
      <div className='absolute from-70% to-100% inset-0 size-full bg-gradient-to-t from-transparent to-blue-800/60'>
        <div className='p-3'>
            <h3 className='text-xl font-bold text-white'>{title}</h3>
        </div>
    </div>
    </div>
  )
}

export default Destination