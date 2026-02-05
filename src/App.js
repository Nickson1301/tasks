
import './App.css';
import ClickCounterComp from './components/ClickCounterComp';
import { HoverCounterComp } from './components/HoverCounterComp';

//import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <ClassComp uname="Nickson" upost="programmer analyst trainee"/>
      <Functions ename="Girish" epost="programmer analyst trainee"/>
      <StateComp/>
      <MethodEvent/> */}
      {/* <ParentComp/> */}
      <ClickCounterComp/>
      <HoverCounterComp/>

    </div>
  );
}

export default App;
