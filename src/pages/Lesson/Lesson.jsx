import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import lessonService from '../../services/lessonService'

class Lesson extends Component {
  state = { 
      lessons: []
   }
  
  async componentDidMount() {
    const lessons = await lessonService.getAll();
    this.setState ({ lessons: lessons.reverse() })
  }

  handleAddLesson = async newLessonData => {
    const newLesson = await lessonService.create(newLessonData);
    newLesson.createdBy = { name: this.props.user.name, _id: this.props.user._id}
    this.setState(state => ({
      lessons: [...state.lessons, newLesson]
    }), () => this.props.history.push('/lessons'));
  }

  
  
  render() { 
    return ( 
      <React.Fragment>
        <h1>Lesson Index</h1>
        <a href='/lessons/create'>
          <p>Create a lesson</p>
        </a>
        <Route 
          exact path='/lessons/create'
          handleAddLesson = {this.handleAddLesson}
        />
      </React.Fragment>
    )}
}
 
export default Lesson;