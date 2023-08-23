import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './common.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from './assets/icons/logo black line.png'

function Login() {
<<<<<<< HEAD
    const [Credentials, setCredentials] = useState({ email: "", Password: "" });
    const option = ['Admin', 'Owner', 'Tenant', 'Employee'];
    var [Route,SetRoute] = useState("");
    const onOptionChange = (event) => {
        // history.push("/"+event.target.value);
        SetRoute(event.target.value);
=======
    const [Credentials,setCredentials]=useState({email:"",Password:""});
    
    const option=['Admin','Owner','Tenent','Employee'];
    
    const [Route,setRoute]=useState("");

    const [message,setMessage]=useState("");
    
    const onOptionChange=(event)=>{
        setRoute(event.target.value);
>>>>>>> 0f1e1cb8c1ff9d846e81dad3f860fb7778d72d31
    }

    const onTextChange = (args) => {
        var copyofCredentials = { ...Credentials };
        copyofCredentials[args.target.name] = args.target.value;
        setCredentials(copyofCredentials);
    }

<<<<<<< HEAD
    const history = useHistory();
    const SignIn = (event) => {
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
        //                 history.push("/Quotes");
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
        // history.push("/"+event.target.value);
        history.push("/"+Route);
=======
    const history=useHistory();

    useEffect(()=>{
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[message]);

    const SignIn=()=>{
       // var helper=new XMLHttpRequest();
       // helper.onreadystatechange=()=>{

         //   if(helper.readyState==4 && helper.status==200)
           // {
                // var responsereceived=JSON.parse(helper.responseText);
                // responsereceived.map((checkCredentials)=>{
                //     console.log(checkCredentials)
                    if(Route=="Admin")
                    {
                        // window.sessionStorage.setItem("isLoggedIn","true");
                        // window.sessionStorage.setItem("user_id",checkCredentials.id);
                        history.push("/"+Route);
                    }
                    // if(checkCredentials.email==Credentials.email && checkCredentials.password==Credentials.Password && args.target.value=="Owner")
                    // {
                    //     window.sessionStorage.setItem("isLoggedIn","true");
                    //     window.sessionStorage.setItem("user_id",checkCredentials.id);
                    //     history.push("/Routes/Owner");
                    // }
                    // if(checkCredentials.email==Credentials.email && checkCredentials.password==Credentials.Password && args.target.value=="Tenent")
                    // {
                    //     window.sessionStorage.setItem("isLoggedIn","true");
                    //     window.sessionStorage.setItem("user_id",checkCredentials.id);
                    //     history.push("/Routes/Tenent");
                    // }
                    // if(checkCredentials.email==Credentials.email && checkCredentials.password==Credentials.Password && args.target.value=="Employee")
                    // {
                    //     window.sessionStorage.setItem("isLoggedIn","true");
                    //     window.sessionStorage.setItem("user_id",checkCredentials.id);
                    //     history.push("/Routes/Employee");
                    // }
                    else
                    {
                        setMessage("Invalid Input!!");
                    }
               // })
                
            //}

        //}
        // helper.open("GET","http://127.0.0.1:9999/Login");
        // helper.setRequestHeader("Content-Type","application/json");
        // helper.send();
>>>>>>> 0f1e1cb8c1ff9d846e81dad3f860fb7778d72d31
    }

    return (

        <div className='background'>

            <center>
<<<<<<< HEAD
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
                                <br />
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
                                        {option.map((option, index) => {
                                            return <option key={index}>
                                                {option}
                                            </option>
                                        })}
                                    </select>
                                </tr><br />
                                <tr>
                                    <td colSpan={2}>
                                        <button className='loginButton' onClick={SignIn}>
                                            Login
                                        </button><br /><br />
                                    </td>
                                </tr>
                            </center>
                        </table>
                    </center>
                </div>
=======
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
                <strong style={{color:"red"}}>{message}</strong>
            </div>
            
>>>>>>> 0f1e1cb8c1ff9d846e81dad3f860fb7778d72d31
            </center>
        </div>
    );
}


export default Login;