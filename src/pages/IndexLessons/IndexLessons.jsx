import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lessonService from '../../services/lessonService';
import styled from 'styled-components';
import authService from '../../services/authService'

import {LessonCard, SideBar, SideBarItem, SideBarLink, LessonsContainer, Header, Container} from '../../components/StyledComponents/LessonComponents'



// const ToggleButtons = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

class IndexLessons extends Component {
  state = {
    lessons: lessonService.getAll(),
    // listView: true,
  };

  handleDeleteLesson = async lessonId => {
    if (authService.getUser()) {
      await lessonService.deleteOne(lessonId);
      this.setState(state => ({
        lessons: state.lessons.filter(l => l._id !== lessonId)
      }), () => 
      // this.props.history.push('/lessons')
      window.location.reload)
    } else {
      this.props.history.push('/')
    }
  }

  async componentDidMount() {
    const lessons = await lessonService.getAll();
    this.setState({ lessons: lessons });
  }

  render() {
    const { lessons } = this.state;
    return (
      <Container>
        <SideBar>
          <SideBarItem>
            <SideBarLink href="#">Activity</SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <span>Lessons</span>
          </SideBarItem>
          <SideBarItem>
            <span>Results</span>
          </SideBarItem>
          <SideBarItem>
            <span>Feedback</span>
          </SideBarItem>
        </SideBar>
        <LessonsContainer>
          <Header>
            <h1> Lessons </h1>
          </Header>
          {/* <ToggleButtons>
            <button onClick={this.handleToggleView}>List View</button>
            <button onClick={this.handleToggleView}>Grid View</button>
          </ToggleButtons> */}

          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonCard>
                {/* // TODO: Insert Image */}
                <span>{lesson.name}</span>
                <button>Assign</button>
                <button onClick={()=>this.handleDeleteLesson(lesson._id)}>Delete</button>
                <Link to={{ pathname: '/preview-lesson', state: { lesson } }}>
                  Take Lesson
                </Link>
              </LessonCard>
            ))
          ) : (
            <h1>No Lessons</h1>
          )}
        </LessonsContainer>
      </Container>
    );
  }
}

export default IndexLessons;
