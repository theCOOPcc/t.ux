import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import authService from '../../services/authService';
import lessonService from '../../services/lessonService';
import styled from 'styled-components'

const LessonCard = styled.div`
border: solid 2px black;
background-color: white;
align-items: center;
width: 300px;
margin: 10px auto;
`;

const Container = styled.div`
align-items: center;
text-align: center;
`

class Lesson extends Component {
  state = { 
      lessons: lessonService.getAll(),
      formData: {
        name: 'Lesson #9002',
        duration: 5,
        numberOfQuestions: 10,
        topics: ['Heuristics'],
        type: ['Multiple Choice'],
        media: 'https://picsum.photos/id/1/200/300',
        questions: [
          {
            problemStatement: 'This is the problem statement that I am updating',
            suggestion: 'Here is a suggestion if you are having trouble that I am updating',
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
        _id: '5fc17b77171f00437b74f829'
      },
   } 
  
  async componentDidMount() {
    // lessonService.update(this.state.formData)
    // lessonService.create(this.state.formData)
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


  // this can be reconnected when we link up the front end

  // handleDeleteLesson = async () => {
  //   if (authService.getUser()) {
  //     await lessonService.deleteOne(lesson._id);
  //     this.setState(state => ({
  //       lessons: state.lessons.filter(l => l._id !== id)
  //     }), () => this.props.history.push('/lessons'));
  //   } else {
  //     this.props.history.push('/')
  //   }
  // }

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
      <Container>
        <h1> Lessons </h1>
        {this.state.lessons.length > 0 ? (
          this.state.lessons.map((lesson) => (
            <LessonCard key={lesson._id}>
              <Link 
              to={{
                pathname: `/lesson/${lesson._id}`}}>
                <span>{lesson.name}</span>
              </Link>
              <button onClick={()=>lessonService.deleteOne(lesson._id)}>
                        Delete
                    </button>
              <button onClick={()=>lessonService.getOne(lesson._id)}>Details</button>
            </LessonCard>
          ))
        ) : (
          <h1>No Lessons</h1>
        )}
        <Route 
          exact path='/lessons/create'
          handleAddLesson = {this.handleAddLesson}
        />
      </Container>
    )}
}
 
export default Lesson;