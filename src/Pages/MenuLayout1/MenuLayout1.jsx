
import {BsFillGrid3X2GapFill, BsFillGrid3X3GapFill} from "react-icons/bs"
import {LuLayoutGrid} from "react-icons/lu"
import logo1 from "../../assets/recipe/1.jpg"
import logo2 from "../../assets/recipe/2.jpg"
import logo3 from "../../assets/recipe/3.jpg"
import logo4 from "../../assets/recipe/4.jpg"
import logo5 from "../../assets/recipe/5.jpg"
import logo6 from "../../assets/recipe/6.jpg"
import logo7 from "../../assets/recipe/7.jpg"
import logo8 from "../../assets/recipe/15.jpg"
import logo9 from "../../assets/recipe/9.jpg"
import logo10 from "../../assets/recipe/10.jpg"
import logo11 from "../../assets/recipe/11.jpg"
import logo12 from "../../assets/recipe/12.jpg"
import logo13 from "../../assets/recipe/13.jpg"
import logo14 from "../../assets/recipe/14.jpg"

const MenuLayout1 = () => {
   
  
 const staticValue=[
        {
        id:"01",
        name:"Chicken Sandwich",
        description:"So Delicious and hot burger with letus and cheech",
       price:"25.09",
        img:logo1
    },
      {
        id:"02",
        name:"Chicken Grill",
        description:"So Delicious and hot burger with letus and cheech",
       price:"28.00",
        img:logo2
    },
    {
        id:"03",
        name:"Hot Pizza",
        description:"So Delicious and hot burger with letus and cheech",
       price:"38.00",
        img:logo3
    },
    {
        id:"04",
        name:"Grill Chicken Buffalitos",
        description:"So Delicious and hot burger with letus and cheech",
       price:"48.00",
        img:logo4
    },
    {
        id:"05",
        name:"Dessert Bakes Cookies",
        description:"So Delicious and hot burger with letus and cheech",
       price:"32.00",
        img:logo5
    },
    {
        id:"06",
        name:"Dhokla",
        description:"So Delicious and hot burger with letus and cheech",
       price:"15.00",
        img:logo6
    }
    ,
    {
        id:"07",
        name:"Chicken Soup",
        description:"So Delicious and hot burger with letus and cheech",
       price:"29.00",
        img:logo7
    }
     ,
    {
        id:"08",
        name:"Hot Dog",
        description:"So Delicious and hot burger with letus and cheech",
       price:"22.00",
        img:logo8
    }
     ,
    {
        id:"09",
        name:"Skabu Kapostu Zupa",
        description:"So Delicious and hot burger with letus and cheech",
       price:"32.00",
        img:logo9
    }
     ,
    {
        id:"10",
        name:"Strawberry Cheesecake",
        description:"So Delicious and hot burger with letus and cheech",
       price:"52.00",
        img:logo10
    },
     
    {
        id:"11",
        name:"Cheese Burger",
        description:"So Delicious and hot burger with letus and cheech",
       price:"53.98",
        img:logo11
    },
      
    {
        id:"12",
        name:"Cold Coffee",
        description:"So Delicious and hot burger with letus and cheech",
       price:"30.00",
        img:logo12
    },
      
    {
        id:"13",
        name:"Caesar Dressing",
        description:"So Delicious and hot burger with letus and cheech",
       price:"43.00",
        img:logo13
    },
      
    {
        id:"14",
        name:"Chicken Fry",
        description:"So Delicious and hot burger with letus and cheech",
       price:"13.00",
        img:logo14
    }
    ]
//  const { bID } = useParams();
//  console.log(bID)
  return     <div className="sx:mr-[33px] sml:mr-[33px] md:mr-0 lg:mr-0 overflow-hidden"> 
     <div className='bg-[#32363F] px-1 py-2 mx-3 flex justify-between'>
      <div>
        <h3 className='text-[#F16262] pl-2'>Menu Layout 01</h3>
      </div>
      
{/* <!-- Breadcrumb --> */}
     <nav className="flex justify-between" aria-label="Breadcrumb" >
     <ol className="inline-flex items-center mb-3 sm:mb-0">
     <h3 className='text-white pl-2'>Home</h3>
     <span className="mx-2 text-gray-400">/</span>
     <li aria-current="page">
     <h3 className='text-[#F16262] pl-1 px-2'>Menu Layout 01</h3>
     </li>
     </ol>
    </nav>
    </div>
<div className="mx-3 mt-8">
     <div className='bg-[#32363F] px-1 py-2 mx-3 flex justify-between'>
      <div>
        <h3 className='text-[#F16262] pl-2'>Menu Layout 01</h3>
      </div>
      <div className="flex gap-2 items-center text-NormalTextColor">
        <BsFillGrid3X2GapFill size={25}/>
        <LuLayoutGrid size={25}/>
         <BsFillGrid3X3GapFill size={25} className="text-TextColor"/>
      </div>

    </div>

</div>


 <div className="grid mdl:grid-cols-5 sml:grid-cols-1 gap-3 mx-6 mt-5 overflow-y-auto h-[470px] cursor-pointer">
       {
        staticValue?.map((value)=>{
            console.log(value)
return(
   <div key={value?.id} className="card rounded-none bg-componentColor text-white">
  <div className="flex flex-col justify-center gap-4 items-center px-4 py-5">
 <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={value?.img}/>
  </div>
</div>
    <div>
        <h3 className="text-center font-semibold">{value?.name}</h3>
        <p className="text-center">${value.price}</p>
    </div>
   
  </div>
</div>
)
        })
    }
    </div>



    
   
</div>;
}

export default MenuLayout1