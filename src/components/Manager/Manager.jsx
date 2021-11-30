import Clock from "../helpers/Time/Time";
import Inventory from "../helpers/Inventory/Inventory";
import "./Manager.scss";

export default function Manager(props) {


    return(
      <>
        <div className="clock">
          <Clock/>
        </div>
        
        <section className="manager">
          <div className="manager__header">
            <h2>Managers overview</h2>
          </div>
      
          <div className="inventory">
            <Inventory {...props}/>
          </div>
        </section>
      </>
    )
}