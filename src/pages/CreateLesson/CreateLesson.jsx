import React, { Component } from 'react';
import lessonService from '../../services/lessonService';

class CreateLesson extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: 'Lesson #9',
      duration: 5,
      numberOfQuestions: 10,
      topics: ['Heuristics'],
      type: ['Multiple Choice'],
      media: 'https://picsum.photos/id/1/200/300',
      questions: [
        {
          problemStatement: 'This is the problem statement',
          suggestion: 'Here is a suggestion if you are having trouble',
          answers: [
            {
              label: 'answer #1',
              isCorrect: false,
            },
            {
              label: 'answer #2',
              isCorrect: true,
            },
            {
              label: 'answer #3',
              isCorrect: true,
            },
            {
              label: 'answer #4',
              isCorrect: false,
            },
          ],
        },
      ],
      isDraft: false,
      archived: false,
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    // e.preventDefault();
    // this.props.handleAddLesson(this.state.formData);
    lessonService.create(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Create a Lesson</h1>
        <div>
          <button onClick={this.handleSubmit}>Test Submission</button>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <label htmlFor="name">Lesson Name:</label>
            <input
              name="name"
              type="text"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="duration">Lesson Time:</label>
            <input
              name="duration"
              type="number"
              min="0"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="numberOfQuestions">Number of Questions:</label>
            <input
              name="numberOfQuestions"
              type="number"
              min="0"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="topics">Lesson Topic(s):</label>
            <input
              name="topics"
              type="text"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="type">Lesson Type:</label>
            <input
              name="type"
              type="text"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            {/* <label htmlFor='media'>Upload Media:</label>
              <input name='media' type='text' value={this.state.formData.name} onChange={this.handleChange} required /> */}
            <label htmlFor="questions">Input Questions:</label>
            <input
              name="questions"
              type="text"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="isDraft">Store as draft?</label>
            <input
              name="isDraft"
              type="checkbox"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="archived">Archive?</label>
            <input
              name="archived"
              type="checkbox"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            <button
              type="submit"
              className="btn"
              disabled={this.state.invalidForm}
            >
              Submit Lesson
            </button>

            <input type="reset" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateLesson;
