import './App.css';
import PassField from './PassField/PassField';
import MainBlock from './MainBlock/MainBlock';

function App() {
  return (
    <div className="App pass">
      <div className="container">
        <h1 className="pass__title">Password Generator</h1>
        <PassField />
        <MainBlock/>
      </div>
    </div>
  );
}

export default App;
