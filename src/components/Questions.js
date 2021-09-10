import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { updateScore } from '../redux/actions';

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
      timer: 30,
      buttonDisabled: false,
    };

    this.createQuestion = this.createQuestion.bind(this);
    this.generateIncorrectAnswers = this.generateIncorrectAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.correctHandleClick = this.correctHandleClick.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.nextButton = this.nextButton.bind(this);
  }

  componentDidMount() {
    const SECONDS = 1000;
    this.interval = setInterval(this.setTimer, SECONDS);

    const state = { player: { score: 0 } };
    localStorage.setItem('state', JSON.stringify(state));
  }

  setTimer() {
    const { timer, buttonDisabled } = this.state;
    if (timer - 1 <= 0) {
      this.setState({
        buttonDisabled: true,
      });
      clearInterval(this.interval);
    }
    if (!buttonDisabled) {
      this.setState({
        timer: timer - 1,
      });
    }
  }

  handleClick() {
    this.setState({
      buttonDisabled: true,
    });
  }

  correctHandleClick(e) {
    const { timer } = this.state;
    const difficulty = e.target.getAttribute('difficulty');
    const HARD = 3;
    const MEDIUM = 2;
    const EASY = 1;
    const minScore = 10;
    let multiplier;
    let questionScore = 0;

    switch (difficulty) {
    case 'hard':
      multiplier = HARD;
      break;
    case 'medium':
      multiplier = MEDIUM;
      break;
    case 'easy':
      multiplier = EASY;
      break;
    default:
      break;
    }

    questionScore = minScore + (multiplier * timer);
    const { dispatchScore, score: scoreFromState } = this.props;
    dispatchScore(questionScore);
    const state = { player: { score: scoreFromState + questionScore } };
    localStorage.setItem('state', JSON.stringify(state));
    this.handleClick();
  }

  generateIncorrectAnswers(question) {
    const { buttonDisabled } = this.state;
    return question.incorrect_answers.map((incorrectAnswer, id) => (
      <button
        type="button"
        key={ id }
        data-testid="wrong-answer"
        difficulty={ question.difficulty }
        className={ buttonDisabled && 'red-border' }
        onClick={ this.handleClick }
        disabled={ buttonDisabled }
      >
        { incorrectAnswer }
      </button>));
  }

  createQuestion() {
    const { currentQuestion, buttonDisabled } = this.state;
    const { questions } = this.props;
    const questionSelected = questions[currentQuestion];
    if (questionSelected !== undefined) {
      return (
        <div key>
          <p data-testid="question-category">{questionSelected.category}</p>
          <p data-testid="question-text">{questionSelected.question}</p>
          <button
            type="button"
            data-testid="correct-answer"
            difficulty={ questionSelected.difficulty }
            className={ buttonDisabled && 'green-border' }
            onClick={ (e) => this.correctHandleClick(e) }
            disabled={ buttonDisabled }
          >
            {questionSelected.correct_answer}
          </button>
          {this.generateIncorrectAnswers(questionSelected)}
        </div>
      );
    }
  }

  handleNextQuestion() {
    const QUESTIONS_FOUR = 4;
    const { history } = this.props;
    const { currentQuestion } = this.state;
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      buttonDisabled: false,
      timer: 30,
    }));
    if (currentQuestion === QUESTIONS_FOUR) {
      history.push('/feedback');
    }
  }

  nextButton() {
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ this.handleNextQuestion }
      >
        Próxima
      </button>
    );
  }

  render() {
    const { questions } = this.props;
    const { timer, buttonDisabled } = this.state;
    const question = questions[0];
    if (question !== undefined) {
      console.log(question.category);
    }
    const { createQuestion, nextButton } = this;
    return (
      <div>
        <p>
          { createQuestion() }
        </p>
        { buttonDisabled && nextButton()}
        <p>{ timer }</p>
      </div>
    );
  }
}

Questions.propTypes = {
  dispatchScore: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
  score: PropTypes.number.isRequired,
  history: PropTypes.string.isRequired,
};

Questions.defaultProps = {
  questions: [],
};

const mapStateToProps = (state) => {
  const { player: { questions, score } } = state;
  return {
    questions,
    score,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchScore: (score) => dispatch(updateScore(score)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));
