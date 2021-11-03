// import MeetingHeadCards from './components/cards/MeetinHeadCards'
import AnalyticalChart from './components/charts/AnalyticalChart'
import AnalyticalCardHolder from './components/AnalyticalPageBottom/AnalyticalCardHolder'
const Analytics = () => {
  return (
    <div className="p-2 bg-white mt-1" >
    
    <h2 className='m-2'><strong>Meeting Overview</strong></h2>
    
     <div className='mt-2'>

     </div>   
    <AnalyticalChart />
        <AnalyticalCardHolder />
    </div>
  )
}

export default Analytics
