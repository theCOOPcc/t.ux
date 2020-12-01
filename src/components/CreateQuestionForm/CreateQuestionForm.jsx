import React, { Component } from 'react';

class CreateQuestionForm extends Component {
  state = {};
  render() {
    const {problemStatement, handleChangeQuestionDetails, suggestion, answers, handleChangeAnswerValue, handleToggleAnswerCorrect, handleCreateAnswerField, handleAddQuestion} = this.props;
    return (
      <form>
              <div>
                <label>Question:</label>
                <textarea
                  name="problemStatement"
                  type="textarea"
                  value={problemStatement}
                  onChange={handleChangeQuestionDetails}
                ></textarea>
              </div>
              <div>
                <label>Suggestion:</label>
                <textarea
                  name="suggestion"
                  type="textarea"
                  value={suggestion}
                  onChange={handleChangeQuestionDetails}
                ></textarea>
              </div>
              <div>
                <label htmlFor="media">Upload Media:</label>
                <input
                  name="media"
                  type="file"
                  value=""
                />
              </div>
              {answers.map((answer, index) => (
                <div key={index}>
                  <label>Answer {index + 1}:</label>
                  <input
                    name={index}
                    type="text"
                    value={answer.label}
                    index={index}
                    onChange={handleChangeAnswerValue}
                  />
                  <input
                    name={index}
                    type="checkbox"
                    onChange={handleToggleAnswerCorrect}
                  />
                </div>
              ))}

              <button onClick={handleCreateAnswerField}>
                Create Answer
              </button>

              <button onClick={handleAddQuestion}>Add Question</button>
            </form>
    );
  }
}

export default CreateQuestionForm;
