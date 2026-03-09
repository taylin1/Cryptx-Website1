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
       <div className='flex flex-col mr-15 md:flex-row justify-end justify-evenly items-center space-x-10 mt-25'>
       <MetricCard/>
       <ChartVisual/>
       </div>
       <div className='flex flex-col mr-15 md:flex-row justify-end justify-evenly items-center space-x-20'>
       <TransactionTable/>
       <MainContent/>
       </div>
       
   </>
  )
}

export default App
