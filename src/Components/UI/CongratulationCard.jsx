import imgIcon from '../../assets/Icon.png';

const CongratulationCard = () => {
  return (
    <div className="card bg-componentColor rounded-none px-2 py-6 mx-3 text-white">
  <div className="card-body items-center text-center">
      <img src={imgIcon}></img>
       <h1 className="card-title text-White">15 <small>th</small> Years</h1>
   <div className="text-white"><h2>This Year Winner to Tomatus.<span className="text-[#F16262]">Congratulation!</span></h2></div>
    <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
   
  </div>
</div>
  )
}

export default CongratulationCard