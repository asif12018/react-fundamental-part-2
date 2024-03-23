import { useState } from "react";


const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [name,setName] = useState('ganja khor')
    const handleSubmit = e =>{
       e.preventDefault();
       console.log(email);
       console.log(password);
       console.log(name)
    }
    const handleEmailChange = e =>{
        
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" placeholder="email"/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="password"/>
                <br />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default StatefulForm;