import React from 'react';

export  const SectionDetails = [
  {
    name: 'Introduction',
    route: 'introduction',
    component: <HeuristicsIntro />,
    questions: [],
  },
  {
    name: 'Visibility of System Status',
    route: 'system-status',
    component: <VisibilityOfSystemStatus />,
    questions: [<Test2 />, <Test3 />],
  },
  {
    name: 'System / World Match',
    route: 'system-world-match',
    component: <SystemWorldMatch />,
    questions: [<Test1 />],
  },
  {
    name: 'User Control',
    route: 'user-control',
    component: <UserControlFreedom />,
    questions: [],
  },
  {
    name: 'Consistency + Standards',
    route: 'consistency-standards',
    component: <ConsistencyStandards />,
    questions: [<Test2 />, <Test3 />],
  },
  {
    name: 'Error Prevention',
    route: 'error-prevention',
    component: <ErrorPrevention />,
    questions: [],
  },
  {
    name: 'Recognition over Recall',
    route: 'recognition-over-recall',
    component: <RecognitionOverRecall />,
    questions: [],
  },
  {
    name: 'Flexibility + Efficiency',
    route: 'flexibility-efficiency',
    component: <FlexibilityEfficiency />,
    questions: [],
  },
  {
    name: 'Aesthetic + Minimilism',
    route: 'aesthetic-minimilism',
    component: <AestheticMinimalism />,
    questions: [],
  },
  {
    name: 'Error Recovery',
    route: 'error-recovery',
    component: <ErrorRecovery />,
    questions: [],
  },
  {
    name: 'Help + Documentation',
    route: 'help-documentation',
    component: <HelpDocumentation />,
    questions: [],
  },
]