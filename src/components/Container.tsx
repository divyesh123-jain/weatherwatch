import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
   <>
     <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black'>
           
                <div className='flex-1 bg-black px-4 pb-4 md:p-4'>
                    
                    <div className='bg-white/95 rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
                        
                        {children}
                    </div>
                </div>
            </div>
   </>
  )
}

export default Container
