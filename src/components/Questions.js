import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
      timer: 30,
      buttonDisabled: false,
    };

    this.createQuestion = this.createQuestion.bind(this);
    this.generateIncorrectAnswers = this.generateIncorrectAnswers.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    const SECONDS = 1000;
    this.interval = setInterval(this.setTimer, SECONDS);
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

  generateIncorrectAnswers(question) {
    const { buttonDisabled } = this.state;
    return question.incorrect_answers.map((incorrectAnswer, id) => (
      <button
        type="button"
        key={ id }
        data-testid="wrong-answer"
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
      // return questions.map((item) => {
      return (
        <div key>
          <p data-testid="question-category">{ questionSelected.category }</p>
          <p
            data-testid="question-text"
          >
            {questionSelected.question}
          </p>
          <button
            type="button"
            data-testid="correct-answer"
            disabled={ buttonDisabled }
          >
            {questionSelected.correct_answer}
          </button>
          { this.generateIncorrectAnswers(questionSelected) }
        </div>
      );
    }
  }

  render() {
    const { questions } = this.props;
    const { timer } = this.state;
    const question = questions[0];
    if (question !== undefined) {
      console.log(question.category);
    }
    const { createQuestion } = this;
    return (
      <div>
        <p>
          { createQuestion() }
        </p>
        <p>{ timer }</p>
      </div>
    );
  }
}

Answers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};

Answers.defaultProps = {
  questions: [],
};

const mapStateToProps = (state) => {
  const { player: { questions } } = state;
  return {
    questions,
  };
};

export default connect(mapStateToProps)(Answers);
