

const ResuableForm = ({formTitle, btnTitle ='submit', handleSubmit}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value 
        }
        
        handleSubmit(data);
    }

    return (
        <div>
            <h2>sign Up form</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value={btnTitle} />
            </form>
        </div>
    );
};

export default ResuableForm;