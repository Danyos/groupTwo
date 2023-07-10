import './App.css';
import Home from "./page/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Home />
        </main>
        <Footer />
    </div>
  );
}

export default App;
