import React, { Component } from 'react';
import lessonService from '../../services/lessonService';
import styled from 'styled-components';
import Lesson from '../Lessons/Lessons';

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



class IndexLessons extends Component {
  state = { lessons: lessonService.getAll() };

  async componentDidMount() {
    const lessons = await lessonService.getAll();
    // this.setState ({ lessons: lessons.reverse() })
    this.setState({ lessons: lessons });
  }

  render() {
    const { lessons } = this.state;
    return (
      <Container>
        <h1> Lessons </h1>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <LessonCard>
              <a href='http://www.google.com'>
                <p>{lesson.name}</p>
              </a>
                  {/* <button type="submit" onClick={() => this.props.handleDeleteMessage(props.location.state._id)}>
                            Delete
                          </button> */}
            </LessonCard>
          ))
        ) : (
          <h1>No Lessons</h1>
        )}
      </Container>
    );
  }
}

export default IndexLessons;
