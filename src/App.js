import logo from './logo.svg';
import './App.css';
import Page from './components/Home';
import MyRouter from './components/MyRouter';
import {BrowserRouter} from 'react-router-dom';
import MyForm from './components/MyForm';



function App() {
  return (
    <div >
       <BrowserRouter>
       <MyForm/>
  
   {/* <UserForm/>
   <AddChildren/> */}
   <MyRouter/>
   </BrowserRouter>
   {/* <Page/> */}
    </div>
  );
}

export default App;
