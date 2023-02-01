import logo from './logo.svg';
import './App.css';
import Container from "./components/container";
import Questionlist from "./components/questionsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React - CoderHouse
        </p>
        <Container>
          <p>Children</p>
        </Container>
        <QuestionList title={'Preguntas'} >
        
        </QuestionList>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
