import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Answers extends Component {
  constructor(props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    this.createQuestion();
  }

  createQuestion() {
    const { questions } = this.props;
    console.log(questions, 'create question');
    return questions.map((item) => {
      return (
        <div key>
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

const mapStateToProps = (state) => {
  console.log(state, 'map state');
  const { player: { questions } } = state;
  return {
    questions,
  };
};

Answers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};

Answers.defaultProps = {
  questions: ['a'],
};

export default connect(mapStateToProps)(Answers);
