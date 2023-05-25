import './App.css';
import './header.css';
import './body.css';
import Header from './component/header.jsx';
import Body from './component/body.jsx';



function App() {
  return (
    <>
      <div className='container'>
        <Header/>
        <Body/>
      </div>
    </>
  );
};

export default App;