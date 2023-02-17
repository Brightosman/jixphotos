import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
        <h1 className="font-bold text-2xl p-4">Some More Photos</h1>
        <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
            <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                <Image src="https://images.unsplash.com/photo-1551895678-cf655d8c0141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVmZmllbCUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="/" layout="responsive" width="215" height="217" objectFit='cover'/>
            </div>
            <div className="w-full h-full">
                <Image src="https://images.unsplash.com/photo-1555929940-7cd7cfc40887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGVmZmllbCUyMHRvd2VyJTIwUGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="/" layout="responsive" width="215" height="217"  objectFit='cover' />
            </div>
            <div className="w-full h-full">
                <Image src="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGVmZmllbCUyMHRvd2VyJTIwUGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="/" layout="responsive" width="215" height="217"  objectFit='cover' />
            </div>
            <div className="w-full h-full">
                <Image src="https://images.unsplash.com/photo-1623009092355-88d4023fdd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGVmZmllbCUyMHRvd2VyJTIwUGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="/" layout="responsive" width="215" height="217"  objectFit='cover' />
            </div>
            <div className="w-full h-full">
                <Image src="https://images.unsplash.com/photo-1517664662723-718abb38197a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="/" layout="responsive" width="215" height="217"  objectFit='cover' />
            </div>
        </div>
    </div>
  )
}

export default Portfolio