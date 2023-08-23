import Navbar from "./Navbar";

function OwnerDetails() {
    return ( <>

    <Navbar user={"Admin"}/>
        <div className="AddOwner">
            <center><h1 style={{fontSize : 50 , fontStyle : "oblique"}}>Owner Details</h1></center>
        <div class="container table-responsive">
            <table class="table table-hover table-bordered">
                <thead style={{backgroundColor : "aqua"}}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mob No</th>
                        <th>Flat No</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor : "white"}}>
                    <tr>
                        <td>Mohit</td>
                        <td>mohit@gmail.com</td>
                        <td>7896541233</td>
                        <td>105</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </> );
}

export default OwnerDetails;