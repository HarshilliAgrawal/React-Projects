import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import '../App.css'

function MainMenu() {
    const {setGameState,setName,name} = useContext(QuizContext);
  return (
    <div className='Menu'>
      <input type='text' placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)}/>
        <button onClick ={() => {setGameState('Quiz')}}> Start Quiz </button>
    </div>
  )
}

export default MainMenu