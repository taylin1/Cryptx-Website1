import './App.css'
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import MainContent from './components/MainContent.jsx'
import ChartVisual from "./components/ui/ChartVisual";
import MetricCard from "./components/ui/MetricCard";
import TransactionTable from "./components/ui/TransactionTable";


function App() {
  
  return (
    <>
       <NavBar />
       <SideBar/> 
       <div className='lg:max-w-10xl '>
        <div className='flex flex-col md:flex-row justify-evenly items-center space-x-10 mt-25 ml-15 w-full'>
       <MetricCard/>
       <ChartVisual/>
       </div>
       </div>
       <div className='lg:max-w-10xl'>
       <div className='flex flex-col md:flex-row ml-19 justify-evenly items-center space-x-10 w-full'>
       <TransactionTable/>
       <MainContent/>
       </div>
       </div>
       
   </>
  )
}

export default App
