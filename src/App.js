import './App.css';
import Heading from './components/Heading';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App bg-white flex-col">
      <div className='my-40'><Heading /></div>
      <div className='mt-20 '><Cards /></div>
    </div>
  );
}

export default App;
