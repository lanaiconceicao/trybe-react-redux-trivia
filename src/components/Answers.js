import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Answers extends Component {
  constructor() {
    super();

    // this.state = {
    //   currentQuestion: 0,
    // };

    this.createQuestion = this.createQuestion.bind(this);
    this.generateIncorrectAnswers = this.generateIncorrectAnswers.bind(this);
  }

  generateIncorrectAnswers(question) {
    return question.incorrect_answers.map((incorrectAnswer, id) => {
      return (
        <button
          type="button"
          key={ id }
          data-testid="wrong-answer"
        >
          { incorrectAnswer }
        </button>);
    });
  }

  createQuestion() {
    // const { 0 } = this.state;
    const { questions } = this.props;
    const question = questions[0];
    console.log(questions);
    // return questions.map((item) => {
    return (
      <div key>
        <p data-testid="question-category">{question[category]}</p>
        <p
          type="button"
          data-testid="question-text"
        >
          {question[question]}
        </p>
        <button
          type="button"
          data-testid="correct-answer"
        >
          {question[correct_answer]}
        </button>
        { this.generateIncorrectAnswers(question) }
      </div>
    );
  }

  render() {
    const { createQuestion } = this;
    return (
      <div>
        <p>
          { createQuestion() }
        </p>
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
