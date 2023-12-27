
export default function ToggleButton({children ,isSelect,...props}){
    return(
  <li><button className ={isSelect? "active": undefined} {...props}>{children}</button> </li>
    )
  }

