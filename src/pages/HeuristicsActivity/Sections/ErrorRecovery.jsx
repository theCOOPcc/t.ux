import React from 'react';

const ErrorRecover = () => {
  return (
    <>
      <h1>9. Error Recovery</h1>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <p>
        Good designs should aim to prevent errors from ever occurring in the
        first place, but sometimes this goal just isn’t realistic. To best meet
        the needs of users, designs must also provide ways for users to overcome
        any errors they encounter when interacting with the system. This can be
        achieved three different ways. First, users should be informed of errors
        so they can recognize they made one. Second, the system should diagnose
        the error for the user by telling them in plain, easy to understand
        language what went wrong. Third, the user should be given clear
        directions on how to recover from the error.
      </p>
      {/* Add dotted line break */}
      <h3>Recognize</h3>
      <p>
        The most straightforward way to inform a user of an error is to use an
        error message. This can be achieved with text alone or with text that is
        accompanied by a visual cue like a red X for example. The error message
        must be highly noticeable and visible to the user.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <h3>Diagnose</h3>
      <p>
        The error message must use simple language when describing the problem
        to the user. Errors should be presented in everyday language, not using
        code or jargon. The language should also be precise in describing the
        problem while remaining gentle and non-condemning to the user. The
        message needs to go beyond just stating that there has been an error. It
        needs to describe the problem that occured. A common example of this can
        be seen in the 404 error message.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <span>
        A check needs to be done if exception handling is done across the
        application so that relevant messages can be shown to the user. Empty
        state messaging, 404, 500, etc are some examples.{' '}
      </span>
      <h3>Recover</h3>
      <p>
        Designs need to help users recover from errors by providing actionable
        ways to fix them. Advice should always be detailed and constructive. The
        best way to do this is to give the user instructions as well as
        shortcuts within the error itself so they can recover from the error
        immediately. Users must be given a way to fix mistakes they make while
        interacting with a system. One of the most common ways of allowing users
        to recover from errors is to provide the user with an undo or back
        button. Internet browsers have back and forward buttons for this
        purpose. Many types of applications including word processors like
        Google Docs feature an undo and redo button so users stay in control of
        their interactions.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      {/* Conclusion component */}
      <h2>Conclusion</h2>
      <p>
        Users are humans. Humans tend to do mistakes. So we should always keep
        an eye to avoid those possible mistakes by giving appropriate
        suggestions and notifications when needed.
      </p> 
    </>
  );
};

export default ErrorRecover;
