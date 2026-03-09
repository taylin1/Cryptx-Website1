import React from "react";

function NavBar() {
  return (
    <>
   <nav className="fixed top-0 left-0 lg:left-68 right-0 p-4 lg:p-5 z-50 bg-white">
  <div className="flex flex-wrap justify-between items-center gap-4">

    {/* Search Bar */}
    <div className="w-60 md:w-full">
      <input
        type="text"
        placeholder="Search keywords"
        className="border border-gray-300 rounded-md w-full sm:w-72 p-3 h-10"
      />
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-4 sm:gap-6">

      {/* Icons */}
      <svg width="24" height="24">...</svg>

      <svg width="24" height="24">...</svg>

      {/* Profile */}
      <button className="w-9 h-9 rounded-full bg-green-600"></button>

      {/* User Info (hide on very small screens) */}
      <div className="hidden sm:block">
        <h4 className="font-bold text-sm">Laurice</h4>
        <p className="text-xs text-gray-500">@laurice22</p>
      </div>

    </div>

  </div>

  <hr className="border-gray-300 mt-4"/>
</nav>
</>
  );
}

export default NavBar;
