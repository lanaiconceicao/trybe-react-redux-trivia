import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
      buttonDisabled: false,
    };

    this.createQuestion = this.createQuestion.bind(this);
    this.generateIncorrectAnswers = this.generateIncorrectAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonDisabled: true,
    });
  }

  generateIncorrectAnswers(question) {
    const { buttonDisabled } = this.state;
    return question.incorrect_answers.map((incorrectAnswer, id) => (
      <button
        type="button"
        key={ id }
        data-testid="wrong-answer"
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
      // return questions.map((item) => {
      return (
        <div key>
          <p data-testid="question-category">{questionSelected.category}</p>
          <p data-testid="question-text">{questionSelected.question}</p>
          <button
            type="button"
            data-testid="correct-answer"
            className={ buttonDisabled && 'green-border' }
            onClick={ this.handleClick }
            disabled={ buttonDisabled }
          >
            {questionSelected.correct_answer}
          </button>
          {this.generateIncorrectAnswers(questionSelected)}
        </div>
      );
    }
  }

  render() {
    const { questions } = this.props;
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
        {/* <button>Next Question</button> */}
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
