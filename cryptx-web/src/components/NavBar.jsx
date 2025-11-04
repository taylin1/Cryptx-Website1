import React from 'react'

function NavBar() {
    return(
 <>
 {/*Navbar Container*/}
 <nav className='fixed top-0 left-68 right-0 p-5'>
    <div className='flex flex-wrap justify-between items-center h-10'>
        {/*Search Bar*/}
         <input type="text" id="text" placeholder='Search type of keywords' className='border border-gray-300 rounded-md w-sm p-4 h-10'></input>
         <div className='flex items-center gap-8'>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
     <button className='w-10 h-10 rounded-full bg-green-600'></button>

     <div>
        {/*User Information*/}
       <h4 className='font-bold'>Laurice</h4>
       <p>@laurice22</p>
     </div>
     </div>
     </div>
     
    <hr className='border-gray-300 mt-8'></hr>
</nav>

 </>
      
  );
}

export default NavBar;
