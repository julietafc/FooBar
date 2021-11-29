import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";

export default function Manager(props) {


    return(
        <>
      <div>
        <h2>The bar will close down at 22.00</h2>
        <Clock/>
      </div>
      
      <div>
        <Inventory {...props}/>
      </div>
      </>
    )
}