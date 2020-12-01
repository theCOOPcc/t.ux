import React, { Component } from 'react';

class PreQuestionForm extends Component {
  state = {  }
  render() { 
    const {name,topics, handleToggleTimeLimit, timeLimit, duration,numberOfQuestions,handleNumberOfQuestions, handleSubmit, handleChange, type} = this.props;
    return ( 
      <form onSubmit={handleSubmit}>
            <div>
              <label>Activity Name:</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>
                Activity Topic:
                <select
                  name="topics"
                  onChange={handleChange}
                  value={topics}
                >
                  <option>Heuristics</option>
                  <option>Topic 1</option>
                  <option>Topic 2</option>
                </select>
              </label>
            </div>
            <div>
              <label>Time Limit</label>
              <input
                type="radio"
                name="yes"
                onChange={handleToggleTimeLimit}
                checked={timeLimit}
              />
              <label for="yes">Yes</label>
              <input
                type="radio"
                name="no"
                onChange={handleToggleTimeLimit}
                checked={!timeLimit}
              />
              <label for="no">No</label>
            </div>
            {timeLimit ? (
              <div>
                <label>Set Time Limit:</label>
                <input
                  name="duration"
                  type="number"
                  min="0"
                  value={duration}
                  onChange={handleChange}
                  required
                />
              </div>
            ) : (
              ''
            )}

            <div>
              <label>Number of Items:</label>
              <input
                name="numberOfQuestions"
                type="number"
                min="0"
                value={numberOfQuestions}
                onChange={handleNumberOfQuestions}
              />
            </div>
            <div>
              <label>
                Template:
                <select name="type" value={type} onChange={handleChange}>
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="drag-and-drop">Drag and Drop</option>
                </select>
              </label>
            </div>
          </form>
     );
  }
}
 
export default PreQuestionForm;