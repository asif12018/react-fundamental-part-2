import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    const [name, handleNameChange] = useInputState('no name');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="name"/>
                <br />
                <input  type="email" name="email" placeholder="email"/>
                <br />
                <input type="password" name="password" placeholder="password"/>
                <br />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default HookForm;