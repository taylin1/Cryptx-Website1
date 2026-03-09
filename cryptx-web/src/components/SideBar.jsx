import React from 'react'
import Cryptx from "../assets/cryptxlogo.png"

function SideBar() {
  return (
  <section className="fixed top-0 left-0 h-screen w-64 bg-gray-100 p-5 transform -translate-x-full lg:translate-x-0 transition-transform duration-300">

  {/* Logo */}
  <div className="flex items-center gap-2 mb-10">
    <img src={Cryptx} className="w-10 h-10" alt="icon"/>
    <h2 className="text-black font-bold text-xl">Cryptx</h2>
  </div>

  {/* Menu */}
  <div className="space-y-6 text-gray-600">

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Overview</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Chart</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Transactions</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Wallet</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Mail Box</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Settings</a>
    </div>

    <div className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer">
      <svg width="24" height="24">...</svg>
      <a href="#">Logout</a>
    </div>

  </div>

</section>
  )
}

export default SideBar;

