import React,{useState} from 'react';
import './App.css';
import EndGameScreen from './Components/EndGameScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import {QuizContext} from './Helpers/Context';

function App() {

  const[gameState,setGameState]= useState('Menu')
  const [score,setScore] = useState(0)
  const [name,setName] = useState('')

  return (
    <div className="App" >
     <h1>Quiz App</h1> 
     <QuizContext.Provider value={{gameState,setGameState, score, setScore,name,setName}}>
     {gameState === 'Menu' && <MainMenu/>}
     {gameState === 'Quiz' && <Quiz/>}
     {gameState === 'EndGameScreen' && <EndGameScreen/>}
     {/* <button onClick={() => {setGameState('Menu')}}>Quit</button> */}
     </QuizContext.Provider>
     <button onClick={() => {setGameState('Menu'); setName('')}}><b>Quit</b></button>
    </div>
  );
}

export default App;
