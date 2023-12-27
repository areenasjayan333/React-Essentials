import ToggleButton from "../components/ToggleButton.jsx"
import Section from "./Section.jsx";
import {EXAMPLES} from '../data.js'
import { useState } from "react";




export default function Examples(){
    const[value,setValue] = useState();


    function handleCheck(val){
     setValue(val);
    }
    
    
    let toogleValue = <p> Please select a item</p>
    if(value){
     toogleValue = <div id="tab-content">
     <h1>{EXAMPLES[value].title} </h1>
      <p>{EXAMPLES[value].description}</p>
      <pre>
       <code>
         {EXAMPLES[value].code}
       </code>
      </pre>
    </div>
    }



    return <Section id="examples" title={Examples}> 
 
    <menu>
    <ToggleButton isSelect={value==='components'} onClick={()=>handleCheck('components')}>Components</ToggleButton>
    <ToggleButton isSelect={value==='jsx'} onClick={()=>handleCheck('jsx')}>JSX</ToggleButton>
    <ToggleButton isSelect={value==='props'} onClick={()=>handleCheck('props')}>Props</ToggleButton>
    <ToggleButton isSelect={value==='state'} onClick={()=>handleCheck('state')}>State</ToggleButton>
    
    </menu>
    {toogleValue}
  
    </Section>
}

