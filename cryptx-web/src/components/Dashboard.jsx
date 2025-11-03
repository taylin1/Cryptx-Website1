import React from 'react'
import Cryptx from "../assets/cryptxlogo.png"

function Dashboard() {
  return (
    <div>
        {/*Dashboard*/}
      <section className="p-5 bg-gray-100 h-screen w-68 ">
        <div className='flex justify-center'>
        <img src={Cryptx} className="w-15 h-10" alt="icon"/>
        <h2 className="text-black font-bold text-2xl px-2 mb-8">Cryptx</h2>
        </div>
        <div className="space-y-8 text-center flex flex-col">
            <a href="#">Overview</a>
             <a href="#">Chart</a>
              <a href="#">Overview</a>
               <a href="#">Overview</a>
                <a href="#">Overview</a>
                 <a href="#">Overview</a>

        </div>
        </section>

    </div>
  )
}

export default Dashboard

