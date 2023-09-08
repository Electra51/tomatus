import logo1 from "../../assets/StatisticLogo/1.png"
import logo2 from "../../assets/StatisticLogo/2.png"
import logo3 from "../../assets/StatisticLogo/3.png"
import logo4 from "../../assets/StatisticLogo/4.png"
import logo5 from "../../assets/StatisticLogo/5.png"
import logo6 from "../../assets/StatisticLogo/6.png"

const StatisticCard = () => {

    const staticValue=[
        {
            id:"1",
            img:logo1,
            number:"7540",
            color:'#F75757',
            detail:"Order Received"
        },
         {
            id:"2",
            img:logo2,
            number:"2625",
            color:"#78D25B",
            detail:"Today Delivered"
        },
         {
            id:"3",
            img:logo3,
            number:"9846",
            color:"#6257F7",
            detail:"New Customer"
        }, {
            id:"4",
            img:logo4,
            number:"42750",
            color:"#FA9441",
            detail:"Net Earning"
        }, {
            id:"5",
            img:logo5,
            number:"Total: 9765",
            color:"#78D25B",
            detail:"Daily sales"
        }, {
            id:"6",
            img:logo6,
            number:"Total: 6765",
            color:"#F75757",
            detail:"Daily Expense"
        }
    ]
  return (
    <div className="grid mdl:grid-cols-2 sml:grid-cols-1 gap-3">
       {
        staticValue?.map((value)=>{
            console.log(value)
return(
   <div key={value?.id} className="card rounded-none bg-componentColor text-white">
  <div className="flex justify-center gap-4 items-center px-4 py-5">
    <div>
<img src={value?.img}/>
    </div>
    <div>
        <h3 style={{color:value.color}} className="font-semibold text-xl">{value?.number}</h3>
        <p className="text-white">{value?.detail}</p>
    </div>
   
  </div>
</div>
)
        })
    }
    </div>
    
    
  )
}

export default StatisticCard