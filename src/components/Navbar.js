import { useState } from "react";
function Navbar({contact}){
    const handleNavClick = (sectionId,e) => {
        const section = document.getElementById(sectionId);
        if (section) {
          
          section.scrollIntoView({ behavior: "smooth" });
        }
     
      };
    return(
        <div className="flex justify-between h-[80px] items-center">
<div className="flex flex-col relative">
    <img src="./adress.png" className="max-[520px]:hidden"></img>
    <img src="./adress2.png" className="ml-6 max-[520px]:hidden"></img>
    <img src="./vector4.png" className="w-[20px] h-[20px] absolute max-[520px]:w-[40px] max-[520px]:h-[40px] max-[520px]:relative max-[520px]:top-0 left-9 top-7"></img>
</div>
<ul className="flex max-[800px]:hidden gap-[24px] items-center">
    <li><a href="section1" onClick={(e) => {handleNavClick("section1");e.preventDefault()}}>What we do</a></li>
    <li><a href="section2" onClick={(e) => {handleNavClick("section2");e.preventDefault()}}>Design</a></li>
    <li><a href="section3" onClick={(e) => {handleNavClick("section3");e.preventDefault()}}>Production</a></li>
    <li><a href="section4" onClick={(e) => {handleNavClick("section4");e.preventDefault()}}>Assembly</a></li>
</ul>
<div>
    <button onClick={()=>{contact(true)}} className="w-[111px] h-[40px] rounded-[16px] border-[1.5px] p-[10px] border-[#A9ADB1] flex items-center  justify-center text-[#A9ADB1]">Contact us</button>
</div>
<img src="./gradient.png" className="z-[-10000] max-[800px]:hidden absolute w-[1000px] h-[500px] top-0 right-0"></img>
        </div>
    )
}
export default Navbar