import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import authService from '../../services/authService';
import lessonService from '../../services/lessonService'

class Lesson extends Component {
  state = { 
      lessons: []
   } 
  
  async componentDidMount() {
    const lessons = await lessonService.getAll();
    // this.setState ({ lessons: lessons.reverse() })
    this.setState ({ lessons: lessons })
  }

  handleAddLesson = async newLessonData => {
    const newLesson = await lessonService.create(newLessonData);
    newLesson.createdBy = { name: this.props.user.name, _id: this.props.user._id}
    this.setState(state => ({
      lessons: [...state.lessons, newLesson]
    }), () => this.props.history.push('/lessons'));
  }

  handleDeleteLesson = async id => {
    if (authService.getUser()) {
      await lessonService.deleteOne(id);
      this.setState(state => ({
        lessons: state.lessons.filter(l => l._id !== id)
      }), () => this.props.history.push('/messages'));
    } else {
      this.props.history.push('/')
    }
  }

  handleUpdateLesson = async updatedLessonData => {
    const updatedLesson = await lessonService.update(updatedLessonData);
    const newLessonsArray = this.state.lessons.map(l =>
      l._id === updatedLesson._id? updatedLesson : l);
    this.setState(
      { lessons: newLessonsArray },
      () => this.props.history.push('/lessons')
    );
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