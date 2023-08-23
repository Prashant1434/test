import { useHistory } from "react-router-dom"
import Navbar from "../src/Navbar";
function Admin() {
  const history = useHistory();
  const GoToAddOwer = () => {
    history.push("/AddOwner");
  }
  const GoToAddEmployee = () => {
    history.push("/AddEmployee");
  }
  const GoToEmployeeDetails = () => {
    history.push("/EmployeeDetails");
  }
  const GoToOwnerDetails = () => {
    history.push("/OwnerDetails");
  }
  const GoToManageSalary = () => {
    history.push("/ManageSalary");
  }
  const GoToFundManagement = () => {
    history.push("/FundManagement");
  }
  const GoToComplaints = () => {
    history.push("/Complaints");
  }
  return (
    <>
      <div className="container-fluid">
      <Navbar user={"Admin"} />
      <div className="AddOwner">

        <div className="buttonDiv">

          <div>
            <input type='button' onClick={GoToEmployeeDetails} value="Employee Details"className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToComplaints} value="Complaints" className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToOwnerDetails} value="Owner Details" className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToAddOwer} value="AddOwner" className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToManageSalary} value="ManageSalary" className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToManageSalary} value="ManageSalary" className="btn1" />
          </div>

          <div >
            <input type='button' onClick={GoToFundManagement} value="Fund Management" className="btn1" />
          </div>

          <div>
            <input type='button' onClick={GoToAddEmployee} value="AddEmployee" className="btn1" />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Admin;