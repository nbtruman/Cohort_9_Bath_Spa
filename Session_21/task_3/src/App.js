import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';

// ROOT COMPONENT
function App() {
  const cssStyles={
    backgroundColor: 'blue'
  }
  return (
    <div className="App">
      <header className="App-header" style={cssStyles}>
        <p>
          Hello this is my first React app
        </p>
        <div className="flex">
          <Cat colour="#eb9e34" name="Tabitha" lackOfCommonSense={true} />
          <Cat colour="#f2f2d0" name="Mog" lackOfCommonSense={false} />
          <Cat colour="#f2e2d0" name="Sam" lackOfCommonSense={true} />
        </div>
        <div className="flex">
          <Dog name="spotty dog" age="7" colour="radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(121,121,129,1) 35%, rgba(255,255,255,1) 100%)"/>
          <Dog name="stripey dog" age="5" colour="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(91,62,62,1) 50%, rgba(252,176,69,1) 100%)"/>
        </div>
      </header>
    </div>
  );
}

export default App;
