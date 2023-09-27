import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import BottomSection from './components/BottomSection';
import AlertBox from './components/AlertBox';


function App() {
  const [agree,setAgree]=useState(true)
  return (
    <div className="container  lg:w-[80%] w-full h-full mx-auto  max-[655px]:w-[95%]">
<Navbar/>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
<SectionFour/>
<SectionFive/>
<SectionSix/>
<SectionSeven/>
<BottomSection/>
{agree===true ? <AlertBox agree={setAgree}/> : null}

    </div>
   
  );
}

export default App;
