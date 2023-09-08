import ChartCard from "../../Components/UI/ChartCard"
import CongratulationCard from "../../Components/UI/CongratulationCard"
import CustomerFeed from "../../Components/UI/CustomerFeed"
import StatisticCard from "../../Components/UI/StatisticCard"
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className="sx:mr-[33px] sml:mr-[33px] md:mr-0 lg:mr-0 overflow-hidden"> 
     <div className='bg-[#32363F] px-1 py-2 mx-3 flex justify-between'>
      <div>
        <h3 className='text-[#F16262] pl-2'>Food</h3>
      </div>
      
{/* <!-- Breadcrumb --> */}
     <nav className="flex justify-between" aria-label="Breadcrumb" >
     <ol className="inline-flex items-center mb-3 sm:mb-0">
     <h3 className='text-white pl-2'>Home</h3>
     <span className="mx-2 text-gray-400">/</span>
     <li aria-current="page">
     <h3 className='text-[#F16262] pl-1 px-2'>Food</h3>
     </li>
     </ol>
    </nav>
    </div>


    
    <div className="grid sml:grid-cols-1 mdl:grid-cols-2 gap-1 mt-4 overflow-y-auto h-[470px] sml:h-[683px] mdl:h-[540px]">
  <div className=""><CongratulationCard/>
  <div className=" px-2 py-6 mx-3 text-white"> 
  <p className="text-white">Statistic</p>
  <StatisticCard/></div>
  </div>
 <div className=""><ChartCard/>
  <div className=" px-2 py-6 mx-3 text-white"> 
  <div className="flex justify-between items-center">
    <p className="text-white">Customer Feed</p>
    <p>View all</p>
  </div>
  <CustomerFeed/></div>
  </div>
  
</div>
</div>
  )
}

export default Dashboard;