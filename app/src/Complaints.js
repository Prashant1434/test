import Navbar from "./Navbar";

function Complaints() {
    return ( <>
    <Navbar user={"Admin"}/>
    <div className="AddOwner">

        <div style={{ paddingTop: "5%", paddingLeft: "30%" }}></div>
                <div class="table-responsive container" style={{padding : "5%"}}>
                    <table class="table table-hover table-bordered ">
                        <thead style={{backgroundColor : 'aqua' }}>
                            <tr>
                                <th>Complaint ID</th>
                                <th>Raised By</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gangadhar</td>
                                <td>Shaktiman</td>
                                <td>Resolved</td>
                                <td>Water Problem</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </> );
}

export default Complaints;