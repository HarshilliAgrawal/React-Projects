import React, {useContext} from 'react'
import {QuizContext} from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank'
import '../App.css'


function EndGameScreen() {
    const {score ,setScore, setGameState,setName,name} = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState('Menu')
        setName('')
    }
  return (
    <div className='EndScreen'>
        <h1>End Of Quiz</h1>
        <h3>{`Name: ${name}`} </h3>
        <h3>{`Your Score : ${score}/${Questions.length}`}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndGameScreen