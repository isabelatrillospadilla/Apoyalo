import React,  {useState, useEffect} from 'react';

const SimpleForm = () => {

    const[name, setName] = useState("");
    const[lastName, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[ConfirmPassword, setConfirmPassword] = useState("");

    /* useEffect(() => {

    } */

    return (
        <div>
            <form>
                <div>
                    <label  htmelfor='name'>Name</label>
                    <input name="name" type="text" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <label  htmelfor="lastName">Last Name</label>
                    <input name="lastName" type="text" onChange={(e)=>setLastname(e.target.value)}></input>
                </div>
                <div>
                    <label  htmelfor="email">Email</label>
                    <input name="email" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label  htmelfor="password">Password</label>
                    <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label  htmelfor="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="crear usuario"></input>
            </form>

            <h1> Results </h1>
            <p> name:{name} </p> 
            <p> lastName:{lastName} </p> 
            <p> email:{email} </p> 
            <p> password:{password} </p> 
            <p> confirmPassword:{ConfirmPassword} </p> 
            
        </div>
    );
}

export default SimpleForm;
