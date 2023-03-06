//app.js-coding frontend content
//react is a component based architecture
//componenets-header, body, sidebar

//deleted some files in src folder

//react has state 
//server cant handle multiple requests. so,
//ex- 
//server sends a request to increment a nb
//function will increment it and send to store at react state
//state is in the browser. its temporary
//so server doesnt have to render a page for 10000 users

//react has 2 approaches
//componenets can created by js classes(CounsterClass.js)
//or functions (react cooks) (CounterFunction.js)
/*
to test classes and functions
function App() {
  return (
    <div className="App">
      <h1>Hello REACT</h1>
      
      <CounterClass/>

      <CounterFunction/>

    </div>
  );
}
*/
import './App.css';
import CounterClass from './componenets/CounterClass';
import CounterFunction from './componenets/CounterFunction';
import Header from'./componenets/Header';
import AddStudent from "./componenets/AddStudent";
import AllStudents from './componenets/AllStudents';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App(){
  return(
    <Router>
      <div>
        <Header/>
      <Routes>
        <Route path="/add" element={<AddStudent/>} />
        <Route path="/" element={<AllStudents/>} />
      </Routes>
      </div>
    </Router>
    
  );
}
//npm i react-router-dom
//to navigation bar create student- component link
//react routes

export default App; //export just like backend

//default component must be below others(/add )

//npm run dev
//npm start