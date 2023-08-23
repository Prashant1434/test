import Navbar from "./Navbar";

function ManageSalary() {
    return (<>
<Navbar user={"Admin"}/>

        <div className="AddOwner">
        <div class="container registerDetails">
            <form>
               <center>
               <legend>Add Salary</legend>
               </center>

                <div class="form-group">
                    <label for="">Employee ID</label>
                    <input type="number" class="form-control" id="" placeholder="Enter Employee Id" />
                </div>
                <div class="form-group">
                    <label for="">Employee Name</label>
                    <input type="text" class="form-control" id="" placeholder="Enter Employee Name" />
                </div>
                <div class="form-group">
                    <label for="">Salary</label>
                    <input type="text" class="form-control" id="" placeholder="Enter Employee Salary" />
                </div>

                <center><button type="button" class="btn btn-primary">Add Salary</button></center>
            </form>

        </div>
        <br />
        <div className="container">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead style={{backgroundColor : "aqua"}}>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize : 20 }}>
                        <tr>
                            <td>1</td>
                            <td>Nilesh</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Suresh</td>
                            <td>15000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>

    </>);
}

export default ManageSalary;