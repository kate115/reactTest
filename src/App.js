import logo from './logo.svg';
import './App.css';

function Introduction() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, friend. I'm Star! Don't you think it's
          lonely out here in space? I want to visit 
          you some day! Imagine a place where we could
          live together in peace! That would be the best!
        </p>
        
      </header>
    </div>
  );
}

export default Introduction;
