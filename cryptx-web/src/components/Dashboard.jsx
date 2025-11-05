import React from 'react';
import Bitcoin from "../assets/Bitcoin.png"
import Cardano from "../assets/Cardano.png"
import Etherium from "../assets/Etherium.png"
import Litecoin from "../assets/Litecoin.png"
const chart =[
  {
   price: "$40,291",
   title: "Bitcoin-BTC",
   icon: Bitcoin ,
},
{
  price:"$18,291",
  title:"Etherium-ETH",
  icon: Etherium,
},
{
  price:"$8,291",
  title:"Litecoin-ITL",
  icon: Litecoin,
},
{
  price:"$3,291",
  title:"Cardano",
  icon: Cardano,
},

];


function Dashboard() {
  return (
   <>
      <section id="projects" className="py-20 bg-white text-center ">
      <div className="grid md:grid-cols-2 gap-12 w-md mx-auto px-4 py-6 fixed left-68">
        {/*This creates a new array that cycles through original array*/}
        {chart.map((chart, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={chart.icon} alt={chart.icon} className="w-12 h-16  p-2"/>
            <span></span>
            <div className="p-4">
              <p>{chart.price}</p>
              <h3 className="text-xl font-semibold py-2">{chart.title}</h3>
            </div>
          </div>
       ))}
      </div>
    </section>
   </>
  )
}

export default Dashboard;