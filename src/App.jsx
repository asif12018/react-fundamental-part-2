
import './App.css'
import GrandPa from './GrandPa/GrandPa';
import ResuableForm from './components/ResuableForm/ResuableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
  const handleSingUp = (value) =>{
    
    console.log(value);
    
  }

  return (
    <>
    <h1>Form master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ResuableForm handleSubmit={handleSingUp} formTitle={'Sign up'} btnTitle={'sign up now'}></ResuableForm>
      <GrandPa></GrandPa>
    </>
  )
}

export default App
