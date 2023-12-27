
import {CORE_CONCEPTS} from '../data.js'

function CoreConcept(props){
    return (
   <li>
    
    <img src={props.image} alt={props.title} />
    <h2> {props.title}</h2>
    <p> {props.description}</p>
  </li>
    )
  }


 export default function CoreConcepts(){
    return <section id="core-concepts"> 
    <h2>Core Concept</h2>
 <ul>
{/* <CoreConcept title= {CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>  */}
  {/* <CoreConcept  {...CORE_CONCEPTS[0]}/> */}

  {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item}/>)}
 
 </ul>
    </section>
}
