import React, { Component } from 'react';

class CreateLesson extends Component {
  state = { 
    invalidForm: true,
    formData: {
      // name: { type: String, required: true },
      // duration: Number,
      // numberOfQuestions: Number,
      // topics: [String],
      // type: [String],
      // media: { type: String },
      // questions: [questionSchema],
      // // recap:
      // isDraft: Boolean,
      // archived: Boolean
      name: '',
      duration: 10,
      numberOfQuestions: 10,
      topics: [''],
      type: [''],
      media: '',
      questions: [],
      // recap:
      isDraft: false,
      archived: false
    }
   }
  
  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddLesson(this.state.formData)
  }

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
    })
  }

  render() { 
    return ( 
      <React.Fragment>
        <h1>Create a Lesson</h1> 
        <div className='AddLesson-form'>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Lesson Name:</label>
              <input name='name' type='text' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='duration'>Lesson Time:</label>
              <input name='duration' type='number' min='0' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='numberOfQuestions'>Number of Questions:</label>
              <input name='numberOfQuestions' type='number' min='0' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='topics'>Lesson Topic(s):</label>
              <input name='topics' type='text' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='type'>Lesson Type:</label>
              <input name='type' type='text' value={this.state.formData.name} onChange={this.handleChange} required />
            {/* <label htmlFor='media'>Upload Media:</label>
              <input name='media' type='text' value={this.state.formData.name} onChange={this.handleChange} required /> */}
            <label htmlFor='questions'>Input Questions:</label>
              <input name='questions' type='text' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='isDraft'>Store as draft?</label>
              <input name='isDraft' type='checkbox' value={this.state.formData.name} onChange={this.handleChange} required />
            <label htmlFor='archived'>Archive?</label>
              <input name='archived' type='checkbox' value={this.state.formData.name} onChange={this.handleChange} required />
            <button
              type='submit'
              className='btn'
              disabled={this.state.invalidForm}
            >Submit Lesson
            </button>
            <input type='reset'/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

 
export default CreateLesson;