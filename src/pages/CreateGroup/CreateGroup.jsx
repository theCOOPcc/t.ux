import React, { Component } from 'react'

class CreateGroup extends Component {
    state = { 
        formData: {
            // name: { type: String, required: true },
            // dateStarted: Date,
            // endingDate: Date,
            // students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
            // manager: {type: Schema.Types.ObjectId, ref: 'Admin'}
            name: '',
            dateStarted: '',
            endingDate: '',
            users: [],
            manager: ''
        }
    }

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
                <h1>Create a Group</h1>
                <div className='AddGroup-form'>
                    <form ref={this.formRef} onSubmit={this.handleSubmit}> 
                        <label htmlFor='name'>Group Name:</label>
                            <input name='name' type='text' required/>
                        <label htmlFor='dateStarted'>Start Date:</label>
                            <input name='dateStarted' type='date' required/>
                        <label htmlFor='endingDate'>End Date:</label>
                            <input name='endingDate' type='date' required/>
                        <label htmlFor='users'>Students:</label>
                            <input name='users' type='text' required/>
                        <label htmlFor='manager'>Manager</label>
                        <button
                            type='submit'
                            className='btn'
                            disabled={this.state.invalidForm}
                            >Submit Group
                        </button>
                        <input type='reset'/>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CreateGroup;