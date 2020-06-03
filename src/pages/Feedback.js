import React from 'react';
import Header from '../components/Header';
import ToRanking from '../components/ToRanking';
import PlayAgain from '../components/PlayAgain';
import '../style/Feedback.css';

const Feedback = () => {
  const state = JSON.parse(localStorage.getItem('state')) ||
    { player: { name: '', assertions: 0, score: 0, gravatarEmail: '', picture: '' } };
  const { assertions, score } = state.player;
  const answerTitle = assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
  return (
    <div>
      <Header />
      <div className="Feedback_father-div">
        <h1 data-testid="feedback-text">{answerTitle}</h1>
        <p>
          Você acertou <span data-testid="feedback-total-question">{assertions}</span> questões!
        </p>
        <p>
          Um total de <span data-testid="feedback-total-score">{score}</span> pontos
        </p>
        <ToRanking buttonName={'Ver Ranking'} />
        <PlayAgain buttonName={'Jogar Novamente'} />
      </div>
    </div>
  );
};

export default Feedback;
