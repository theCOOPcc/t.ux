import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import lessonService from '../../services/lessonService';
import styled from 'styled-components';

const LessonCard = styled.div`
  border: solid 2px black;
  background-color: white;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  background-color: blue;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const SideBar = styled.div`
  background-color: black;
  ${'' /* width: 300px; */}
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SideBarItem = styled.div`
  text-align: center;
  height: 100px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0px auto;
`;

const LessonsContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Header = styled.div`
  height: 75px;
  background-color: black;
  align-items: center;
  text-align: center;
  color: white;
`;

// const ToggleButtons = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

class IndexLessons extends Component {
  state = {
    lessons: lessonService.getAll(),
    // listView: true,
  };

  async componentDidMount() {
    const lessons = await lessonService.getAll();
    this.setState({ lessons: lessons });
  }

  // TODO: Toggle list and grid views
  // handleToggleView = () => {
  //   let listView = this.state.listView;
  //   console.log(listView);
  //   listView = !listView;
  //   console.log(listView);
  //   this.setState({ listView: listView });
  // };

  render() {
    const { lessons } = this.state;
    return (
      <Container>
        <SideBar>
          <SideBarItem>
            <span>Activity</span>
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

        {/* // TODO:  Side Bar for Navigation
        // TODO:  */}
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
                <Link  to={{pathname: '/preview-lesson', state:{lesson}}}>Take Lesson</Link>

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
