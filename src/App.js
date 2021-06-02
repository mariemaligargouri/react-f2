import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Footer } from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ProductList from './components/productlist/ProductList';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ProductList/>
    <Footer/>
    </div>
  );
}

export default App;
