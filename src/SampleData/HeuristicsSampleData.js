export  const HeuristicsSampleData = {
  name: 'Heuristics',
  topic: 'Heuristics',
  sections: [
    {
      name: 'Introduction',
      modules: [
        {
          type: 'display',
          contents: `
          <h1 class="intro">Introduction</h1>
          <h2 class="intro-sub"><span class="intro-sub-span">to the</span> 10 Heuristics of UX Design</h2>

          <p class="notTest">
            <strong>This is not a test.</strong> The following activity is intended
            as an introduction to the 10 Heuristic principles of Usability.
          </p>
          <div class="img"></div>
          <p class="caption">Image caption here</p>
          <div class="page-divider"></div>
          <p class="bold-paragraph">
              25 years ago, Jakob Nielsen described the 10 general principles for
              interaction design. These principles were developed based on years of
              experience in the field of usability engineering and they’ve became
              rules of thumb for human-computer interaction.
          </p>
          <p class="paragraph">
            Today, they are just as relevant as they were then. They can help to
            save development teams considerable amounts of time during early
            usability testing, so that they can direct their attention to more
            complex design challenges. In addition, it’s also worth it to use them
            as a checklist when designing a new product or a feature.
          </p>

          <div class="blue-sticky">
            <div class="blue-sticky-top"></div>
            <h3 class="h3-sticky">Lesson Objectives</h3>
            <ul class="sticky-list">
                <li>At the end of this Activity you will be able to:</li>
                <li>Define the 10 Usability Heuristics</li>
                <li>Identify Heuristics as they pertain to Digital Interfaces</li>
            </ul> 
          </div>

          <div>
            <ul class="lesson-objectives">
              <li>1. System Status</li>
              <li>2. System / World Match</li>
              <li>3. User Control & Freedom</li>
              <li>4. Consistency & Standards</li>
              <li>5. Error Prevention</li>
              <li>6. Recognition over Recall</li>
              <li>7. Flexibility & Efficiency</li>
              <li>8. Aesthetic & Minimalism</li>
              <li>9. User Errors</li>
              <li>10. Help & Documentation</li>
            </ul>
          </div>
          `,
        },
        
      ],
    },
    {
      name: 'Visibility of System Status',
      modules: [
        {
          type: 'display',
          contents: `<h1>1. Visibility of System Status</h1>
          <img src="" alt="" />
          <p>
            Users should always be informed about what is going on through
            appropriate and timely feedback. When people interact with any system it
            should always provide immediate feedback on the interaction. This helps
            create a smooth navigation process for users.
          </p>
          <h2>Scenario</h2>
          <p>
            When you pick up your smartphone. As soon as you lift it, the screen
            lights up and it informs you of missed notifications from various apps,
            received messages, and missed calls. You can always tell how much
            battery power you have left, the status of your internet connection, how
            much cell reception you have (usually using a bar graph), and the time.{' '}
          </p>
          <img src="" alt="" />
          <h2>Examples</h2>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <p>
            Some other examples showing how to give feedback to users inappropriate
            time. We can do that by image, illustration, text even with sound. After
            posting on Twitter, emailing from mail application we hear a ‘swoosh’
            sound, its also a good example.
          </p>
          <img src="" alt="" />
          <p>
            How do feel when you see the item is not available or the size is not
            available in Cart List? Do you become angry after not getting any
            feedback by clicking ADD TO CART button? The system not giving feedback
            on the action you did.
          </p>
          <p>
            You saw the item in the products list but something went wrong now. Look
            at the above screenshots. The system keeps telling the user which size
            is available, which color is out of stock. After selecting the item you
            get a pop up ‘Your item is added to cart’, now you feel comfortable in
            using the system as you know what state are you in the system and you
            continue the shopping.
          </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following elements gives appropriate and timely feedback to the user?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Progress Bar',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Camera',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Message Count',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. A & C',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'display',
          contents: `
          <img src="" alt="" />
      <span>A Good Example of a Visible System Status</span>
      <img src="" alt="" />
      <span>A Bad Exaple of a Visible System Status</span>
      <p>
        Visibility of System Status is about communication and transparency. The
        reason it is so important is because it leads to better decision making
        for the user. Above, are two examples of the same page. Look at Example
        2. You cannot tell what has been selected and what hasn’t. It does not
        give the user a clear idea of what is going on.
      </p>
      <img src="" alt="" />
      <span>A Good Example of a Visible System Status</span>
      <img src="" alt="" />
      <span>A Bad Exaple of a Visible System Status</span>
      <p>
        Scenario: Imagine yourself driving through the city of San Francisco.
        You need to get to Daly City. You’re not very familiar with your current
        surroundings. Consider which map you’d rather use to help you get there.
        The Good example helps your orient where you are. The Bad example leaves
        you a little more clueless. This is why it’s very important to orient
        your user.
      </p>
      <img src="" alt="" />
      <p>
        As previously discussed, the design should always keep users informed
        about what is going on through appropriate feedback within a reasonable
        amount of time. When users know the current system status, they learn
        the outcome of their prior interactions and determine next steps.
        Predictable interactions create trust in the product as well as the
        brand.
      </p>
      <p>
        Conclusion: The 7th usability heuristic (flexibility and efficiency of
        use) is about allowing users to approach tasks in a variety of ways. New
        users may require guidance in performing their tasks, whereas
        experienced users can take advantage of accelerators and other secondary
        features designed to speed up commonly performed actions. Embracing this
        heuristic means allowing user customization, not being prescriptive
        about core task steps, and adding unobtrusive accelerators that power
        users can discover and employ efficiently.{' '}
      </p>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'True or False: In the following graphic. The blue line, ‘Syncing 5 of 21’ and the loading animation circle are ALL examples of “Visibility of System Status.',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'True',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'False',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'System / World Match',
      modules: [
        {
          type: 'display',
          contents: `<h1>2. System / World Match</h1>
          <img src="" alt="" />
          <p>
            By using language that is familiar to your user, you create an
            environment for users that is easier to navigate, understand, and
            remember how to use. It is important that the language, mental models,
            and concepts you choose to implement are familiar to your users. It is
            important to: 1. Research your user, the wording they use, and design
            with that in mind 2. Choose clear and concise wording that is easy to
            understand 3. If you need to use a word not everyone understands,
            provide a definition to go with it. They should never have to leave the
            site to look up a word. 4. Leverage familiarity with real-world objects
            and activities - design in a way that reflects material objects people
            already use.
          </p>
          <h2>Research your users</h2>
          <span>What are they saying?</span>
          <img src="" alt="" />
          <img src="" alt="" />
          <p>
            “In simple terms, the system must speak the user's language which were
            familiar to them, rather than system oriented jargons. We always seek
            familiar words, things, concepts, shapes, images to understand and to
            make a decision.” - Harsh Gorasia uxPlanet.org{' '}
          </p>
          <h3>The labels and other content</h3>
          <p>
            Most of the times the users are going to search for you on the internet
            or are going to navigate within your website using language that seems
            more natural to them.
          </p>
          <img src="" alt="" />
          <h3>Leverage Familiarity</h3>
          <p>
            Above are examples of leveraging familiarity with real-world objects and
            activities Each item has been translated from a real world object to a
            digital item with the same purpose.
          </p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
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
          </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following elements is NOT an example of a digital item created to look like and serve the same purpose as it’s real-life match?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Calendar',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Clock',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Battery',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. Exclamation Point',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement: 'What color is the sky?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'User Control',
      modules: [
        {
          type: 'display',
          contents: `<h1>3. User Control & Freedom</h1>
          <img src="" alt="" />
          <p>
            Example: The freedom to undo any accidental actions. This principle can
            be best illustrated by the Gmail’s flash message with undo action when
            we accidentally delete an email.
          </p>
          <p>
            It is very common for users to make mistakes while using a product.
            Because of this, it is important that we design ways to help them undo
            those mistakes. Imagine a situation that involves something like an
            accidental deletion of an important file or posting a grammatical
            mistake on your company’s social media; every system should have a
            clearly marked “emergency exit” mechanism, that provides users with an
            easy way to get back after they find themselves in an unwanted state.
          </p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <p>
            The examples above are some of the UI elements that can help users go
            back to the previous state the system was in. They are another way of
            giving the user control.
          </p>
          <img src="" alt="" />
          <p>
            Another Example of User Control: Gmail Gmail gives users the ability to
            recover from accidently deleting an email. They can undo the action of
            deleting an email by finding the email in the “Trash” folder and moving
            the email back into their “Inbox.” This allows them to recover from
            their mistake.
          </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'All of the following are examples of User Control and Freedom EXCEPT: ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: true,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which element on the screen provides the user Control and Freedom to go back and set up the profile again if they have done that by mistake?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Continue Button',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Undo Button',
                isCorrect: true,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Check Mark',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. None of the Above',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following is an example of User Control and Freedom',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Save Link',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Edit Post',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Delete',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. All of the Above',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Consistency + Standards',
      modules: [
        {
          type: 'display',
          contents: `<h1>Consistency & Standards</h1>
          <img src="" alt="" />
          <img src="" alt="" />
          <p>
            There are platform and industry conventions that must be followed in
            order to lesson the cognitive burden on users of deciphering every
            system they encounter. It is important that when a user is using your
            platform, they know that their expectations will be met. Important
            things to remember: 1. Maintain internal and external consistency with
            your platform in order to improve learnability. 2. Stay consistent
            within your product(s) (internal consistency). 3. Follow established
            industry conventions (external consistency)
          </p>
          <img src="" alt="" />
          <img src="" alt="" />
          <p>
            The example above shows two diffferent layouts for a login form. Notice
            how strange the second example looks. Thats because it is not following
            the external consistency rule of following established industry
            conventions.
          </p>
          <h2>Rules For Design Standards</h2>
          <p>
            To be successful, an interface design standard must: • be
            well-illustrated with examples since designers go by the examples much
            more than body text • make sure that the examples fully comply with the
            standard in all aspects and not just the one they are intended to
            illustrate (designers may pick up more than one hint from a given
            example) • have extensive and comprehensive checklists as much as
            possible (designers prefer to scan down a list instead of having to read
            text) — for example, a list of all elements that must be on every page
            or a list of preferred terminology • have a standards expert available
            both to review new designs in a formal standards inspections and for
            more informal consultations whenever designers are in doubt about the
            correct interpretation of the standard (if there is no easy place to
            turn with questions, then each designer will make up his or her own
            answer — guaranteed to be different in each case) • be supported by an
            active evangelism program. It is not enough to wait to be consulted: you
            must actively seek out projects and visit them to tell them about the
            standard and to (gently) comment on their designs and how to correct the
            inevitable deviations • be a living document under the control of a
            standards manager who updates the standard as new issues emerge • either
            comply with the most popular other design standards or contain explicit
            statements highlighting the differences to these other standards • be
            supported by development tools and templates that make it easier to
            comply with the standard than to implement a non-standard design • have
            a good index (if printed) or a good search supplemented with hypertext
            links to related rules (if online)
          </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following is the best choice when allowing a User to select Multiple items?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Check Boxes',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Radio Buttons',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which UI pattern will cause a user discomfort, and increase decision making time? ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'South Facing Arrow',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'North Facing Arrow',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'Both A & B',
                isCorrect: true,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'None of the Above',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Error Prevention',
      modules: [
        {
          type: 'display',
          contents: `<h1>5. Error Prevention</h1>
          <img src="" alt="" />
          <p>
            The goal is to design so well that we prevent errors before they even
            occur. However, it is important to account for errors by having well
            designed error messages. It is important to carefully check your
            products for error-prone conditions. It is also important to give users
            a confirmation option before making a choice they cannot easily recover
            from.
          </p>
          <h3>There are two types of errors:</h3>
          <p>
            Before discussing how to prevent errors, it’s important to note that
            there are two types of errors that users make: slips and mistakes. (Both
            are discussed in much greater detail in Don Norman’s book The Design of
            Everyday Things.)
          </p>
          <p>
            <strong>Slips</strong> occur when users intend to perform one action,
            but end up doing another (often similar) action. For example, typing an
            “i” instead of an “o” counts as a slip; accidentally putting liquid hand
            soap on one’s toothbrush instead of toothpaste is also a slip. Slips are
            typically made when users are on autopilot, and when they do not fully
            devote their attention resources to the task at hand.
          </p>
          <p>
            <strong>Mistakes</strong> are made when users have goals that are
            inappropriate for the current problem or task; even if they take the
            right steps to complete their goals, the steps will result in an error.
            For example, if I misunderstood the meaning of the oil-pressure warning
            light in my car, and thought it was the tire-pressure monitor, no matter
            how carefully I added air to my tires, it would not fix the issue with
            my oil pressure. This would be a mistake, since the goal that I was
            attempting to accomplish was inappropriate for the situation, even
            though I made no errors in executing my plan. Mistakes are conscious
            errors, and often (though not exclusively) arise when a user has
            incomplete or incorrect information about the task, and develops a
            mental model that doesn’t match how the interface actually works.
          </p>
          <h2>General Guidelines</h2>
          <p>
            Slips often happen when users are quite familiar with the goal that they
            seek to achieve and with the procedure for accomplishing that goal, but
            accidentally they take the wrong step when trying to achieve it. Often,
            when executing tasks that are well practiced, we tend to allocate fewer
            attentional resources, and, as a result, we can “slip” and perform the
            wrong action. Thus, ironically, slip-type mistakes often are made by
            expert users who are very familiar with the process at hand; unlike new
            users who are still learning how to use the system, experts feel that
            they have mastered the task and need to pay less attention to its actual
            completion. Strategies for preventing slips are centered around gently
            guiding users so that they stay on the right path and have fewer chances
            of slipping. Assist users by providing the needed level of precision,
            and encourage users to check for errors.
          </p>
          <h2>Include Helpful Constraints</h2>
          <p>
            Slips often happen when users are quite familiar with the goal that they
            seek to achieve and with the procedure for accomplishing that goal, but
            accidentally they take the wrong step when trying to achieve it. Often,
            when executing tasks that are well practiced, we tend to allocate fewer
            attentional resources, and, as a result, we can “slip” and perform the
            wrong action. Thus, ironically, slip-type mistakes often are made by
            expert users who are very familiar withInclude Helpful Constraints While
            it’s not always a good idea to limit users’ choices, in cases where
            there are clear rules that define acceptable options, it can be a good
            strategy to constrain the types of input users can make. For example,
            booking a flight typically involves selecting the dates of travel, and
            there are a few rules that govern which dates are acceptable. One of the
            major rules is that a return flight cannot happen before a departure. If
            users aren’t limited in the dates they can choose, they may slip and
            accidentally select a set of dates for their flight that don’t follow
            the rules. A helpful constraint here will force users to pick a date
            range that fits. the process at hand; unlike new users who are still
            learning how to use the system, experts feel that they have mastered the
            task and need to pay less attention to its actual completion. Strategies
            for preventing slips are centered around gently guiding users so that
            they stay on the right path and have fewer chances of slipping. Assist
            users by providing the needed level of precision, and encourage users to
            check for errors.
          </p>
          <img src="" alt="" />
          <h2>Other Suggestions</h2>
          <p>
            Similarly to how constraints guide users toward the correct use of an
            interface, suggestions can preempt many slips before the user has the
            opportunity to make them. On websites that offer thousands of products,
            search is an effective way of helping users find their proverbial needle
            in a haystack. However, typing can be inaccurate, especially on
            touchscreens where there isn’t any tactile (also known as haptic)
            feedback. While you cannot prevent a user from making typos (which are
            slip-type errors), you can preempt typos from turning into problems by
            offering contextual suggestions while the user types. Offering search
            suggestions has also the benefit of supporting recognition over recall
            in those situations when the users misremember the name of the product
            or content they’re looking for.
          </p>
          <img src="" alt="" />`,
        },
        {
          type: 'question',
          contents: {
            problemStatement: 'Choose the best example of Error Prevention',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which elements on the following page help prevent user errors?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Image',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Star Rating',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Inventory Supply',
                isCorrect: true,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. Wishlist',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Recognition over Recall',
      modules: [
        {
          type: 'display',
          contents: `<h1>6. Recognition Over Recall</h1>
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
          <img src="" alt="" />
          <span>
            Bing has a link to the user’s search history. The link helps users
            remember previous searches.
          </span>
          <img src="" alt="" />
          <span>
            When a user goes back to Amazon.com, the personalized homepage includes
            a list of recently viewed items.
          </span>
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
          </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Is the following image an example of Recognition or Recall? ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Recognition',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Recall',
                isCorrect: true,
                feedback: 'The Sky is not red!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Is the following image an example of Recognition or Recall? ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Recognition',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Recall',
                isCorrect: true,
                feedback: 'The Sky is not red!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Flexibility + Efficiency',
      modules: [
        {
          type: 'display',
          contents: `<h1>7. Flexibility & Efficiency</h1>
          <img src="" alt="" />
          <p>
            Shortcuts— unseen by the novice user — speed up the interaction for the
            expert users such that the system can cater to both inexperienced and
            experienced users.
          </p>
          <img src="" alt="" />`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Double tapping on a photo on Instagram causes the “like” heart to fill in automatically.  This is an example of a(n):',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Advanced Feature',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Experienced User',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'Accelerator',
                isCorrect: true,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'Multifunction Use',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'What does creating keyboard shortcuts for repetative functions give the user in order to execute certain commands? ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Alternative MEthod',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Accessibility',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'Repetative Usage',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'Multifunction Use',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Aesthetic + Minimilism',
      modules: [
        {
          type: 'display',
          contents: `<h1>8. Aesthetic & Minimalism</h1>
          <img src="" alt="" />
          <span>
            <strong>Example:</strong> An ornate teapot may have excessive decorative
            elements that can interfere with usability, like an uncomfortable handle
            or hard to wash nozzle.
          </span>
          <p>
            Interfaces should not contain information which is irrelevant or rarely
            needed. Every extra unit of information in an interface competes with
            the relevant units of information and diminishes their relative
            visibility. This heuristic doesn't mean you have to use a flat design —
            it's about making sure you're keeping the content and visual design
            focused on the essentials. Ensure that the visual elements of the
            interface support the user's primary goals.
          </p>
          <p>
            Dialogues should not contain information which is irrelevant or rarely
            needed. Every extra unit of information in a dialogue competes with the
            relevant units of information and diminishes their relative visibility.
            read here. Jacob Nielson
          </p>
          <img src="" alt="" />
          <h2>Ways to ensure Aesthetic and minimalist design</h2>
          <h3>1. Show only relevant things</h3>
          <p>
            Medium – the blogging platform is a great example of this heuristic. It
            is essentially like a blank piece of paper and if you need to add
            anything beyond text, you just need to click on the + sign which again
            is the universal sign for adding something.
          </p>
          <img src="" alt="" />
          <span>Google: Nothing More and Nothing Less.</span>
          <h3>2. Maintain hierarchy</h3>
          <p>
            If you have created something that needs a lot of content, think of ways
            to organize it in proper hierarchy and sections. This is an important
            concept of aesthetic and minimalist design. The websites like Atlassian
            and Stripe are the perfect examples. They have a lot of aesthetically
            placed content.
          </p>
          <img src="" alt="" />`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following is an example of aesthetic and minimalist design?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'True or False: This Airbnb homepage is an exmaple of Aesthetic & Minimalism.  ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'True',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'False',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
            ],
          },
        },
        {
          type: 'display',
          contents: `<h3>3.Keep "Above the fold" in mind</h3>
          <ul>
            <li>The term Above the fold came from conventional printing.</li>
            <li>
              Like the front-page of the newspaper, it is the most important real
              estate in your interface.
            </li>
            <li>
              Since most users will see this part, it’s important to keep only the
              most important things in this section.
            </li>
            <li>
              In case of a website, Above the fold is the portion of the page
              visible without scrolling.
            </li>
            <li>
               Although, with changing user behavior, above the fold is not as
              relevant today.
            </li>
            <li>
               But it’s still good to keep it in mind and show only the most
              important things above the fold.
            </li>
          </ul>
          <img src="" alt="" />
          <h3>4. Get rid of the extra mass</h3>
          <p>Extra mass is created by:</p>
          <ul>
            <li>Features that are rarely used</li>
            <li>Copy that can be shrunk without losing the meaning</li>
            <li>Irrelevant images</li>
            <li>Redundant features</li>
          </ul>
          <p>Remember only a fraction of things are useful on your page.</p>
          <p>
            Always ask yourself if there is one thing that you can remove from your
            interface, what would it be?
          </p>
          <img src="" alt="" />
          <span>
            Apple provides only the basic information of a feature, hiding
            additional information under “Learn More”. Check the same product on a
            retail website to understand the importance of clutter-free experience.
          </span>
          <div>
            Conclusion: Aesthetic and Minimalist design is not about adding white
            space. Its all about giving relevant data and removing all the unwanted
            things. Grab users attention towards the action needed there or give
            exact data that they want to see. Don't add irrelevant data and elements
            to confuse users.
          </div>  `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the below elements belong above the fold on a webpage?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Description',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Logo',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Call to Action',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'All of the Above',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Error Recovery',
      modules: [
        {
          type: 'display',
          contents: `<h1>9. Error Recovery</h1>
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
          <h3>Recognize</h3>
          <p>
            The most straightforward way to inform a user of an error is to use an
            error message. This can be achieved with text alone or with text that is
            accompanied by a visual cue like a red X for example. The error message
            must be highly noticeable and visible to the user.
          </p>
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
          <img src="" alt="" />
          <h2>Conclusion</h2>
          <p>
            Users are humans. Humans tend to do mistakes. So we should always keep
            an eye to avoid those possible mistakes by giving appropriate
            suggestions and notifications when needed.
          </p> `,
        },
        {
          type: 'question',
          contents: {
            problemStatement: 'What color is the sky?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: true,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following input fields would best help the user recover from inputting a password that doesn’t meet requirements?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
    {
      name: 'Help + Documentation',
      modules: [
        {
          type: 'display',
          contents: `<h1>10. Help & Documentation</h1>
          <img src="" alt="" />
          <p>
            Websites and applications can offer two types of help: proactive and
            reactive. Proactive help is provided before the user has encountered a
            problem, in order to prevent issues. It includes onboarding tutorials
            and contextual tips. In contrast, reactive help includes materials such
            as documentation, videos, or even tutorials for those situations when
            users have an issue and they seek out advice to address it. (Even though
            some users may consume such materials proactively, it is rare that they
            do so.)
          </p>
          <img src="" alt="" />
          <p>
            Proactive Help The goal of proactive help is to familiarize users with
            an interface. Proactive help often occurs in three scenarios: New users
            at first launch of an interface Novice users as they gain proficiency
            with an interface (this happens over time and is most relevant for
            complex applications) Existing users encountering a new or redesigned
            interface Proactive help can be implemented through tutorials,
            instructional overlays, templates, contextual help, tooltips, and
            wizards.
          </p>
          <img src="" alt="" />
          <p>
            Push and Pull Revelations: Two Types of Proactive Help Proactive help
            comes in two forms, push revelations and pull revelations. The
            difference between these relies on whether they are individualized to
            the user’s context and likely to be related to the current user goal.
            Push revelations occur when an interface provides assistance or help
            content that isn’t relevant to the users’ goals. Aptly named, this type
            of proactive help pushes help content in a relatively random way, with
            no regard for what the user is trying to do at the moment. The classic
            example is the tips or instructional overlays that occur when an
            application is launched and that inform users of new features.
          </p>
          <img src="" alt="" />
          <p>
            When logging into O’Reilly, a digital library, the system pushed
            proactive help with an instructional overlay highlighting interface
            elements.
          </p>`,
        },
        {
          type: 'display',
          contents: `<p>
          Push revelations are often ignored by users because they get in the way:
          people want to use the interface, not just read about it. This type of
          help also lacks context, as it’s challenging to remember the pushed
          information when it is not related to your immediate goals.
        </p>
        <img src="" alt="" />
        <p>
          AddEvent, a calendar event tool, prompted new users with an option to
          view a tutorial of the interface. This push revelation was appropriately
          paired with the option to skip the tutorial. However, even if users
          engaged with the tutorial, they would discover that it was too basic!
          Instructions to create an event are likely unnecessary because the
          system follows design standards and is aligned with traditional mental
          models of how to create a calendar event. Interfaces that provide basic
          information as proactive help are partly why users skip push
          revelations. When users engage with them and are shown obvious commands
          and controls, they may start to perceive all push revelations as low
          value and not worth engaging with.
        </p>
        <p>
          Pull revelations show contextual tips that are relevant to the user’s
          task. They could appear when the mouse is near corresponding controls or
          when the user has started a corresponding flow. Implementation methods
          include tooltips, contextual overlays, or wizards. Pull revelations are
          less likely to be ignored because they provide timely information to
          help users accomplish a task.
        </p>
        <img src="" alt="" />
        <span>
          Microsoft Word recognized that the user was working on a resume and
          provided a tip to See resume suggestions from LinkedIn. This is an
          example of a pull revelation, because it is triggered by the individual
          user’s behavior, not ‘pushed’ to all users.
        </span>
        <h2>Guidance for Providing Proactive Help</h2>
        <p>
          Keep proactive help short and to the point. Proactive help distracts
          users from their core task, so it’s important that the help is timely,
          informative, and relevant. Write the content from the user’s perspective
          and consider using verb-oriented phrases.
        </p>
  
        <p>
          Favor pull over push revelations. Make help content accessible, but
          don’t force users into it. Use push revelations for information that is
          likely to be needed regardless of context and pull revelations to
          provide timely help content relevant to the user’s task.
        </p>
        <img src="" alt="" />
        <span>
          Dovetail, a user research platform, provided timely help content when
          users opened a data page — a pull revelation. This was a better choice
          than presenting this content as a push revelation (e.g., at login)
        </span>
        <p>
          Push revelations should be easy to ignore (e.g., by dismissing them).
          Push revelations stall users from accessing the core interface.
          Additionally, push revelations can frustrate users that are already
          familiar with the interface or don’t feel they need help. Anytime you
          present content in this way, make sure users can skip it.
        </p>
        <img src="" alt="" />
        <span>
          Dovetail, a user research platform, provided timely help content when
          users opened a data page — a pull revelation. This was a better choice
          than presenting this content as a push revelation (e.g., at login).
          ​​​​​s.
        </span>
        <p>
          Conclusion: Help and documentation are an important element of user
          experience. They are often necessary, but rarely fun. In general, users
          don’t like to read, and they particularly don’t like to read
          instructions. But any kind of trouble in the interaction is also a
          learning opportunity for the user and thus an opportunity for the
          designer to impact information and grow the user’s mental model in ways
          that would not have happened without the impetus of this trouble.
          Anticipate when your users will need help and provide relevant
          information that will support them in accomplishing their goal.
          Supplement your proactive help with a documentation repository that
          users can refer to as needed. And remember to keep help content brief,
          to the point, and easy to scan.{' '}
        </p>`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'How is the image below an example of Help & Documentation?',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'Productive Help',
                isCorrect: false,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'Reactive Help',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'Push Notification',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'Pull Revelation',
                isCorrect: true,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'All of the following are important to keep in mind when designing for users as they are key to Help & Documentation EXCEPT:',
            timeLimit: 4,
            type: 'multiple-choice',
            media: 'https://picsum.photos/200/300',
            answers: [
              {
                label: 'A. Upload Option',
                isCorrect: true,
                feedback: 'Correct! The Sky is blue!',
              },
              {
                label: 'B. Tips',
                isCorrect: false,
                feedback: 'The Sky is not red!',
              },
              {
                label: 'C. Information',
                isCorrect: false,
                feedback: 'The Sky is not green!',
              },
              {
                label: 'D. Customer Service',
                isCorrect: false,
                feedback: 'The Sky is not yellow!',
              },
            ],
          },
        },
      ],
    },
  ],
  isDraft: false,
  archived: false,
};
