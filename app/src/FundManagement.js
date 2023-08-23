import Navbar from "./Navbar";

function FundManagement () {
    return (<>
                <Navbar user={"Admin"}/>
                <div className="AddOwner">
            <center><h1 style={{fontSize : 50 , fontStyle : "oblique"}}>Fund Management</h1></center>
                <div class="table-responsive container" style={{padding : "5%"}}>
                    <table class="table table-hover table-bordered ">
                        <thead style={{backgroundColor : 'aqua' }}>
                            <tr>
                                <th>Flat ID</th>
                                <th>Name</th>
                                <th>Contribution</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>501</td>
                                <td>Gangadhar</td>
                                <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                
            </>  );
}

export default FundManagement   ;       