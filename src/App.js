import logo from './logo.svg';
import './App.css';
import {PropsDemo} from './Props';
import {HooksDemo} from './Hooks';
import {DataLoad} from './DataLoad';


// JSX -> HTML + JS

// Angular
// React, Vue

function App() {
  const userLoggedIn = false;
  return (
    <div className="App">
      <PropsDemo/>
      {/* <HooksDemo/> */}
      {/* <DataLoad/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          {['home', 'catalog', 'about']
            .map(i => <li>{i}</li>)}

            
            {!userLoggedIn ? <a href="#"> log out</a> : <button>log in</button>}

            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

// f
// c

export default App;
