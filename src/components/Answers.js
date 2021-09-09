import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Answers extends Component {
  constructor() {
    super();

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion() {
    const { questions } = this.props;
    return questions.map((item) => {
      return (
        <div key="1">
          <p data-testid="question-category">{item.category}</p>
          <button
            type="button"
            data-testid="question-text"
          >
            {item.question}
          </button>
          <button
            type="button"
            data-testid="correct-answer"
          >
            {item.question}
          </button>
          <button
            type="button"
            data-testid="wrong-answer"
          >
            {item.question}
          </button>
        </div>
      );
    });
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
