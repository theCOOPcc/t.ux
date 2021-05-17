// this is data for creating a user via userService.create(user)
export const user = {
        name: "Cory Test 4",
        email: "cory4@test.com",
        password: "1234", // password invalid
}

export const activityData = {
    name: 'Test Activity - DO NOT DELETE',
    topic: 'Heuristics',
    media: 'https://picsum.photos/200/300',
    isDraft: Boolean,
    archived: Boolean,
    modules: [
      {
        moduleType: 'display',
        displayCopy: 'Welcome to this Test Activity. Here is some information.',
        displayMedia: 'https://picsum.photos/200/300',
      },
      {
        moduleType: 'question',
        problemStatement: 'What color is the sky?',
        media: 'https://picsum.photos/200/300',
        sugguestion:
          'Here is a suggestion/feedback text specific to the question and not the answer',
        type: 'multiple-choice',
        timeLimit: 10,
        answers: [
          {
            isCorrect: false,
            label: 'Red',
            feedback: 'The sky is not red.',
          },
          {
            isCorrect: true,
            label: 'Blue',
            feedback: 'Good job! The sky is blue.',
          },
          {
            isCorrect: false,
            label: 'pink',
            feedback: 'The sky is not pink.',
          },
          {
            isCorrect: false,
            label: 'orange',
            feedback: 'The sky is not orange.',
          },
        ],
      },
  
      {
        moduleType: 'display',
        displayCopy: 'Here is another display item with some more information.',
        displayMedia: 'https://picsum.photos/200/300',
      },
      {
        moduleType: 'question',
        problemStatement: 'What sound does a chicken make?',
        media: 'https://picsum.photos/200/300',
        sugguestion:
          'Here is a suggestion/feedback text specific to the question and not the answer',
        type: 'multiple-choice',
        timeLimit: 0,
        answers: [
          {
            isCorrect: false,
            label: 'Moo',
            feedback: 'Thats a cow not a chicken.',
          },
          {
            isCorrect: false,
            label: 'Quack',
            feedback: 'Nope. Thats a duck.',
          },
          {
            isCorrect: true,
            label: 'cluck cluck',
            feedback: 'Bingo!.',
          },
          {
            isCorrect: false,
            label: 'Woof',
            feedback: 'Chickens definitely dont go woof.',
          },
        ],
      },
    ],
  
  };

  export const groupData = {
    name: "Test Group",
    dateStarted: "2020-12-21",
    endingDate: "2020-12-21",
    users: [],
    createdBy: "Cory Test"
  }