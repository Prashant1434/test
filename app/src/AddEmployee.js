import { useHistory } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/common.css";
import Navbar from "./Navbar";
function AddEmployee() {
    const history = useHistory();
    const ReverseToOwner = ()=>{
        history.push("/Admin");
    }
    return (<>
    <Navbar user={"Admin"}/>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Employee</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control " id="" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" className="form-control" id="" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Number" />
                    </div>
                    <div className="form-group">
                        <label>Set Password</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <label>Upload Photo</label>

                        <input type="file" className="btn btn-default" />
                        <br></br>
                        <button className="btn btn-success">
                            Upload!
                        </button>
                    </div>
                    <center>
                        <button type="button" className="btn btn-primary"  onClick={ReverseToOwner}>Add Employee</button>
                    </center>
                </form>
            </div>
        </div>
    </>);
}

export default AddEmployee;