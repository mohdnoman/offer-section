import './App.css';
import Heading from './components/Heading';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App bg-white flex-col">
      <div className='my-40'><Heading /></div>
      <div className='mt-20 mb-16'><Cards /></div>

    </div>
      <div><Footer /></div>
    </>
  );
}

export default App;
