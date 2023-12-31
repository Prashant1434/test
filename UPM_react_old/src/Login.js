import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './common.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from './assets/icons/logo black line.png'

function Login() {
    const [Credentials,setCredentials]=useState({email:"",Password:""});
    
    const option=['Admin','Owner','Tenent','Employee'];
    const [Route, setRoute] = useState("");
    const onOptionChange=(event)=>{
        setRoute(event.target.value);
        // history.push("/"+event.target.value);
    }

    const onTextChange=(args)=>
    {
        var copyofCredentials={...Credentials};
        copyofCredentials[args.target.name]=args.target.value;
        setCredentials(copyofCredentials);
    }

    const history=useHistory();
    const SignIn=()=>{
        history.push("/"+Route);
        sessionStorage.setItem("User",Route);
        // var helper=new XMLHttpRequest();
        // helper.onreadystatechange=()=>{

        //     if(helper.readyState==4 && helper.status==200)
        //     {
        //         var responsereceived=JSON.parse(helper.responseText);
        //         responsereceived.map((checkCredentials)=>{
        //             console.log(checkCredentials)
        //             if(checkCredentials.email==Credentials.email && checkCredentials.password==Credentials.Password)
        //             {
        //                 window.sessionStorage.setItem("isLoggedIn","true");
        //                 window.sessionStorage.setItem("user_id",checkCredentials.id);
        //             }
        //             else
        //             {
        //                 console.log("Wrong credentials");
        //             }
        //         })
                
        //     }

        // }
        // helper.open("GET","http://127.0.0.1:9999/Login");
        // helper.setRequestHeader("Content-Type","application/json");
        // helper.send();
    }

    return (
        
        <div className='background'>
            
            <center>
        <div className='registerDetails'>
        
        <center>
            <table className='table-responsive'>
                <center>
                    <div>
                    <img src={Logo} alt='' className='logo' />
                    </div>
                <tr>
                    <td>
                        Username :
                    </td>
                    <td>
                        <input placeholder='Enter username' className='inputBox' type='text' onChange={onTextChange} value={Credentials.email} name='email'></input>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        Password :
                    </td>
                    <td>
                    <input placeholder='Enter password' className='inputBox' type='password' onChange={onTextChange} value={Credentials.Password} name='Password'></input>
                  </td>
                </tr>
                <br></br>
                <tr>
                <select onChange={onOptionChange} className='inputBox'>
                <option>Select Role</option>
                {option.map((option,index)=>
                {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
                </tr><br/>
                <tr>
                    <td colSpan={2}>
                        <button className='loginButton' onClick={SignIn}>
                            Login
                        </button><br/><br/>
                    </td>
                </tr>   
                </center>
            </table>
            
            <div >
                <strong style={{color:"red"}}></strong>
            </div>
            
            </center>
            </div>
            </center>
            </div>
            );
}


export default Login;