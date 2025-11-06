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
       <div className='flex justify-end items-center space-x-20 mt-20'>
       <MetricCard/>
       <ChartVisual/>
       </div>
       <div className='flex justify-end items-center space-x-50'>
       <TransactionTable/>
       <MainContent/>
       </div>
       
   </>
  )
}

export default App
