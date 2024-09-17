import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Counter() {

    const [count, setCount] = useState(false)
    return (



        <div >
            <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
                <div className="row w-100 d-flex p-5 space between mt-3" style={{ backgroundColor: 'rgb(8, 8, 55)',height:'250px' }}>

                    <div className="col-md-2"></div>
                    <div className='col-md-2' >
                        <h2 className='text-6xl font-bold text-light'>
                            {count &&<CountUp start={20} end={80} duration={2.75}></CountUp>}+
                        </h2>
                        <p className='py-2 text-light'>Happy Customers</p>
                    </div>
                    <div className='col-md-2' >
                        <h2 className='text-6xl font-bold text-light'>  {count &&<CountUp start={10} end={90} duration={2.75}></CountUp>}+</h2>
                        <p className='py-2  text-light'>Happy Customers</p>
                    </div>
                    <div className='col-md-2' >
                        <h2 className='text-6xl font-bold text-light'> {count &&<CountUp start={20} end={120} duration={2.75}></CountUp>}+</h2>
                        <p className='py-2  text-light'>Happy Customers</p>
                    </div>
                    <div className='col-md-2' >
                        <h2 className='text-6xl font-bold text-light'>  {count &&<CountUp start={0} end={100} duration={2.75}></CountUp>}+</h2>
                        <p className='py-2  text-light'>Happy Customers</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div ></div>
                </div>
            </ScrollTrigger>

        </div>

    )
}

export default Counter