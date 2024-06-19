
import './App.css';
import { Pradeep } from './Pradeep';
import State from './State';
import Ws from './Ws';



function App() {

  let a="pradeep"
  let b=9876543210
  return (
  <>
      {/* <Pradeep/> */}
      <Ws name={a} mobile={b} location="jodhpur" />
      {/* <State/> */}
  </>
  );
}

export default App;
