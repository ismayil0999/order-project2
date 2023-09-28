function SectionTwo(){
    return(
        <div id="section1" className="w-full max-[500px]:h-[1200px] max-[500px]:p-[24px] h-auto   rounded-t-[60px] bg-white h-[568px] p-[60px] border-box mt-[100px]">
<h1 className="sec1-title max-[565px]:text-[15px]">Our technologies cover all the major areas of value creation.</h1>
<div className="w-full flex flex-wrap max-[765px]:flex-col max-[765px]:items-center h-auto justify-between gap-[15px] mt-[40px]">
<div className="card w-[300px] h-[290px] border-box flex p-[24px] flex-col justify-between items-center border-[1px] border-[#E4E8EF] rounded-[16px] padding-[24px]">
<img src="./vector1.png"></img>
<div className="flex flex-col items-start">
<h1 className="card-title">Design</h1>
    <h6 className="card-subtext">Architectural and engineering design solutions.</h6>
</div>
</div>
<div className="card w-[300px] h-[290px] border-box flex p-[24px] flex-col items-center justify-between border-[1px] border-[#E4E8EF] rounded-[16px] padding-[24px]">
<img src="./vector2.png"></img>
 <div className="flex flex-col items-start">
 <h1 className="card-title">Production</h1>
    <h6 className="card-subtext">Robotisation in prefab manufacturing and supply chain.</h6>
 </div>
</div>
<div className="card w-[300px] h-[290px] border-box flex p-[24px] flex-col items-center justify-between border-[1px] border-[#E4E8EF] rounded-[16px] padding-[24px]">
<img src="./vector3.png"></img>
  <div className="flex flex-col items-start">
  <h1 className="card-title">Assembly</h1>
    <h6 className="card-subtext">In-house tech for robotic assembly of prefab building modules.</h6>
  </div>
</div>

</div>
        </div>
    )
}
export default SectionTwo