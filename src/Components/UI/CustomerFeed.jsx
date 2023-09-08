import logo1 from "../../assets/customer/1.jpg"
import logo2 from "../../assets/customer/2.jpg"
import logo3 from "../../assets/customer/3.jpg"
import logo4 from "../../assets/customer/4.jpg"

const CustomerFeed = () => {
  const customerValue=[
        {
            id:"1",
            img:logo1,
            name:"Inverness McKenzie",
            time:"5 Min ago",
            detail:"New Food Menu wes Awesome"
        },
         {
            id:"2",
            img:logo2,
            name:"Rodney Artichoke",
           time:"10 Min ago",
            detail:"Great support, like it veru much"
        },
         {
            id:"3",
            img:logo3,
            name:"Indigo Violet",
           time:"25 Min ago",
            detail:"We like your birthday ckae"
        }, {
            id:"4",
            img:logo4,
            name:"Hermann P. Schnitzel",
           time:"28 Min ago",
            detail:"Awesome Food Menu"
        }
    ]
  return (
    <div className="flex flex-col">
       {
        customerValue?.map((value)=>{

            console.log(value)
            return(
                <div key={value?.id}>
 <div className="bg-componentColor mt-3 px-4 py-3 flex justify-between items-center">
    <div className="flex justify-start items-center gap-3">
                            <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={value?.img} />
  </div>
</div>
<div>
    <h3>{value?.name}</h3>
    <p className="text-NormalTextColor">  {value?.detail}</p>
</div>
    </div>

    <button className="bg-bodyColor rounded-full px-4 py-2">{value?.time}</button>

 </div>

                </div>
            )
        })
       }
    </div>
  )
}

export default CustomerFeed;



 