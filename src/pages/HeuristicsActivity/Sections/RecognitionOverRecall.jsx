import React from 'react';

const RecognitionOverRecall = () => {
  return (
    <>
      <h1>6. Recognition Over Recall</h1>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <p>
        There are two types of memory retrieval: recognition and recall [5]. The
        recognition happens when you easily recognize a person or an object that
        you’re familiar with. It is a very shallow form of retrieval from memory
        and it doesn’t require any work. The recall happens when you have to
        find rarely used information in your memory (names, years, details,
        etc.). To recall information, people have to activate more memory
        chunks. Therefore, the recall process is a deeper retrieval and requires
        more work. (That’s why multiple-choice questions in tests are much
        easier to answer than open-answer questions.)
      </p>
      <h2>RECALL IN USER INTERFACES</h2>
      <p>
        The classic example of recall in an interface is login. When you log in
        to a site, you have to remember both a username (or email) and a
        password. You receive very few cues to help you with that memory
        retrieval: usually, just the site itself. Some people make it easier for
        themselves by using the same credentials everywhere on the web. Others
        create a password that is related to the site (e.g., “amazonpassword”
        for Amazon.com or “buyshoes” on zappos.com) so that they can increase
        the ability of recall by making the site a stronger cue. And many others
        just keep their passwords somewhere on their computer or on a piece of
        paper.
      </p>
      <h2>RECOGNITION IN INTERFACES</h2>
      <p>
        A menu system is the most classic example of a recognition-based user
        interface: the computer shows you the available commands, and you
        recognize the one you want. Say, for example, that you’re working with a
        word processor and want to draw a line through a sentence to indicate
        that it's no longer valid. Before the advent of graphical user
        interfaces you would have had to recall the name of this rarely used
        formatting feature. A difficult and error-prone task. Now, however, you
        look at the menu of formatting options and easily recognize the term
        strikethrough as being the one you want.
      </p>
      <h2>PROMOTE RECOGNITION IN USER INTERFACES</h2>
      <p>
        How do you promote recognition? By making information and interface
        functions visible and easily accessible. An application or a website
        usually has two components: The chrome or the interface: namely all the
        buttons, navigation, and other elements that are there to help the user
        reach his goal The content: the information that the user needs to
        achieve his goal You can make both the content and the interface easy to
        remember; both can benefit from designing for recognition rather than
        recall. We’ll look at a few successful and less successful examples of
        supporting retrieval of information through recognition. .
      </p>
      <h2>HISTORY AND PREVIOUSLY VISITED CONTENT</h2>
      <p>
        Providing access to the pages recently visited and searches performed in
        the near past can help users resume tasks that they left incomplete and
        that may have a hard time recalling. Search engines such as Google and
        Bing often help users retrace their searches by providing past
        histories.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <span>
        Bing has a link to the user’s search history. The link helps users
        remember previous searches.
      </span>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <span>
        When a user goes back to Amazon.com, the personalized homepage includes
        a list of recently viewed items.
      </span>
      {/* Conclusion box */}
      <h2>Conclusion:</h2>
      <p>
        The 7th usability heuristic (flexibility and efficiency of use) is about
        allowing users to approach tasks in a variety of ways. New users may
        require guidance in performing their tasks, whereas experienced users
        can take advantage of accelerators and other secondary features designed
        to speed up commonly performed actions. Embracing this heuristic means
        allowing user customization, not being prescriptive about core task
        steps, and adding unobtrusive accelerators that power users can discover
        and employ efficiently.{' '}
      </p>
    </>
  );
};

export default RecognitionOverRecall;
