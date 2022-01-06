import CountDownTimer from "./CountdownTimer";
import Activity from "./reusable/Activity";
import { faEdit, faPrint, faMoneyBill, faComments } from '@fortawesome/free-solid-svg-icons';

import "./Navigation.css";


export default function DashboardMain(props) {
  const { handleUser } = props;

  const hoursMinSecs = {hours:8, minutes: 20, seconds: 40};
  
  return (
    <div>
      <div className="welcome">
        <p>Welcome, {handleUser()}</p> 
        <p className="welcome-logo">{handleUser().charAt(0)}</p>
      </div>
      <CountDownTimer hoursMinSecs={hoursMinSecs}/>

      <div className="dashboard-activity">
        <p>What do you want to do?</p>
        <div className="activity-grid">
            <Activity title={"Fill Biodata form"} icon={faEdit} location={"dashboard/biodata"}/>
            <Activity title={"View Biodata form"} icon={faPrint} location={"dashboard/biodata/load"}/>
            <Activity title={"Make Payments"} icon={faMoneyBill}/>
            <Activity title={"Chat with us"} icon={faComments}/>
        </div>
      </div>
    </div>
  );
}