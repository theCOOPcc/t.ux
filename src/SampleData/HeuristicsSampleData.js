export const HeuristicsSampleData = {
  name: '10 Heuristics of UX Design',
  topic: 'Heuristics',
  time: 30,
  links: [
    {
      text: '10 Usability Heuristics for User Interface Design',
      url: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
    },
    {
      text: '10 Usability Heuristics for User Interface Design',
      url:
        'https://www.designprinciplesftw.com/collections/10-usability-heuristics-for-user-interface-design',
    },
    {
      text: 'Heuristic Evaluation: How to Conduct a Heuristic Evaluation',
      url:
        'https://www.interaction-design.org/literature/article/heuristic-evaluation-how-to-conduct-a-heuristic-evaluation',
    },
    {
      text:
        'User Experience is one of the hottest topics in day today designer’s life.',
      url:
        'https://uxdesign.cc/user-experience-is-one-of-the-hottest-topics-in-day-today-designers-life-fb314978e1ff',
    },
    {
      text: 'Your Step-By-Step Guide To Heuristic Evaluation In UX Design',
      url:
        'https://careerfoundry.com/en/blog/ux-design/what-is-a-heuristic-evaluation-in-ux/',
    },
    {
      text: '11 Usability Heuristics Every Designer Should Know',
      url: 'https://careerfoundry.com/en/blog/ux-design/usability-heuristics/',
    },
    {
      text: '10 Usability Heuristics and How To Apply Them To Product Design',
      url:
        'https://uxplanet.org/10-usability-heuristics-and-how-to-apply-them-to-product-design-dd4a4a06d78c',
    },
    {
      text: '10 Usability Heuristics Explained',
      url:
        'https://medium.com/@erangatl/10-usability-heuristics-explained-caa5903faba2',
    },
    {
      text: '10 Usability Heuristics That All UI Designers Should Know',
      url: 'https://www.secretstache.com/blog/usability-heuristics/',
    },
    {
      text: '10 Usability Heuristics with Examples',
      url:
        'https://blog.prototypr.io/10-usability-heuristics-with-examples-4a81ada920c',
    },
  ],
  sections: [
    {
      name: 'Introduction',
      modules: [
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=1036, maximum-scale=1.0" />
                <link rel="shortcut icon" href="./img/favicon.png" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="photo" />
                <link rel="stylesheet" type="text/css" href="css/introduction.css" />
                <style>
                  @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                  @font-face {
                    font-family: "Proxima Nova-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                      format("truetype");
                  }

                  @font-face {
                    font-family: "Helvetica Neue-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                  }

                  .component-wrapper a,
                  .screen a {
                    text-decoration: none;
                    display: contents;
                  }

                  .full-width-a {
                    width: 100%;
                  }

                  .full-height-a {
                    height: 100%;
                  }

                  .screen textarea:focus,
                  .screen input:focus {
                    outline: none;
                  }

                  .screen *,
                  .component-wrapper * {
                    box-sizing: border-box;
                  }

                  .screen div {
                    -webkit-text-size-adjust: none;
                  }

                  .container-center-vertical,
                  .container-center-horizontal {
                    pointer-events: none;
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    margin: 0;
                  }

                  .container-center-vertical {
                    align-items: center;
                    height: 100%;
                  }

                  .container-center-horizontal {
                    justify-content: center;
                    width: 100%;
                  }

                  .container-center-vertical > *,
                  .container-center-horizontal > * {
                    pointer-events: auto;
                    flex-shrink: 0;
                  }

                  .component-wrapper,
                  .screen {
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-all;
                    word-break: break-word;
                  }

                  .auto-animated div {
                    opacity: 0;
                    position: absolute;
                    --z-index: -1;
                  }

                  .auto-animated .container-center-vertical,
                  .auto-animated .container-center-horizontal {
                    opacity: 1;
                  }

                  .overlay {
                    position: absolute;
                    opacity: 0;
                    display: none;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                  }

                  .animate-appear {
                    opacity: 0;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 normal forwards;
                  }

                  .animate-disappear {
                    opacity: 1;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 reverse forwards;
                  }

                  .animate-nodelay {
                    animation-delay: 0s;
                  }

                  @keyframes reveal {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  .align-self-flex-start {
                    align-self: flex-start;
                  }
                  .align-self-flex-end {
                    align-self: flex-end;
                  }
                  .align-self-flex-center {
                    align-self: center;
                  }
                  .valign-text-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  }
                  .valign-text-bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                  }
                  input:focus {
                    outline: none;
                  }
                  .component-wrapper,
                  .component-wrapper * {
                    pointer-events: none;
                  }

                  .component-wrapper a *,
                  .component-wrapper a,
                  .component-wrapper input,
                  .component-wrapper video,
                  .component-wrapper iframe,
                  .listeners-active,
                  .listeners-active * {
                    pointer-events: auto;
                  }

                  .hidden,
                  .hidden * {
                    visibility: hidden;
                    pointer-events: none;
                  }

                  .smart-layers-pointers,
                  .smart-layers-pointers * {
                    pointer-events: auto;
                    visibility: visible;
                  }

                  .component-wrapper.not-ready,
                  .component-wrapper.not-ready * {
                    visibility: hidden !important;
                  }

                  .listeners-active-click,
                  .listeners-active-click * {
                    cursor: pointer;
                  }
                </style>
                <meta name="author" content="AnimaApp.com - Design to code, Automated." />
              </head>
              <body style="margin: 0; background: rgba(255, 255, 255, 1)">
                <input type="hidden" id="anPageName" name="page" value="introduction" />
                <div class="container-center-horizontal">
                  <div class="introduction screen">
                    <div class="rectangle-48-C61RwL border-class-2"></div>
                    <a href="javascript:history.back()"
                      ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                    >
                    <div class="rectangle-61-C61RwL"></div>
                    <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                    <div class="welcome-C61RwL">
                      <div class="welcome-0O6yUh valign-text-middle border-class-1">Introduction</div>
                    </div>
                    <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-26@1x.svg" /></div>
                    <div class="text-intro-subheader-C61RwL">
                      <div class="to-the-10---ux-design-U0E3HE valign-text-middle border-class-1">
                        <span>
                          <span class="span1-EI8spN">to the </span><span class="span2-EI8spN">10 Heuristics of UX Design</span
                          ><span class="span3-EI8spN">.</span>
                        </span>
                      </div>
                    </div>
                    <div class="page-divider-solid-C61RwL"></div>
                    <div class="caption-te-redits-etc-C61RwL">
                      <div class="caption-te-redits-etc-VvC9Lz valign-text-middle border-class-1">
                        Caption Text: Photo Credits etc....
                      </div>
                    </div>
                    <div class="text-body-paragraph-C61RwL">
                      <div class="body-copy-jdAx62 border-class-1">
                        <span class="span1-xxmNLl">This is not a test.</span
                        ><span class="span2-xxmNLl">
                          The following activity is intended as an introduction to the 10 Heuristic principles of Usability.
                        </span>
                      </div>
                    </div>
                    <div class="next-triple-chevron-C61RwL"></div>
                    <div class="text-body-paragraph-VMr6Om">
                      <div class="body-copy-SuXUfK border-class-1">
                        <span class="span1-KinY1a"
                          >In 1994, Jakob Nielsen released the 10 general usability principles for interaction design. These
                          principles were developed based on years of experience in the field of usability engineering and they’ve
                          became rules of thumb for human-computer interaction.<br /><br /></span
                        ><span class="span2-KinY1a"
                          >Today, they are just as relevant as they were then. They can help to save development teams considerable
                          amounts of time during early usability testing, so that they can direct their attention to more complex
                          design challenges. In addition, it’s also worth it to use them as a checklist when designing a new product
                          or a feature.<br
                        /></span>
                      </div>
                    </div>
                    <div class="lesson-obj-s-text-box-C61RwL">
                      <div class="rectangle-89-9MBgm5"></div>
                      <div class="lesson-obj--interaces-9MBgm5 border-class-1 poppins-normal-granite-gray-24px">
                        <span class="span1-E0apyt">Lesson Objectives<br /></span
                        ><span class="span2-E0apyt"
                          >• At the end of this Activity you will be able to: <br />• Define the 10 Usability Heuristics<br />• Identify
                          Heuristics as they pertain to Digital Interaces.&nbsp;&nbsp;</span
                        >
                      </div>
                    </div>
                    <img alt="" class="image-12-C61RwL" src="/images/img/image-12@1x.jpg" />
                    <div class="item-list--objectives-C61RwL">
                      <div class="x1-system-s-umentation-C4nRDb border-class-1">
                        1. System Status<br />2. System / World Match<br />3. User Control &amp; Freedom<br />4. Consistency &amp;
                        Standards<br />5. Error Prevention<br />6. Recognition over Recall<br />7. Flexibility &amp; Efficiency<br />8.
                        Aesthetic &amp; Minimilism<br />9. User Errors<br />10. Help &amp; Documentation
                      </div>
                      <img alt="" class="line-8-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-9-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-10-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-11-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-12-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-13-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-14-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-15-C4nRDb" src="/images/img/line-8@1x.svg" />
                      <img alt="" class="line-16-C4nRDb" src="/images/img/line-8@1x.svg" />
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        },
      ],
    },
    {
      name: 'Visibility of System Status',
      modules: [
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=1042, maximum-scale=1.0" />
                <link rel="shortcut icon" href="./img/favicon.png" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="photo" />
                <link rel="stylesheet" type="text/css" href="css/visibility-of-system-status.css" />
                <style>
                  @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                  @font-face {
                    font-family: "Proxima Nova-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                      format("truetype");
                  }

                  @font-face {
                    font-family: "Helvetica Neue-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                  }

                  .component-wrapper a,
                  .screen a {
                    text-decoration: none;
                    display: contents;
                  }

                  .full-width-a {
                    width: 100%;
                  }

                  .full-height-a {
                    height: 100%;
                  }

                  .screen textarea:focus,
                  .screen input:focus {
                    outline: none;
                  }

                  .screen *,
                  .component-wrapper * {
                    box-sizing: border-box;
                  }

                  .screen div {
                    -webkit-text-size-adjust: none;
                  }

                  .container-center-vertical,
                  .container-center-horizontal {
                    pointer-events: none;
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    margin: 0;
                  }

                  .container-center-vertical {
                    align-items: center;
                    height: 100%;
                  }

                  .container-center-horizontal {
                    justify-content: center;
                    width: 100%;
                  }

                  .container-center-vertical > *,
                  .container-center-horizontal > * {
                    pointer-events: auto;
                    flex-shrink: 0;
                  }

                  .component-wrapper,
                  .screen {
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-all;
                    word-break: break-word;
                  }

                  .auto-animated div {
                    opacity: 0;
                    position: absolute;
                    --z-index: -1;
                  }

                  .auto-animated .container-center-vertical,
                  .auto-animated .container-center-horizontal {
                    opacity: 1;
                  }

                  .overlay {
                    position: absolute;
                    opacity: 0;
                    display: none;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                  }

                  .animate-appear {
                    opacity: 0;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 normal forwards;
                  }

                  .animate-disappear {
                    opacity: 1;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 reverse forwards;
                  }

                  .animate-nodelay {
                    animation-delay: 0s;
                  }

                  @keyframes reveal {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  .align-self-flex-start {
                    align-self: flex-start;
                  }
                  .align-self-flex-end {
                    align-self: flex-end;
                  }
                  .align-self-flex-center {
                    align-self: center;
                  }
                  .valign-text-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  }
                  .valign-text-bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                  }
                  input:focus {
                    outline: none;
                  }
                  .component-wrapper,
                  .component-wrapper * {
                    pointer-events: none;
                  }

                  .component-wrapper a *,
                  .component-wrapper a,
                  .component-wrapper input,
                  .component-wrapper video,
                  .component-wrapper iframe,
                  .listeners-active,
                  .listeners-active * {
                    pointer-events: auto;
                  }

                  .hidden,
                  .hidden * {
                    visibility: hidden;
                    pointer-events: none;
                  }

                  .smart-layers-pointers,
                  .smart-layers-pointers * {
                    pointer-events: auto;
                    visibility: visible;
                  }

                  .component-wrapper.not-ready,
                  .component-wrapper.not-ready * {
                    visibility: hidden !important;
                  }

                  .listeners-active-click,
                  .listeners-active-click * {
                    cursor: pointer;
                  }
                </style>
                <meta name="author" content="AnimaApp.com - Design to code, Automated." />
              </head>
              <body style="margin: 0; background: rgba(255, 255, 255, 1)">
                <input type="hidden" id="anPageName" name="page" value="visibility-of-system-status" />
                <div class="visibility-of-system-status screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4@1x.svg" /></div>
                  <img alt="" class="group-41-C61RwL" src="/images/img/group-41@1x.png" />
                  <div class="welcome-C61RwL">
                    <div class="x1-visibili-tem-status-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      1. Visibility of System Status
                    </div>
                  </div>
                  <div class="next-triple-chevron-C61RwL"></div>
                  <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-21@1x.svg" /></div>
                  <div class="examples-C61RwL valign-text-middle border-class-1">EXAMPLES</div>
                  <div class="group-94-C61RwL">
                    <img alt="" class="load-indicator-NhvmeG" src="/images/img/load-indicator@1x.png" />
                    <img alt="" class="step-progress-bar-NhvmeG" src="/images/img/step-progress-bar@1x.png" />
                    <img alt="" class="gmail-loading-NhvmeG" src="/images/img/gmail-loading@1x.png" />
                  </div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      Some more ways we can give feedback to users in appropriate time are through:<br />
                      • image <br />
                      • illustration<br />
                      • text <br />
                      • sound (ex: after send an email from mail application we hear a ‘swoosh’ sound)
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-KinY1a"
                        >How do feel when you put an item in your online shopping cart, only to see the item is not available or the
                        size is not available once in the Cart List? Do you become angry after not getting any feedback by clicking </span
                      ><span class="span2-KinY1a">ADD TO CART</span
                      ><span class="span3-KinY1a">
                        button? The system is not giving feedback on the action you did.<br /><br />You saw the item in the products
                        list but something went wrong. Look at the above screenshots. The system is telling the user which size is
                        available, which color is out of stock. After selecting the item you get a pop up ‘Your item is added to
                        cart’, now you feel comfortable in using the system as you know what state are you in the system and you
                        continue the shopping.</span
                      >
                    </div>
                  </div>
                  <img alt="" class="x1-mo-mp-kz--lls2-wa-1-C61RwL" src="/images/img/1-mompkzetmd-oz-al-ls2wa-1@1x.jpg" />
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px">
                      Users should always be informed about what is going on through appropriate and timely feedback.<br />When
                      people interact with any system it should always provide immediate feedback on the interaction. This helps
                      create a smooth navigation process for users.
                    </div>
                  </div>
                  <div class="scenario-t-with-image-C61RwL">
                    <div class="rectangle-89-qCRxHs"></div>
                    <div class="scenario-w-d-the-time-qCRxHs border-class-1 poppins-normal-granite-gray-24px">
                      <span class="span1-7FYOOU">Scenario: <br /></span
                      ><span class="span2-7FYOOU"
                        >When you pick up your smartphone. As soon as you lift it, the screen lights up and it informs you of missed
                        notifications from various apps, received messages, and missed calls.&nbsp;&nbsp;You can always tell how
                        much battery power you have left, the status of your internet connection, how much cell reception you have
                        (usually using a bar graph), and the time.
                      </span>
                    </div>
                  </div>
                  <img alt="" class="scenario-image-C61RwL" src="/images/img/scenario-image@1x.png" />
                </div>
              </body>
            </html>
            `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `<p>Which of the following elements gives <strong>appropriate and timely feedback</strong> to the user?</p>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',

            answers: [
              {
                label: 'A. Progress Bar',
                isCorrect: false,
                feedback:
                  'Having the ability to see how far they’ve progressed through an activity using a progress bar is a timely and appropriate way to give them an idea of how far they’ve come and how far they have left to go.  Being able to see how many unread texts they have by simply glancing at the messaging icon is another quick and easy way to receive feedback',
              },
              {
                label: 'B. Camera',
                isCorrect: false,
                feedback:
                  'Having the ability to see how far they’ve progressed through an activity using a progress bar is a timely and appropriate way to give them an idea of how far they’ve come and how far they have left to go.  Being able to see how many unread texts they have by simply glancing at the messaging icon is another quick and easy way to receive feedback',
              },
              {
                label: 'C. Message Count',
                isCorrect: false,
                feedback:
                  'Having the ability to see how far they’ve progressed through an activity using a progress bar is a timely and appropriate way to give them an idea of how far they’ve come and how far they have left to go.  Being able to see how many unread texts they have by simply glancing at the messaging icon is another quick and easy way to receive feedback',
              },
              {
                label: 'D. A & C',
                isCorrect: true,
                feedback:
                  'Having the ability to see how far they’ve progressed through an activity using a progress bar is a timely and appropriate way to give them an idea of how far they’ve come and how far they have left to go.  Being able to see how many unread texts they have by simply glancing at the messaging icon is another quick and easy way to receive feedback',
              },
            ],
          },
        },
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=1042, maximum-scale=1.0" />
                <link rel="shortcut icon" href="./img/favicon.png" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="photo" />
                <link rel="stylesheet" type="text/css" href="css/visibility-of-system-status-2.css" />
                <style>
                  @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                  @font-face {
                    font-family: "Proxima Nova-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                      format("truetype");
                  }

                  @font-face {
                    font-family: "Helvetica Neue-Bold";
                    font-style: normal;
                    font-weight: 700;
                    src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                  }

                  .component-wrapper a,
                  .screen a {
                    text-decoration: none;
                    display: contents;
                  }

                  .full-width-a {
                    width: 100%;
                  }

                  .full-height-a {
                    height: 100%;
                  }

                  .screen textarea:focus,
                  .screen input:focus {
                    outline: none;
                  }

                  .screen *,
                  .component-wrapper * {
                    box-sizing: border-box;
                  }

                  .screen div {
                    -webkit-text-size-adjust: none;
                  }

                  .container-center-vertical,
                  .container-center-horizontal {
                    pointer-events: none;
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    margin: 0;
                  }

                  .container-center-vertical {
                    align-items: center;
                    height: 100%;
                  }

                  .container-center-horizontal {
                    justify-content: center;
                    width: 100%;
                  }

                  .container-center-vertical > *,
                  .container-center-horizontal > * {
                    pointer-events: auto;
                    flex-shrink: 0;
                  }

                  .component-wrapper,
                  .screen {
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-all;
                    word-break: break-word;
                  }

                  .auto-animated div {
                    opacity: 0;
                    position: absolute;
                    --z-index: -1;
                  }

                  .auto-animated .container-center-vertical,
                  .auto-animated .container-center-horizontal {
                    opacity: 1;
                  }

                  .overlay {
                    position: absolute;
                    opacity: 0;
                    display: none;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                  }

                  .animate-appear {
                    opacity: 0;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 normal forwards;
                  }

                  .animate-disappear {
                    opacity: 1;
                    display: block;
                    animation: reveal 0.3s ease-in-out 1 reverse forwards;
                  }

                  .animate-nodelay {
                    animation-delay: 0s;
                  }

                  @keyframes reveal {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  .align-self-flex-start {
                    align-self: flex-start;
                  }
                  .align-self-flex-end {
                    align-self: flex-end;
                  }
                  .align-self-flex-center {
                    align-self: center;
                  }
                  .valign-text-middle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  }
                  .valign-text-bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                  }
                  input:focus {
                    outline: none;
                  }
                  .component-wrapper,
                  .component-wrapper * {
                    pointer-events: none;
                  }

                  .component-wrapper a *,
                  .component-wrapper a,
                  .component-wrapper input,
                  .component-wrapper video,
                  .component-wrapper iframe,
                  .listeners-active,
                  .listeners-active * {
                    pointer-events: auto;
                  }

                  .hidden,
                  .hidden * {
                    visibility: hidden;
                    pointer-events: none;
                  }

                  .smart-layers-pointers,
                  .smart-layers-pointers * {
                    pointer-events: auto;
                    visibility: visible;
                  }

                  .component-wrapper.not-ready,
                  .component-wrapper.not-ready * {
                    visibility: hidden !important;
                  }

                  .listeners-active-click,
                  .listeners-active-click * {
                    cursor: pointer;
                  }
                </style>
                <meta name="author" content="AnimaApp.com - Design to code, Automated." />
              </head>
              <body style="margin: 0; background: rgba(255, 255, 255, 1)">
                <input type="hidden" id="anPageName" name="page" value="visibility-of-system-status-2" />
                <div class="visibility-of-system-status-2 screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <img alt="" class="table-date-C61RwL" src="/images/img/tabledate@1x.png" />
                  <div class="good-example-C61RwL">
                    <div class="a-good-exa-tem-status-AjWjTr valign-text-middle border-class-1 poppins-normal-white-16px">
                      <span>
                        <span class="span1-KKqPKC">A</span><span class="span2-KKqPKC">&nbsp;</span
                        ><span class="span3-KKqPKC">Good Example</span><span class="span4-KKqPKC"> of a Visible System Status</span>
                      </span>
                    </div>
                  </div>
                  <div class="bad-example-C61RwL">
                    <div class="a-bad-exam-tem-status-DqhExc valign-text-middle border-class-1 poppins-normal-white-16px">
                      <span>
                        <span class="span1-ZQRbnS">A </span><span class="span2-ZQRbnS">Bad Example</span
                        ><span class="span3-ZQRbnS">&nbsp;</span><span class="span4-ZQRbnS">of a Visible System Status</span>
                      </span>
                    </div>
                  </div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4@1x.svg" /></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-xxmNLl">Visibility of System Status </span><span class="span2-xxmNLl">is about </span
                      ><span class="span3-xxmNLl">communication </span><span class="span4-xxmNLl">and</span
                      ><span class="span5-xxmNLl"> transparency</span
                      ><span class="span6-xxmNLl"
                        >.&nbsp;&nbsp;The reason it is so important is because it leads to better decision making for the
                        user.&nbsp;&nbsp;<br /><br />Above, are two examples of the same page.&nbsp;&nbsp;Look at Example
                        2.&nbsp;&nbsp;You cannot tell what has been selected and what hasn’t.&nbsp;&nbsp;It does not give the user a
                        clear idea of what is going on.<br /><br
                      /></span>
                    </div>
                  </div>
                  <div class="scenario-C61RwL">
                    <div class="rectangle-89-ZsPSgu"></div>
                    <div class="the-visibi--for-users-ZsPSgu valign-text-middle border-class-1 poppins-normal-granite-gray-24px">
                      <span>
                        <span class="span1-YBLvq0">Scenario: <br /></span
                        ><span class="span2-YBLvq0"
                          >Imagine yourself driving through the city of San Francisco.&nbsp;&nbsp;You need to get to Daly
                          City.&nbsp;&nbsp;You’re not very familiar with your current surroundings.&nbsp;&nbsp;Consider which map
                          you’d rather use to help you get there.&nbsp;&nbsp;The Good example helps your orient where you
                          are.&nbsp;&nbsp;The Bad example leaves you a little more clueless.&nbsp;&nbsp;This is why it’s very
                          important to orient your user.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="good-example-VMr6Om">
                    <div class="a-good-exa-tem-status-cucEBC valign-text-middle border-class-1 poppins-normal-white-16px">
                      <span>
                        <span class="span1-rdpePV">A</span><span class="span2-rdpePV">&nbsp;</span
                        ><span class="span3-rdpePV">Good Example</span><span class="span4-rdpePV"> of a Visible System Status</span>
                      </span>
                    </div>
                  </div>
                  <img alt="" class="mapsicle-map-C61RwL" src="/images/img/mapsicle-map@2x.jpg" />
                  <img alt="" class="icon-artwork-C61RwL" src="/images/img/icon-artwork@2x.svg" />
                  <div class="bad-example-VMr6Om">
                    <div class="a-bad-exam-tem-status-Ab4kxC valign-text-middle border-class-1 poppins-normal-white-16px">
                      <span>
                        <span class="span1-waxUJz">A </span><span class="span2-waxUJz">Bad Example</span
                        ><span class="span3-waxUJz">&nbsp;</span><span class="span4-waxUJz">of a Visible System Status</span>
                      </span>
                    </div>
                  </div>
                  <img alt="" class="mapsicle-map-VMr6Om" src="/images/img/mapsicle-map-1@2x.jpg" />
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px">
                      As previously discussed, the design should always keep users informed about what is going on through
                      appropriate feedback within a reasonable amount of time.<br /><br />When users know the current system status,
                      they learn the outcome of their prior interactions and determine next steps. Predictable interactions create
                      trust in the product as well as the brand.
                    </div>
                  </div>
                  <div class="conclusion-C61RwL">
                    <div class="message-box-scenario-uxVav3">
                      <div class="rectangle-89-l8o00t"></div>
                      <div class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px">
                        <span>
                          <span class="span1-mWojpO">Conclusion:<br /></span
                          ><span class="span2-mWojpO"
                            >The 7th usability heuristic (flexibility and efficiency of use) is about allowing users to approach
                            tasks in a variety of ways. New users may require guidance in performing their tasks, whereas
                            experienced users can take advantage of accelerators and other secondary features designed to speed up
                            commonly performed actions. Embracing this heuristic means allowing user customization, not being
                            prescriptive about core task steps, and adding unobtrusive accelerators that power users can discover
                            and employ efficiently.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    class="componentl-y-zi-vjson-C61RwL"
                    src="/images/img/-component-lottie-https---assets3-lottiefiles-com-private-files-@1x.gif"
                  />
                  <div class="next-triple-chevron-C61RwL"></div>
                </div>
              </body>
            </html>

          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `<strong>True or False:</strong> In the following graphic. The blue line, ‘Syncing 5 of 21’ and the loading animation circle are ALL examples of “Visibility of System Status.`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q2/Loadingbar.png',
            answers: [
              {
                label: 'True',
                isCorrect: true,
                feedback:
                  'Present feedback to the user as quickly as possible (ideally, immediately).Build trust through open and continuous communication.',
              },
              {
                label: 'False',
                isCorrect: false,
                feedback:
                  'Present feedback to the user as quickly as possible (ideally, immediately).Build trust through open and continuous communication.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/system-world-match.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");
          
                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }
          
                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }
          
                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }
          
                .full-width-a {
                  width: 100%;
                }
          
                .full-height-a {
                  height: 100%;
                }
          
                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }
          
                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }
          
                .screen div {
                  -webkit-text-size-adjust: none;
                }
          
                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }
          
                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }
          
                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }
          
                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }
          
                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }
          
                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }
          
                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }
          
                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }
          
                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }
          
                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }
          
                .animate-nodelay {
                  animation-delay: 0s;
                }
          
                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }
          
                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }
          
                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }
          
                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }
          
                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }
          
                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="system-world-match" />
              <div class="system-world-match screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                <img alt="" class="lahand-pointer-solid-C61RwL" src="/images/img/la-hand-pointer-solid@1x.png" />
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    2. System / World Match
                  </div>
                </div>
                <div class="conclusion-C61RwL">
                  <div class="message-box-scenario-uxVav3">
                    <div class="rectangle-89-l8o00t"></div>
                    <div class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px">
                      <span>
                        <span class="span1-mWojpO">Conclusion:<br /><br /></span
                        ><span class="span2-mWojpO"
                          >Though we’ve broken down the individual parts of this heuristic to understand it further, it’s
                          important to keep in mind that all parts of the principle must work together in order for the experience
                          to succeed. Upholding the second usability heuristic in writing, visual, and interaction design
                          demonstrates that the site knows its users and cares about them.</span
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <div class="group-95-C61RwL">
                  <img alt="" class="rectangle-96-IUHrKR" src="/images/img/rectangle-96@2x.svg" />
                  <img alt="" class="rectangle-97-IUHrKR" src="/images/img/rectangle-97@2x.svg" />
                  <img alt="" class="rectangle-98-IUHrKR" src="/images/img/rectangle-98@2x.svg" />
                  <img alt="" class="rectangle-99-IUHrKR" src="/images/img/rectangle-99@2x.svg" />
                  <img alt="" class="rectangle-100-IUHrKR" src="/images/img/rectangle-100@2x.svg" />
                  <img alt="" class="rectangle-101-IUHrKR" src="/images/img/rectangle-101@2x.svg" />
                  <img alt="" class="x1-iugn-fsi-zw-IUHrKR" src="/images/img/1iugn-fsizw@2x.svg" />
                  <img alt="" class="png-image-2-IUHrKR" src="/images/img/png-image-2@2x.jpg" />
                </div>
                <div class="text-secti--subheader-C61RwL">
                  <div class="what-are-they-saying-SOgkRd valign-text-middle border-class-1">What are they saying?</div>
                </div>
                <img alt="" class="artboard-1-1-C61RwL" src="/images/img/artboard---1-1@1x.jpg" />
                <div class="text-body-paragraph-C61RwL">
                  <div class="body-copy-jdAx62 border-class-1">
                    Most of the times the users are going to search for you on the internet or are going to navigate within your
                    website using language that seems more natural to them.
                  </div>
                </div>
                <div class="text-body-paragraph-VMr6Om">
                  <div class="body-copy-SuXUfK border-class-1">
                    Below are examples of leveraging familiarity with real-world objects and activities <br />Each item has been
                    translated from a real world object to a digital item with the same purpose.
                  </div>
                </div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    The labels and other content
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="leverage-familiarity-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Leverage Familiarity
                  </div>
                </div>
                <div class="text-quote-C61RwL">
                  <div class="quote-DGgCa2 valign-text-middle border-class-1">
                    <span>
                      <span class="span1-OXpQxt"
                        >“In simple terms, the system must speak the user&#39;s language which were familiar to them, rather than
                        system oriented jargons. We always seek familiar words, things, concepts, shapes, images to understand and
                        to make a decision.”<br /></span
                      ><span class="span2-OXpQxt">- Harsh Gorasia uxPlanet.org </span>
                    </span>
                  </div>
                </div>
                <img alt="" class="line-4-C61RwL" src="/images/img/line-4-1@1x.svg" />
                <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-24@1x.svg" /></div>
                <div class="divider-dotted-mzXdH9"><img alt="" class="line-4-qa0SLk" src="/images/img/line-4-24@1x.svg" /></div>
                <div class="text-body-paragraph-mzXdH9">
                  <div class="body-copy-SCxiAB border-class-1">
                    <span class="span1-Yh9UKS"
                      >By using language that is familiar to your user, you create an environment for users that is easier to
                      navigate, understand, and remember how to use.<br />It is important that the language, mental models, and
                      concepts you choose to implement are </span
                    ><span class="span2-Yh9UKS">familiar</span><span class="span3-Yh9UKS"> to your users.<br /></span
                    ><span class="span4-Yh9UKS">It is important to:<br /></span><span class="span5-Yh9UKS">1. </span
                    ><span class="span6-Yh9UKS">Research your user</span
                    ><span class="span7-Yh9UKS">, the wording they use, and design with that in mind<br />2. Choose </span
                    ><span class="span8-Yh9UKS">clear and concise wording</span
                    ><span class="span9-Yh9UKS">
                      that is easy to understand <br />3. If you need to use a word not everyone understands,</span
                    ><span class="span10-Yh9UKS">&nbsp;</span><span class="span11-Yh9UKS">provide a definition</span
                    ><span class="span12-Yh9UKS">
                      to go with it.&nbsp;&nbsp;They should never have to leave the site to look up a word.<br />4. Leverage
                      familiarity with real-world objects and activities - design in a way that </span
                    ><span class="span13-Yh9UKS">reflects material objects people already use.</span>
                  </div>
                </div>
                <div class="section-header-mzXdH9">
                  <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Research you users
                  </div>
                </div>
                <img alt="" class="group-83-C61RwL" src="/images/img/group-83@1x.png" />
                <img alt="" class="group-82-C61RwL" src="/images/img/group-82@1x.png" />
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which of the following elements is <span style='color:red; font-weight: 700'>NOT</span> an example of a digital item created to look like and serve the same purpose as it’s real-life match?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/System_World_Mathc_Q1/Answer-4-UP.png',
            answers: [
              {
                label: 'A. Calendar',
                isCorrect: true,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'B. Clock',
                isCorrect: false,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'C. Battery',
                isCorrect: false,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'D. Exclamation Point',
                isCorrect: true,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which of the following is <span style='color:red; font-weight: 700'>NOT</span> an example of <strong>Match Between System & Real World?</strong>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/SystemWMAnswer.png',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback:
                  'Leveraging familiarity with real-world objects and activities is an effective way to help users understand how to use a product.  If they already know how to use it in the real world, the transition to digital will be more intuitive.',
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

          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/user-control-and-freedom.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:700,500,300,400,600|Noto+Serif:600italic,600");

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="user-control-and-freedom" />
              <div class="user-control-and-freedom screen">
                <div class="rectangle-48-C61RwL"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1"></div>
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1">3. User Control &amp; Freedom</div>
                </div>
                <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4@1x.svg" /></div>
                <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4@1x.svg" /></div>
                <img alt="" class="google-example-C61RwL" src="/images/img/google-example@1x.png" />
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1">
                    <span class="span1-SQKVtq">Example: </span
                    ><span class="span2-SQKVtq"
                      >The freedom to undo any accidental actions. This principle can be best illustrated by the Gmail’s flash
                      message with undo action when we accidentally delete an em</span
                    ><span class="span3-SQKVtq">ail.</span>
                  </div>
                </div>
                <img alt="" class="group-38-C61RwL" src="/images/img/group-38@1x.png" />
                <div class="text-body-paragraph-C61RwL">
                  <div class="text-jdAx62 border-class-1 poppins-normal-black-18px">
                    <span class="span1-cgHpkm">Another Example of User Control: </span
                    ><span class="span2-cgHpkm">Gmail <br /></span
                    ><span class="span3-cgHpkm"><br />Gmail gives users the ability to </span
                    ><span class="span4-cgHpkm">recover</span
                    ><span class="span5-cgHpkm"> from accidently deleting an email. <br /><br />They can </span
                    ><span class="span6-cgHpkm">undo</span
                    ><span class="span7-cgHpkm">
                      the action of deleting an email by finding the email in the “Trash” folder and moving the email back into
                      their “Inbox.” This allows them to recover from their mistake.</span
                    >
                  </div>
                </div>
                <div class="text-body-paragraph-VMr6Om">
                  <div class="text-SuXUfK border-class-1 poppins-normal-black-18px">
                    <span class="span1-i2VNyE">The examples above are some of the UI elements that can help users </span
                    ><span class="span2-i2VNyE">go back to the previous state</span
                    ><span class="span3-i2VNyE"> the system was in. They are another way of giving the user control.</span>
                  </div>
                </div>
                <div class="rectangle-117-C61RwL"></div>
                <img alt="" class="icon-artwork-C61RwL" src="/images/img/icon-artwork@2x.svg" />
                <div class="rectangle-81-C61RwL"></div>
                <div class="cancel-C61RwL valign-text-middle border-class-1">CANCEL</div>
                <img alt="" class="back-button-group-C61RwL" src="/images/img/back-button-group@1x.png" />
                <div class="text-body-paragraph-mzXdH9">
                  <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px">
                    <span class="span1-Yh9UKS"
                      >It is very common for users to make mistakes while using a product. Because of this, it is important that
                      we design ways to help them </span
                    ><span class="span2-Yh9UKS">undo those mistakes</span
                    ><span class="span3-Yh9UKS"
                      >.<br /><br />Imagine a situation that involves something like an accidental deletion of an important file
                      or posting a grammatical mistake on your company’s social media; every system should have a clearly marked
                      “emergency exit” mechanism, that provides users with an easy way to get back after they find themselves in
                      an unwanted state.<br /><br
                    /></span>
                  </div>
                </div>
                <div class="rectangle-115-C61RwL"></div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `All of the following are examples of User Control and Freedom <span style='color: red; font-weight: 700; font-style: italic'>EXCEPT: </span> `,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/User_Control_Q1/AnswerOptions.png',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback:
                  'Remember common UI elements that help the user GO BACK after accidentally going to the wrong page, to undo a mistake, or exit out of a window. One of the options above does not accomplis any of those goals.',
              },
              {
                label: 'B',
                isCorrect: true,
                feedback:
                  'Remember common UI elements that help the user GO BACK after accidentally going to the wrong page, to undo a mistake, or exit out of a window. One of the options above does not accomplis any of those goals.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'Remember common UI elements that help the user GO BACK after accidentally going to the wrong page, to undo a mistake, or exit out of a window. One of the options above does not accomplis any of those goals.',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback:
                  'Remember common UI elements that help the user GO BACK after accidentally going to the wrong page, to undo a mistake, or exit out of a window. One of the options above does not accomplis any of those goals.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which element on the screen provides the user <strong>Control and Freedom</strong> to go back and set up the profile again if they have done that by mistake?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/User_Control_Q2/Phone.png',
            answers: [
              {
                label: 'A. Continue Button',
                isCorrect: false,
                feedback:
                  'User needs complete control and freedom over the entire system. The system should help them to undo an action that happened by mistake. Frustrating usability issues would never help to retain users. That is how it is becoming one of the important points in this topic.',
              },
              {
                label: 'B. Undo Button',
                isCorrect: true,
                feedback:
                  'User needs complete control and freedom over the entire system. The system should help them to undo an action that happened by mistake. Frustrating usability issues would never help to retain users. That is how it is becoming one of the important points in this topic.',
              },
              {
                label: 'C. Check Mark',
                isCorrect: false,
                feedback:
                  'User needs complete control and freedom over the entire system. The system should help them to undo an action that happened by mistake. Frustrating usability issues would never help to retain users. That is how it is becoming one of the important points in this topic.',
              },
              {
                label: 'D. None of the Above',
                isCorrect: false,
                feedback:
                  'User needs complete control and freedom over the entire system. The system should help them to undo an action that happened by mistake. Frustrating usability issues would never help to retain users. That is how it is becoming one of the important points in this topic.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following is an example of <strong>User Control and Freedom</strong>',
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/User_Control_Q3/List.png',
            answers: [
              {
                label: 'A. Save Link',
                isCorrect: false,
                feedback:
                  'Users shouldn’t have to worry or panic about entering the wrong data into a field. Users should have the control and freedom to edit text that was previously submitted.Users must be given a way to fix mistakes they make while interacting with a system.',
              },
              {
                label: 'B. Edit Post',
                isCorrect: false,
                feedback:
                  'Users shouldn’t have to worry or panic about entering the wrong data into a field. Users should have the control and freedom to edit text that was previously submitted.Users must be given a way to fix mistakes they make while interacting with a system.',
              },
              {
                label: 'C. Delete',
                isCorrect: false,
                feedback:
                  'Users shouldn’t have to worry or panic about entering the wrong data into a field. Users should have the control and freedom to edit text that was previously submitted.Users must be given a way to fix mistakes they make while interacting with a system.',
              },
              {
                label: 'D. All of the Above',
                isCorrect: true,
                feedback:
                  'Users shouldn’t have to worry or panic about entering the wrong data into a field. Users should have the control and freedom to edit text that was previously submitted.Users must be given a way to fix mistakes they make while interacting with a system.',
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

          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/consistency-standards.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");
          
                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }
          
                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }
          
                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }
          
                .full-width-a {
                  width: 100%;
                }
          
                .full-height-a {
                  height: 100%;
                }
          
                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }
          
                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }
          
                .screen div {
                  -webkit-text-size-adjust: none;
                }
          
                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }
          
                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }
          
                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }
          
                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }
          
                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }
          
                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }
          
                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }
          
                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }
          
                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }
          
                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }
          
                .animate-nodelay {
                  animation-delay: 0s;
                }
          
                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }
          
                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }
          
                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }
          
                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }
          
                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }
          
                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="consistency-standards" />
              <div class="consistency-standards screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    4. Consistency &amp; Standards
                  </div>
                </div>
                <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-1@1x.svg" /></div>
                <div class="divider-dotted-mzXdH9"><img alt="" class="line-4-qa0SLk" src="/images/img/line-4-3@1x.svg" /></div>
                <img alt="" class="group-58-C61RwL" src="/images/img/group-58@1x.png" />
                <img alt="" class="layout-log-nding-page-C61RwL" src="/images/img/layout-login-landing-page@1x.png" />
                <div class="bad-example-C61RwL valign-text-middle border-class-1">Bad Example</div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Five Ways You Can Achieve Consistency in Your Work
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1">
                    <span>
                      <span class="span1-FXcdop">Example: </span><span class="span2-FXcdop">Sign Up/Log In Layout</span>
                    </span>
                  </div>
                </div>
                <img alt="" class="x28e90e57f8-910d47f2-1-C61RwL" src="/images/img/28e90e57f8ce9814cdfb9de9910d47f2-1@1x.jpg" />
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1 poppins-normal-black-14px">
                    An example of a style guide and branding manual designed for the company, ‘Goodnyt’. Having a style and
                    branding manual can help you make sure your visual elements are consistent throughout your site.
                  </div>
                </div>
                <div class="image-caption-VMr6Om">
                  <div class="the-visibi--for-users-jD5qyr border-class-1 poppins-normal-black-14px">
                    Checkboxes allow more than one option. Therefore, it only makes sense for HTML’s built-in checkboxes to behave
                    that way in functionality as well.
                  </div>
                </div>
                <div class="image-caption-mzXdH9">
                  <div class="the-visibi--for-users-T3UoVK border-class-1 poppins-normal-black-14px">
                    Radio buttons only allow one option. Therefore, it only makes sense for HTML’s built-in radio buttons to
                    behave that way in functionality as well.
                  </div>
                </div>
                <img alt="" class="x7114fe396e-3641cefd-1-C61RwL" src="/images/img/7114fe396ec6670356fbdfc13641cefd-1@1x.jpg" />
                <img alt="" class="f6193b4e6a-e5dc2fe2-1-C61RwL" src="/images/img/f6193b4e6a9c8ac399d8c6c8e5dc2fe2-1@1x.svg" />
                <div class="divider-dotted-QxM5SU"><img alt="" class="line-4-KBGCks" src="/images/img/line-4-1@1x.svg" /></div>
                <div class="text-body-paragraph-C61RwL">
                  <div class="body-copy-jdAx62 border-class-1">
                    The example above shows two diffferent layouts for a login form.&nbsp;&nbsp;Notice how strange the second
                    example looks. Thats because it is not following the external consistency rule of following established
                    industry conventions.
                  </div>
                </div>
                <img alt="" class="screen-sho--at-1147-1-C61RwL" src="/images/img/screen-shot-2020-12-14-at-11-47-1@1x.jpg" />
                <div class="image-caption-QxM5SU">
                  <div class="the-visibi--for-users-qWiSjq border-class-1">Consistent Icons</div>
                </div>
                <img alt="" class="screen-sho--at-1147-2-C61RwL" src="/images/img/screen-shot-2020-12-14-at-11-47-2@1x.jpg" />
                <div class="image-caption-2P4qUJ">
                  <div class="the-visibi--for-users-NA0Qkv border-class-1">Inconsistent Icons</div>
                </div>
                <div class="text-body-paragraph-VMr6Om">
                  <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px-2">
                    <span class="span1-KinY1a"
                      >There are platform and industry conventions that must be followed in order to lesson the cognitive burden
                      on users of deciphering every system they encounter.&nbsp;&nbsp;It is important that when a user is using
                      your platform, they know that their expectations will be met.<br /></span
                    ><span class="span2-KinY1a"><br />Important things to remember:<br /></span
                    ><span class="span3-KinY1a"><br /></span><span class="span4-KinY1a">1. Maintain </span
                    ><span class="span5-KinY1a">internal and external consistency</span
                    ><span class="span6-KinY1a"> with your platform in order to improve learnability.<br /><br />2. Stay </span
                    ><span class="span7-KinY1a">consistent</span
                    ><span class="span8-KinY1a"> within your product(s) (internal consistency).<br /><br />3. Follow </span
                    ><span class="span9-KinY1a">established industry conventions</span
                    ><span class="span10-KinY1a"> (external consistency)<br /></span
                    ><span class="span11-KinY1a"><br /><br /><br /><br /></span>
                  </div>
                </div>
                <div class="text-body-paragraph-mzXdH9">
                  <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px-2">
                    <span class="span1-Yh9UKS">1. Your Choice of Language<br /></span
                    ><span class="span2-Yh9UKS"
                      >Your tone and word choice influence your user’s perception of your product.<br />Scaring your user with a
                      serious and threatening error message when they’re browsing an ecommerce site that exhibits an overall
                      friendly tone will be sure to kill an otherwise good user experience, for instance.<br />When things mean
                      the same or perform the same operation they should be represented in the same way, as is the case in
                      Google&#39;s email facility, Gmail. Based on the organization style of client email applications, Gmail’s
                      folders are labelled &#39;Inbox&#39;, &#39;Drafts&#39;, &#39;Sent Mail&#39;, etc. The language used for
                      these folders shows familiarity and consistency to anyone who have used email applications in the past.<br /></span
                    ><span class="span3-Yh9UKS"><br />2. Apply UI Elements as They are Originally Defined<br /></span
                    ><span class="span4-Yh9UKS"
                      >UI elements that are commonly used, such as message windows, menu bars, icons, scrollbars, and radio
                      buttons, are graphic elements that are typically consistent and </span
                    ><span class="span5-Yh9UKS">have representations that are widely understood by users</span
                    ><span class="span6-Yh9UKS"
                      >. For instance, radio buttons are meant to be used when there is only one option allowed. Checkboxes on the
                      other hand should be used only when the user is allowed more than one option.
                    </span>
                  </div>
                </div>
                <div class="text-body-paragraph-QxM5SU">
                  <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px-2">
                    <span class="span1-t71XpP"
                      >3. Consider Various Well-established Conventions When Deciding on Layout.<br /></span
                    ><span class="span2-t71XpP"
                      >It is certainly debatable whether a designer should “copy” how other people lay out their websites or apps.
                      However, when you design with the user’s perspective and cognition in mind, it is important to understand
                      that humans have a strong memory for where things are visually located on the screen. You should leverage
                      this characteristic by reserving commonly used locations for various graphical elements such as having the
                      logo on the top left, search field on the top right, exit icon on the top right, etc.<br /><br /></span
                    ><span class="span3-t71XpP">4. Apply UI Elements as They are Originally Defined<br /></span
                    ><span class="span4-t71XpP"
                      >Make sure you have the features and functionalities users would expect to see on your site. For example, an
                      airline site should have a ticket-booking system, while a music-sharing site should have a media player.<br /><br /></span
                    ><span class="span5-t71XpP">5. Create Consistent Visual Elements throughout Your Site<br /></span
                    ><span class="span6-t71XpP"
                      >Make sure visual elements are consistent throughout your site. The content, the UI elements, fonts,
                      backgrounds and colors should be in harmony and feel consistent at every touch point. As mentioned above,
                      sticking to technical conventions that exist in the form of HTML5 and CSS3 is one way to keep consistency.
                      Meanwhile, having a branding and style guide to follow helps when faced with design decisions such as colors
                      and fonts.</span
                    >
                  </div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which of the following is the best choice when allowing a User to select <strong>Multiple</strong> items?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Consistency___Standards_Q1/radio-checkbox-functionality_1.png',
            answers: [
              {
                label: 'Check Boxes',
                isCorrect: true,
                feedback:
                  'Users need a component for selecting from a list of options that’s uniform and consistent. Instead of using radio buttons and checkboxes, use check circles for both instead. A check circle combines both the outer shape of a radio button with the checkmark cue of a checkbox.',
              },
              {
                label: 'Radio Buttons',
                isCorrect: false,
                feedback:
                  'Users need a component for selecting from a list of options that’s uniform and consistent. Instead of using radio buttons and checkboxes, use check circles for both instead. A check circle combines both the outer shape of a radio button with the checkmark cue of a checkbox.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which <strong>UI pattern</strong> will cause a user discomfort, and increase decision making time? `,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Consistency___Standards_Q2/HeuQ2.png',
            answers: [
              {
                label: 'South Facing Arrow',
                isCorrect: false,
                feedback:
                  'BBC Comment section displays a down arrow for ‘Highest Rated’ and up arrow for ‘Lowest Rated’. This representation is inconsistent and confusing for your users, as the concept “higher” is generally synonymous with an up arrow and “lower” is synonymous with a down arrow.',
              },
              {
                label: 'North Facing Arrow',
                isCorrect: false,
                feedback:
                  'BBC Comment section displays a down arrow for ‘Highest Rated’ and up arrow for ‘Lowest Rated’. This representation is inconsistent and confusing for your users, as the concept “higher” is generally synonymous with an up arrow and “lower” is synonymous with a down arrow.',
              },
              {
                label: 'Both A & B',
                isCorrect: true,
                feedback:
                  'BBC Comment section displays a down arrow for ‘Highest Rated’ and up arrow for ‘Lowest Rated’. This representation is inconsistent and confusing for your users, as the concept “higher” is generally synonymous with an up arrow and “lower” is synonymous with a down arrow.',
              },
              {
                label: 'None of the Above',
                isCorrect: false,
                feedback:
                  'BBC Comment section displays a down arrow for ‘Highest Rated’ and up arrow for ‘Lowest Rated’. This representation is inconsistent and confusing for your users, as the concept “higher” is generally synonymous with an up arrow and “lower” is synonymous with a down arrow.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/error-prevention.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="error-prevention" />
              <div class="container-center-horizontal">
                <div class="error-prevention screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="activity-intro-text-C61RwL"></div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                  <img alt="" class="screen-sho--at-1142-1-C61RwL" src="/images/img/screen-shot-2020-12-14-at-11-42-1@1x.jpg" />
                  <div class="welcome-C61RwL">
                    <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      5. Error Prevention
                    </div>
                  </div>
                  <div class="section-header-C61RwL">
                    <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      General Guidelines
                    </div>
                  </div>
                  <div class="section-header-VMr6Om">
                    <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Include Helpful Constraints
                    </div>
                  </div>
                  <div class="section-header-mzXdH9">
                    <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Offer Suggestions
                    </div>
                  </div>
                  <img alt="" class="southwest-1-C61RwL" src="/images/img/southwest-1@1x.jpg" />
                  <img alt="" class="amazonsearch-1-C61RwL" src="/images/img/amazonsearch-1@1x.png" />
                  <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1">
                      <span class="span1-xxmNLl"
                        >The goal is to design so well that we prevent errors before they even occur.&nbsp;&nbsp;However, it is
                        important to account for errors by having well designed error messages. It is important to carefully check
                        your products for error-prone conditions.&nbsp;&nbsp;It is also important to give users a confirmation
                        option before making a choice they cannot easily recover from.<br /></span
                      ><span class="span2-xxmNLl"><br /></span
                      ><span class="span3-xxmNLl">There are two types of errors: <br /></span
                      ><span class="span4-xxmNLl"><br /></span
                      ><span class="span5-xxmNLl"
                        >Before discussing how to prevent errors, it’s important to note that there are two types of errors that
                        users make: slips and mistakes. (Both are discussed in much greater detail in Don Norman’s book The Design
                        of Everyday Things.)<br /><br /></span
                      ><span class="span6-xxmNLl">Slips </span
                      ><span class="span7-xxmNLl"
                        >occur when users intend to perform one action, but end up doing another (often similar) action. For
                        example, typing an “i” instead of an “o” counts as a slip; accidentally putting liquid hand soap on one’s
                        toothbrush instead of toothpaste is also a slip. Slips are typically made when users are on autopilot, and
                        when they do not fully devote their attention resources to the task at hand.<br /><br /></span
                      ><span class="span8-xxmNLl">Mistakes</span
                      ><span class="span9-xxmNLl">
                        are made when users have goals that are inappropriate for the current problem or task; even if they take
                        the right steps to complete their goals, the steps will result in an error. For example, if I
                        misunderstood the meaning of the oil-pressure warning light in my car, and thought it was the
                        tire-pressure monitor, no matter how carefully I added air to my tires, it would not fix the issue with my
                        oil pressure. This would be a mistake, since the goal that I was attempting to accomplish was
                        inappropriate for the situation, even though I made no errors in executing my plan. Mistakes are conscious
                        errors, and often (though not exclusively) arise when a user has incomplete or incorrect information about
                        the task, and develops a mental model that doesn’t match how the interface actually works.<br /></span
                      ><span class="span10-xxmNLl"><br /></span>
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1">
                      Slips often happen when users are quite familiar with the goal that they seek to achieve and with the
                      procedure for accomplishing that goal, but accidentally they take the wrong step when trying to achieve it.
                      Often, when executing tasks that are well practiced, we tend to allocate fewer attentional resources, and,
                      as a result, we can “slip” and perform the wrong action. Thus, ironically, slip-type mistakes often are made
                      by expert users who are very familiar with the process at hand; unlike new users who are still learning how
                      to use the system, experts feel that they have mastered the task and need to pay less attention to its
                      actual completion.<br /><br />Strategies for preventing slips are centered around gently guiding users so
                      that they stay on the right path and have fewer chances of slipping. Assist users by providing the needed
                      level of precision, and encourage users to check for errors.
                    </div>
                  </div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1">
                      Slips often happen when users are quite familiar with the goal that they seek to achieve and with the
                      procedure for accomplishing that goal, but accidentally they take the wrong step when trying to achieve it.
                      Often, when executing tasks that are well practiced, we tend to allocate fewer attentional resources, and,
                      as a result, we can “slip” and perform the wrong action. Thus, ironically, slip-type mistakes often are made
                      by expert users who are very familiar withInclude Helpful Constraints<br /><br />While it’s not always a
                      good idea to limit users’ choices, in cases where there are clear rules that define acceptable options, it
                      can be a good strategy to constrain the types of input users can make.<br /><br />For example, booking a
                      flight typically involves selecting the dates of travel, and there are a few rules that govern which dates
                      are acceptable. One of the major rules is that a return flight cannot happen before a departure. If users
                      aren’t limited in the dates they can choose, they may slip and accidentally select a set of dates for their
                      flight that don’t follow the rules. A helpful constraint here will force users to pick a date range that
                      fits. the process at hand; unlike new users who are still learning how to use the system, experts feel that
                      they have mastered the task and need to pay less attention to its actual completion.<br /><br />Strategies
                      for preventing slips are centered around gently guiding users so that they stay on the right path and have
                      fewer chances of slipping. Assist users by providing the needed level of precision, and encourage users to
                      check for errors.
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1">
                      Similarly to how constraints guide users toward the correct use of an interface, suggestions can preempt
                      many slips before the user has the opportunity to make them. On websites that offer thousands of products,
                      search is an effective way of helping users find their proverbial needle in a haystack. However, typing can
                      be inaccurate, especially on touchscreens where there isn’t any tactile (also known as haptic) feedback.
                      While you cannot prevent a user from making typos (which are slip-type errors), you can preempt typos from
                      turning into problems by offering contextual suggestions while the user types.<br /><br />Offering search
                      suggestions has also the benefit of supporting recognition over recall in those situations when the users
                      misremember the name of the product or content they’re looking for.
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement: `Choose the best example of <strong>Error Prevention</strong>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/ErrorPrevention.png',
            answers: [
              {
                label: 'A',
                isCorrect: true,
                feedback:
                  'Despite the fact that the users will always make some mistakes when using a system, it is possible to reduce the errors by designing the system with the user’s experience in mind. The errors can be prevented by helping the user to find their way through the interface of the system.',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback:
                  'Despite the fact that the users will always make some mistakes when using a system, it is possible to reduce the errors by designing the system with the user’s experience in mind. The errors can be prevented by helping the user to find their way through the interface of the system.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'Despite the fact that the users will always make some mistakes when using a system, it is possible to reduce the errors by designing the system with the user’s experience in mind. The errors can be prevented by helping the user to find their way through the interface of the system.',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback:
                  'Despite the fact that the users will always make some mistakes when using a system, it is possible to reduce the errors by designing the system with the user’s experience in mind. The errors can be prevented by helping the user to find their way through the interface of the system.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which elements on the following page help <strong>prevent</strong> user errors?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/Error_Prevention_Q2/Group_84.png',
            answers: [
              {
                label: 'A. Image',
                isCorrect: false,
                feedback:
                  'Prevent mistakes by eliminating your users’ ability to make them.',
              },
              {
                label: 'B. Star Rating',
                isCorrect: false,
                feedback:
                  'Prevent mistakes by eliminating your users’ ability to make them.',
              },
              {
                label: 'C. Inventory Supply',
                isCorrect: true,
                feedback:
                  'Prevent mistakes by eliminating your users’ ability to make them.',
              },
              {
                label: 'D. Wishlist',
                isCorrect: false,
                feedback:
                  'Prevent mistakes by eliminating your users’ ability to make them.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/recognition-over-recall.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="recognition-over-recall" />
              <div class="container-center-horizontal">
                <div class="recognition-over-recall screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="welcome-C61RwL">
                    <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      6. Recognition over Recall
                    </div>
                  </div>
                  <img alt="" class="best5406-1-C61RwL" src="/images/img/best-5406-1@1x.svg" />
                  <img alt="" class="x2014-5-12-amazon-2-1-C61RwL" src="/images/img/2014-5-12-amazon-2-1@1x.jpg" />
                  <div class="divider-dotted-mzXdH9"><img alt="" class="line-4-qa0SLk" src="/images/img/line-4-1@1x.svg" /></div>
                  <img alt="" class="line-4-C61RwL" src="/images/img/line-4-1@1x.svg" />
                  <div class="section-header-C61RwL">
                    <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      HISTORY AND PREVIOUSLY VISITED CONTENT
                    </div>
                  </div>
                  <div class="section-header-VMr6Om">
                    <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      PROMOTE RECOGNITION IN USER INTERFACES
                    </div>
                  </div>
                  <div class="section-header-mzXdH9">
                    <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      RECOGNITION&nbsp;&nbsp;IN INTERFACES
                    </div>
                  </div>
                  <div class="section-header-QxM5SU">
                    <div class="five-ways---your-work-tO655I valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      RECALL IN USER INTERFACES
                    </div>
                  </div>
                  <div class="image-caption-C61RwL">
                    <div class="the-visibi--for-users-mWuPKx border-class-1">
                      <span class="span1-SQKVtq">Example: </span
                      ><span class="span2-SQKVtq">
                        Bing has a link to the user’s search history. The link helps users remember previous searches.</span
                      >
                    </div>
                  </div>
                  <div class="image-caption-VMr6Om">
                    <div class="the-visibi--for-users-jD5qyr border-class-1">
                      <span class="span1-sx37NZ">Example: </span
                      ><span class="span2-sx37NZ">
                        When a user goes back to Amazon.com, the personalized homepage includes a list of recently viewed
                        items.</span
                      >
                    </div>
                  </div>
                  <img alt="" class="x2014-05-12-bing1-1-C61RwL" src="/images/img/2014-05-12-bing1-1@1x.jpg" />
                  <div class="conclusion-C61RwL">
                    <div class="message-box-scenario-uxVav3">
                      <div class="rectangle-89-l8o00t"></div>
                      <div
                        class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px"
                      >
                        <span>
                          <span class="span1-mWojpO">Conclusion:<br /></span
                          ><span class="span2-mWojpO"
                            >The 7th usability heuristic (flexibility and efficiency of use) is about allowing users to approach
                            tasks in a variety of ways. New users may require guidance in performing their tasks, whereas
                            experienced users can take advantage of accelerators and other secondary features designed to speed up
                            commonly performed actions. Embracing this heuristic means allowing user customization, not being
                            prescriptive about core task steps, and adding unobtrusive accelerators that power users can discover
                            and employ efficiently.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      The classic example of recall in an interface is login. When you log in to a site, you have to remember both
                      a username (or email) and a password. You receive very few cues to help you with that memory retrieval:
                      usually, just the site itself. Some people make it easier for themselves by using the same credentials
                      everywhere on the web. Others create a password that is related to the site (e.g., “amazonpassword” for
                      Amazon.com or “buyshoes” on zappos.com) so that they can increase the ability of recall by making the site a
                      stronger cue. And many others just keep their passwords somewhere on their computer or on a piece of paper.
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px">
                      A menu system is the most classic example of a recognition-based user interface: the computer shows you the
                      available commands, and you recognize the one you want. Say, for example, that you’re working with a word
                      processor and want to draw a line through a sentence to indicate that it&#39;s no longer valid. Before the
                      advent of graphical user interfaces you would have had to recall the name of this rarely used formatting
                      feature. A difficult and error-prone task. Now, however, you look at the menu of formatting options and
                      easily recognize the term strikethrough as being the one you want.
                    </div>
                  </div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px">
                      How do you promote recognition? By making information and interface functions visible and easily
                      accessible.<br /><br />An application or a website usually has two components:<br /><br />The chrome or the
                      interface: namely all the buttons, navigation, and other elements that are there to help the user reach his
                      goal<br />The content: the information that the user needs to achieve his goal<br />You can make both the
                      content and the interface easy to remember; both can benefit from designing for recognition rather than
                      recall. We’ll look at a few successful and less successful examples of supporting retrieval of information
                      through recognition.<br />.
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px">
                      Providing access to the pages recently visited and searches performed in the near past can help users resume
                      tasks that they left incomplete and that may have a hard time recalling. Search engines such as Google and
                      Bing often help users retrace their searches by providing past histories.
                    </div>
                  </div>
                  <div class="text-body-paragraph-2P4qUJ">
                    <div class="body-copy-aD3clP border-class-1 poppins-normal-black-18px">
                      There are two types of memory retrieval: recognition and recall [5]. The recognition happens when you easily
                      recognize a person or an object that you’re familiar with. It is a very shallow form of retrieval from
                      memory and it doesn’t require any work. The recall happens when you have to find rarely used information in
                      your memory (names, years, details, etc.). To recall information, people have to activate more memory
                      chunks. Therefore, the recall process is a deeper retrieval and requires more work. (That’s why
                      multiple-choice questions in tests are much easier to answer than open-answer questions.)
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
`,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Is the following image an example of <span style="color: red; font-weight: 700">Recognition</span> or <span style='color: #1b9ba0; font-weight: 700'>Recall?</span>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/RecOverRecQ1.png',
            answers: [
              {
                label: 'Recognition',
                isCorrect: false,
                feedback:
                  'Providing access to the pages recently visited and searches performed in the near past can help users resume tasks that they left incomplete and that may have a hard time recalling.',
              },
              {
                label: 'Recall',
                isCorrect: true,
                feedback:
                  'Providing access to the pages recently visited and searches performed in the near past can help users resume tasks that they left incomplete and that may have a hard time recalling.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Is the following image an example of <span style="color: red; font-weight: 700">Recognition</span> or <span style='color: #1b9ba0; font-weight: 700'>Recall?</span>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Recognition_over_Recall_Q2/Keynote.png',
            answers: [
              {
                label: 'Recognition',
                isCorrect: false,
                feedback:
                  'Users can’t always remember the name of what they recently worked on or opened, so platforms like Keynote and Word provide an option to “open recent” documents in order to help users recall what they worked on.',
              },
              {
                label: 'Recall',
                isCorrect: true,
                feedback:
                  'Users can’t always remember the name of what they recently worked on or opened, so platforms like Keynote and Word provide an option to “open recent” documents in order to help users recall what they worked on.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/flexibility-efficiency.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="flexibility-efficiency" />
              <div class="container-center-horizontal">
                <div class="flexibility-efficiency screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                  <img alt="" class="screen-sho-2-at-802-1-C61RwL" src="/images/img/screen-shot-2020-12-02-at-8-02-1@1x.jpg" />
                  <div class="welcome-C61RwL">
                    <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      7. Flexibility &amp; Efficiency
                    </div>
                  </div>
                  <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="divider-dotted-mzXdH9"><img alt="" class="line-4-qa0SLk" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="divider-dotted-QxM5SU"><img alt="" class="line-4-KBGCks" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="novice-vs--pert-users-C61RwL valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Novice vs. Expert Users
                  </div>
                  <div class="section-header-C61RwL">
                    <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Multiple Methods to Accomplish the Same Task
                    </div>
                  </div>
                  <div class="section-header-VMr6Om">
                    <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Let Users Log In Via Username or Email
                    </div>
                  </div>
                  <div class="section-header-mzXdH9">
                    <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Let Users Drag and Drop Elements
                    </div>
                  </div>
                  <div class="section-header-QxM5SU">
                    <div class="five-ways---your-work-tO655I valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Offer Keyboard Shortcuts for Repetitive Functions
                    </div>
                  </div>
                  <div class="section-header-2P4qUJ">
                    <div class="five-ways---your-work-gMZtlt valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Accelerators Improve Repetitious Usage
                    </div>
                  </div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      Accelerators are secondary ways of accomplishing the same task that function as faster (but typically less
                      obvious) methods. An example of an accelerator is how modern mobile keyboards allow users to perform a swipe
                      gesture over the letters to input text, rather than tapping each individual letter. This gesture is an
                      enhancement: it doesn’t get in the way of a new user (who very likely is not aware of it at all), but can
                      save a lot of time to a seasoned user.
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px">
                      The trick for designing a usable accelerator is making it discoverable (which mobile keyboard gestures lack)
                      but unobtrusive. The classic solution for keyboard-shortcut accelerators is to show them next to the
                      associated commands in a menu or toolbar. A novice user doesn’t have to pay attention to the keyboard
                      shortcut at all, but repeated exposure to it supports learning for experienced users.
                    </div>
                  </div>
                  <div class="rectangle-106-C61RwL"></div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-14px">
                      The iOS keyboard allows swiping through the letters of a word instead of tapping them individually. This
                      gesture is an accelerator: it helps experienced users but does not make typing harder to learn for novices.
                    </div>
                  </div>
                  <img alt="" class="swipe-keyb-rator-sm-1-C61RwL" src="/images/img/swipe-keyboard-accelerator-sm-1@2x.gif" />
                  <div class="conclusion-C61RwL">
                    <div class="message-box-scenario-uxVav3">
                      <div class="rectangle-89-l8o00t"></div>
                      <div
                        class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px"
                      >
                        <span>
                          <span class="span1-mWojpO">Conclusion:<br /></span
                          ><span class="span2-mWojpO"
                            >The 7th usability heuristic (flexibility and efficiency of use) is about allowing users to approach
                            tasks in a variety of ways. New users may require guidance in performing their tasks, whereas
                            experienced users can take advantage of accelerators and other secondary features designed to speed up
                            commonly performed actions. Embracing this heuristic means allowing user customization, not being
                            prescriptive about core task steps, and adding unobtrusive accelerators that power users can discover
                            and employ efficiently.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px">
                      New users often require guidance when using a system and need clear and obvious options because they have
                      not yet developed a mental model of how the system works. Novice users rely heavily on step-by-step wizards
                      or clearly labeled menus, for example, while more-experienced users learn keyboard shortcuts or touchscreen
                      gestures to complete the same task. The expert users could still use the slower, more deliberate methods, of
                      course, but get no benefit in doing so. Instead, they use a faster (but less guided) approach to the task.
                      These faster, alternate methods of completing a frequent action are referred to as accelerators.
                      <br /><br />If a system caters primarily to new users by focusing on being very learnable, repeat users will
                      be slowed down because the system likely includes a lot more step-by-step handholding than a repeat user
                      would need. So, the extra clicks to guide users through a wizard might be necessary to lead someone through
                      a task the first time but extraneous for future repetitions.<br /><br />On the other hand, if a system
                      focused only on efficiency for expert users, it would probably be very difficult to learn. Keyboard
                      combinations or performing a touch gesture are faster to execute than navigating through a sequence of menus
                      to activate the same action, but place a higher burden on the user’s memory. Relying only on them would be
                      like ditching a graphical user interface (GUI) altogether for a command-line one.<br /><br />So, there are
                      two different aspects to making a flexible and efficient system:<br /><br />Multiple methods to accomplish
                      the same task according to one’s preferences<br />Accelerators that don’t slow down inexperienced users, but
                      speed up advanced users
                    </div>
                  </div>
                  <div class="text-body-paragraph-2P4qUJ">
                    <div class="body-copy-aD3clP border-class-1 poppins-normal-black-18px">
                      Shortcuts— unseen by the novice user — speed up the interaction for the expert users such that the system
                      can cater to both inexperienced and experienced users.
                    </div>
                  </div>
                  <img alt="" class="x0fh5-g613a-t-o8-qvl-1-C61RwL" src="/images/img/0-fh5g613aet-o8qvl-1@1x.png" />
                  <img alt="" class="ux-tactic--dit-data-1-C61RwL" src="/images/img/ux-tactic-20-let-users-directly-edit-data-1@1x.png" />
                  <div class="section-header-qr8e7q">
                    <div class="five-ways---your-work-3Bxx2b valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Let Users Directly Edit Data
                    </div>
                  </div>
                  <img
                    class="ux-tactic--or-email-1-C61RwL"
                    src="/images/img/ux-tactic-30-let-users-log-in-via-username-or-email-1@1x.png"
                  />
                  <img
                    class="ux-tactic--unctions-1-C61RwL"
                    src="/images/img/ux-tactic-31-offer-keyboard-shortcuts-for-repetitive-functions-1@1x.png"
                  />
                  <img alt="" class="ux-tactic--elements-1-C61RwL" src="/images/img/ux-tactic-19-let-users-drag-and-drop-elements-1@1x.png" />
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Double tapping on a photo on Instagram causes the “like” heart to fill in automatically.  This is an example of a(n):',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Flexibility___Efficiency_Q1/Instagram.png',
            answers: [
              {
                label: 'Advanced Feature',
                isCorrect: true,
                feedback:
                  'Accelerators are basically hidden shortcuts, that allow users to perform a specific action in an efficient way. They are usually targeted towards the heaviest users of an app. These users need ways to engage with your app quickly and more easily, so accelerators are a good way to achieve that. Accelerators are derived from existing features of your app.',
              },
              {
                label: 'Experienced User',
                isCorrect: false,
                feedback:
                  'Accelerators are basically hidden shortcuts, that allow users to perform a specific action in an efficient way. They are usually targeted towards the heaviest users of an app. These users need ways to engage with your app quickly and more easily, so accelerators are a good way to achieve that. Accelerators are derived from existing features of your app.',
              },
              {
                label: 'Accelerator',
                isCorrect: true,
                feedback:
                  'Accelerators are basically hidden shortcuts, that allow users to perform a specific action in an efficient way. They are usually targeted towards the heaviest users of an app. These users need ways to engage with your app quickly and more easily, so accelerators are a good way to achieve that. Accelerators are derived from existing features of your app.',
              },
              {
                label: 'Multifunction Use',
                isCorrect: false,
                feedback:
                  'Accelerators are basically hidden shortcuts, that allow users to perform a specific action in an efficient way. They are usually targeted towards the heaviest users of an app. These users need ways to engage with your app quickly and more easily, so accelerators are a good way to achieve that. Accelerators are derived from existing features of your app.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'What does creating keyboard shortcuts for repetitive functions give the user in order to execute certain commands? ',
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/flexibilit_efficiency_q2.png',
            answers: [
              {
                label: 'Alternative MEthod',
                isCorrect: true,
                feedback:
                  'Having keyboard shortcuts allows user an additional method to perform certain repetative commands.  It is designed as an alternative method that can accelerate a users speed. It is one of multiple methods the user can use to accomplish a task.',
              },
              {
                label: 'Accessibility',
                isCorrect: false,
                feedback:
                  'Having keyboard shortcuts allows user an additional method to perform certain repetative commands.  It is designed as an alternative method that can accelerate a users speed. It is one of multiple methods the user can use to accomplish a task.',
              },
              {
                label: 'Repetative Usage',
                isCorrect: false,
                feedback:
                  'Having keyboard shortcuts allows user an additional method to perform certain repetative commands.  It is designed as an alternative method that can accelerate a users speed. It is one of multiple methods the user can use to accomplish a task.',
              },
              {
                label: 'Multifunction Use',
                isCorrect: false,
                feedback:
                  'Having keyboard shortcuts allows user an additional method to perform certain repetative commands.  It is designed as an alternative method that can accelerate a users speed. It is one of multiple methods the user can use to accomplish a task.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/aesthetic-minimilism.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="aesthetic-minimilism" />
              <div class="container-center-horizontal">
                <div class="aesthetic-minimilism screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-14px">
                      Google: Nothing More and Nothing Less.
                    </div>
                  </div>
                  <div class="section-header-C61RwL">
                    <div class="ways-to-en-ist-design-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Ways to ensure Aesthetic and minimalist design
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px">
                      Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of
                      information in an interface competes with the relevant units of information and diminishes their relative
                      visibility.<br /><br />This heuristic doesn&#39;t mean you have to use a flat design — it&#39;s about making
                      sure you&#39;re keeping the content and visual design focused on the essentials. Ensure that the visual
                      elements of the interface support the user&#39;s primary goals.
                    </div>
                  </div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-Yh9UKS">1. Show only relevant things<br /></span
                      ><span class="span2-Yh9UKS"
                        >Medium – the blogging platform is a great example of this heuristic. It is essentially like a blank piece
                        of paper and if you need to add anything beyond text, you just need to click on the + sign which is the
                        universal sign for adding something.</span
                      >
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-t71XpP">2. Maintain hierarchy<br /></span
                      ><span class="span2-t71XpP"
                        >If you have created something that needs a lot of content, think of ways to organize it in proper
                        hierarchy and sections. This is an important concept of aesthetic and minimalist design.<br /><br />The
                        websites like Atlassian and Stripe are the perfect examples. They have a lot of aesthetically placed
                        content.</span
                      >
                    </div>
                  </div>
                  <img alt="" class="img22-1-C61RwL" src="/images/img/img22-1@1x.jpg" />
                  <div class="text-quote-C61RwL">
                    <div class="quote-DGgCa2 valign-text-middle border-class-1">
                      <span>
                        <span class="span1-OXpQxt"
                          ><br />Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit
                          of information in a dialogue competes with the relevant units of information and diminishes their
                          relative visibility.&nbsp;&nbsp;<br /></span
                        ><span class="span2-OXpQxt">Jacob Nielson</span>
                      </span>
                    </div>
                  </div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="welcome-C61RwL">
                    <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      8. Aesthetic &amp; Minimalism
                    </div>
                  </div>
                  <div class="image-caption-C61RwL">
                    <div class="the-visibi--for-users-mWuPKx border-class-1">
                      <span class="span1-SQKVtq">Example:&nbsp;&nbsp;</span
                      ><span class="span2-SQKVtq"
                        >An ornate teapot may have excessive decorative elements that can interfere with usability, like an
                        uncomfortable handle or hard to wash nozzle.
                      </span>
                    </div>
                  </div>
                  <img alt="" class="heuristic--ample-80-1-C61RwL" src="/images/img/heuristic-example-80-1@1x.jpg" />
                  <img alt="" class="x1w-as-pgdc--t-xe-ca-1-C61RwL" src="/images/img/1-waspgdcm0dazlypx-txeca-1@1x.jpg" />
                  <img alt="" class="x1v8x5u-fvk--ywo-ffa-1-C61RwL" src="/images/img/1-v8x5ufvkkx54xi3qywoffa-1@1x.svg" />
                  <div class="section-header-VMr6Om"></div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'Which of the following is an example of <strong>aesthetic and minimalist design</strong>?',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Aesthitic_Minimalism_Q1/Group_73.png',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback:
                  'All but one of the examples above are either overcrowded with options and things to look at, or they’re confusing to the user.  One of the options is both easy to understand, simple, and minimalistic.',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback:
                  'All but one of the examples above are either overcrowded with options and things to look at, or they’re confusing to the user.  One of the options is both easy to understand, simple, and minimalistic.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'All but one of the examples above are either overcrowded with options and things to look at, or they’re confusing to the user.  One of the options is both easy to understand, simple, and minimalistic.',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback:
                  'All but one of the examples above are either overcrowded with options and things to look at, or they’re confusing to the user.  One of the options is both easy to understand, simple, and minimalistic.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              'True or False: This Airbnb homepage is an example of Aesthetic & Minimalism.  ',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Aesthitic_Minimalism_Q2/Image_Airbnb_Question_1.png',
            answers: [
              {
                label: 'True',
                isCorrect: true,
                feedback:
                  'Airbnb has designed their homepage with a high signal-to-noise ratio. The main purpose of the user is easily achieved due to use of the minimal and clean design of the search section, which allows users to select their destination, check-in, and add number of guests without distraction.',
              },
              {
                label: 'False',
                isCorrect: false,
                feedback:
                  'Airbnb has designed their homepage with a high signal-to-noise ratio. The main purpose of the user is easily achieved due to use of the minimal and clean design of the search section, which allows users to select their destination, check-in, and add number of guests without distraction.',
              },
            ],
          },
        },
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/aesthetic-minimilism1.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="aesthetic-minimilism1" />
              <div class="container-center-horizontal">
                <div class="aesthetic-minimilism1 screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      Apple provides only the basic information of a feature, hiding additional information under “Learn More”.
                      Check the same product on a retail website to understand the importance of clutter-free experience.
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-KinY1a">3. Keep “Above the fold” in mind<br /></span
                      ><span class="span2-KinY1a"
                        ><br />• The term Above the fold came from conventional printing.<br /><br />• Like the front-page of the
                        newspaper, it is the most important real estate in your interface.<br /><br />• Since most users will see
                        this part, it’s important to keep only the most important things in this section.<br /><br />• In case of
                        a website, Above the fold is the portion of the page visible without scrolling.<br /><br />• Although,
                        with changing user behavior, above the fold is not as relevant today.<br /><br />• But it’s still good to
                        keep it in mind and show only the most important things above the fold.</span
                      >
                    </div>
                  </div>
                  <div class="conclusion-C61RwL">
                    <div class="message-box-scenario-uxVav3">
                      <div class="rectangle-89-l8o00t"></div>
                      <div
                        class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px"
                      >
                        <span>
                          <span class="span1-mWojpO">Conclusion:<br /></span
                          ><span class="span2-mWojpO"
                            >Aesthetic and Minimalist design is not about adding white space. Its all about giving relevant data
                            and removing all the unwanted things. Grab users attention towards the action needed there or give
                            exact data that they want to see. Don&#39;t add irrelevant data and elements to confuse users.</span
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="next-triple-chevron-C61RwL"><img alt="" class="vector-Hx8FI2" src="/images/img/vector-6@2x.svg" /></div>
                  <img alt="" class="x1ls-o-qu-h-e-x6-t2g-1-C61RwL" src="/images/img/1-lsoquhbkhke2gjbe-x6t2g-1@1x.jpg" />
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-Yh9UKS">4. Get rid of the extra mass<br /></span
                      ><span class="span2-Yh9UKS"
                        ><br />Extra mass is created by:<br /><br />• Features that are rarely used<br />• Copy that can be shrunk
                        without losing the meaning<br />• Irrelevant images<br />• Redundant features<br /><br />Remember only a
                        fraction of things are useful on your page.<br /><br />Always ask yourself - if there is one thing that
                        you can remove from your interface, what would it be?</span
                      >
                    </div>
                  </div>
                  <img alt="" class="shopify20a-he20fold-1-C61RwL" src="/images/img/shopify-20above-20the-20fold-1@1x.jpg" />
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `Which of the below elements belong <strong>above the fold</strong> on a webpage?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Aesthitic_Minimalism_Q3/Group_84.png',
            answers: [
              {
                label: 'A. Description',
                isCorrect: false,
                feedback:
                  'It’s important to keep the most important things above the fold.  Of the options above, all are important for the user to see no matter where they are on the page.',
              },
              {
                label: 'B. Logo',
                isCorrect: false,
                feedback:
                  'It’s important to keep the most important things above the fold.  Of the options above, all are important for the user to see no matter where they are on the page.',
              },
              {
                label: 'C. Call to Action',
                isCorrect: false,
                feedback:
                  'It’s important to keep the most important things above the fold.  Of the options above, all are important for the user to see no matter where they are on the page.',
              },
              {
                label: 'All of the Above',
                isCorrect: true,
                feedback:
                  'It’s important to keep the most important things above the fold.  Of the options above, all are important for the user to see no matter where they are on the page.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/error-recovery.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="error-recovery" />
              <div class="container-center-horizontal">
                <div class="error-recovery screen">
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <div class="error-recovery-C61RwL">
                    <a href="javascript:history.back()"
                      ><div class="x-back-Oltj0X valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                    >
                    <div class="welcome-Oltj0X valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      9. Error Recovery
                    </div>
                    <img alt="" class="line-4-Oltj0X" src="/images/img/line-4-1@1x.svg" />
                    <img alt="" class="line-4-YkvUY0" src="/images/img/line-4-1@1x.svg" />
                    <div class="body-copy-Oltj0X border-class-1 poppins-normal-black-18px">
                      Good designs should aim to prevent errors from ever occurring in the first place, but sometimes this goal
                      just isn’t realistic. To best meet the needs of users, designs must also provide ways for users to overcome
                      any errors they encounter when interacting with the system. This can be achieved three different ways.
                      First, users should be informed of errors so they can recognize they made one. Second, the system should
                      diagnose the error for the user by telling them in plain, easy to understand language what went wrong.
                      Third, the user should be given clear directions on how to recover from the error.
                    </div>
                    <img alt="" class="frame-Oltj0X" src="/images/img/frame@1x.png" />
                    <div class="body-copy-YkvUY0 border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-Atnf6P">Recognize<br /></span
                      ><span class="span2-Atnf6P"
                        >The most straightforward way to inform a user of an error is to use an error message. This can be
                        achieved with text alone or with text that is accompanied by a visual cue like a red X for example. The
                        error message must be highly noticeable and visible to the user.</span
                      >
                    </div>
                    <div class="body-copy-aHUrjj border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-7VYIGS">Diagnose<br /></span
                      ><span class="span2-7VYIGS"
                        >The error message must use simple language when describing the problem to the user. Errors should be
                        presented in everyday language, not using code or jargon. The language should also be precise in
                        describing the problem while remaining gentle and non-condemning to the user. The message needs to go
                        beyond just stating that there has been an error. It needs to describe the problem that occured. A common
                        example of this can be seen in the 404 error message.</span
                      >
                    </div>
                    <div class="body-copy-aJiKBD border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-eysx3n">Recover<br /></span
                      ><span class="span2-eysx3n"
                        >Designs need to help users recover from errors by providing actionable ways to fix them. Advice should
                        always be detailed and constructive. The best way to do this is to give the user instructions as well as
                        shortcuts within the error itself so they can recover from the error immediately. Users must be given a
                        way to fix mistakes they make while interacting with a system.<br />One of the most common ways of
                        allowing users to recover from errors is to provide the user with an undo or back button. Internet
                        browsers have back and forward buttons for this purpose. Many types of applications including word
                        processors like Google Docs feature an undo and redo button so users stay in control of their
                        interactions.</span
                      >
                    </div>
                    <img alt="" class="x0tv-b9-eq--bbvygw-i-1-Oltj0X" src="/images/img/0--tvb9eqnnbbvygwi-1@1x.jpg" />
                    <img alt="" class="x0lw-tf6-an-t3-qq-cy-1-Oltj0X" src="/images/img/0-lwtf6anphxt3qqcy-1@1x.svg" />
                    <img alt="" class="x0cc0f7-vg9hp-to-af-1-Oltj0X" src="/images/img/0-cc0f7vg9--hptoaf-1@1x.svg" />
                    <div class="text-image-subtext-Oltj0X">
                      <div class="the-visibi--for-users-tlgKvU border-class-1 poppins-normal-black-14px">
                        A check needs to be done if exception handling is done across the application so that relevant messages
                        can be shown to the user. Empty state messaging, 404, 500, etc are some examples.
                      </div>
                    </div>
                    <div class="message-box-scenario-Oltj0X">
                      <div class="rectangle-89-MoibeY"></div>
                      <div
                        class="the-visibi--for-users-MoibeY valign-text-middle border-class-1 poppins-normal-granite-gray-24px"
                      >
                        <span>
                          <span class="span1-zOk0Er">Conclusion:<br /></span
                          ><span class="span2-zOk0Er"
                            >Users are humans. Humans tend to do mistakes. So we should always keep an eye to avoid those possible
                            mistakes by giving appropriate suggestions and notifications when needed.</span
                          >
                        </span>
                      </div>
                    </div>
                    <div class="divider-dotted-Oltj0X"></div>
                    <div class="text-body-paragraph-Oltj0X"></div>
                  </div>
                  <div class="rectangle-61-C61RwL"></div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement: `Which of the following icons is <strong>commonly</strong> used to allow user to recover from an error?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/Error_Recovery_Q1/Group_74.png',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback:
                  'One of the most common ways of allowing users to recover from errors is to provide the user with an undo or back button. Internet browsers have back and forward buttons for this purpose.',
              },
              {
                label: 'B',
                isCorrect: true,
                feedback:
                  'One of the most common ways of allowing users to recover from errors is to provide the user with an undo or back button. Internet browsers have back and forward buttons for this purpose.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'One of the most common ways of allowing users to recover from errors is to provide the user with an undo or back button. Internet browsers have back and forward buttons for this purpose.',
              },
              {
                label: 'D',
                isCorrect: false,
                feedback:
                  'One of the most common ways of allowing users to recover from errors is to provide the user with an undo or back button. Internet browsers have back and forward buttons for this purpose.',
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
            media: '/images/question_images/ErrorRecov.png',
            answers: [
              {
                label: 'A',
                isCorrect: false,
                feedback:
                  'The user can often recover from an error if they understand what they did wrong. Explaining the exact requirements for the password help the user better understand what kind of password they need to input in order to move to the next screen.',
              },
              {
                label: 'B',
                isCorrect: false,
                feedback:
                  'The user can often recover from an error if they understand what they did wrong. Explaining the exact requirements for the password help the user better understand what kind of password they need to input in order to move to the next screen.',
              },
              {
                label: 'C',
                isCorrect: false,
                feedback:
                  'The user can often recover from an error if they understand what they did wrong. Explaining the exact requirements for the password help the user better understand what kind of password they need to input in order to move to the next screen.',
              },
              {
                label: 'D',
                isCorrect: true,
                feedback:
                  'The user can often recover from an error if they understand what they did wrong. Explaining the exact requirements for the password help the user better understand what kind of password they need to input in order to move to the next screen.',
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
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/help-documentation.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");
          
                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }
          
                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }
          
                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }
          
                .full-width-a {
                  width: 100%;
                }
          
                .full-height-a {
                  height: 100%;
                }
          
                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }
          
                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }
          
                .screen div {
                  -webkit-text-size-adjust: none;
                }
          
                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }
          
                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }
          
                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }
          
                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }
          
                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }
          
                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }
          
                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }
          
                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }
          
                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }
          
                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }
          
                .animate-nodelay {
                  animation-delay: 0s;
                }
          
                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }
          
                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }
          
                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }
          
                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }
          
                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }
          
                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="help-documentation" />
              <div class="container-center-horizontal">
                <div class="help-documentation screen">
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="welcome-C61RwL">
                    <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                      10. Help &amp; Documentation
                    </div>
                  </div>
                  <div class="divider-dotted-C61RwL"><img alt="" class="line-4-xv1xHo" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="divider-dotted-VMr6Om"><img alt="" class="line-4-OrBG3r" src="/images/img/line-4-1@1x.svg" /></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      Websites and applications can offer two types of help: proactive and reactive. Proactive help is provided
                      before the user has encountered a problem, in order to prevent issues. It includes onboarding tutorials and
                      contextual tips. In contrast, reactive help includes materials such as documentation, videos, or even
                      tutorials for those situations when users have an issue and they seek out advice to address
                      it.&nbsp;&nbsp;(Even though some users may consume such materials proactively, it is rare that they do so.)
                    </div>
                  </div>
                  <img alt="" class="heuristic--le-73-82-1-C61RwL" src="/images/img/heuristic-example-73-82-1@1x.jpg" />
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1 poppins-normal-black-18px">
                      Proactive Help<br /><br />The goal of proactive help is to familiarize users with an interface. Proactive
                      help often occurs in three scenarios:<br /><br />New users at first launch of an interface<br />Novice users
                      as they gain proficiency with an interface (this happens over time and is most relevant for complex
                      applications)<br />Existing users encountering a new or redesigned interface<br />Proactive help can be
                      implemented through tutorials, instructional overlays, templates, contextual help, tooltips, and wizards.
                    </div>
                  </div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1 poppins-normal-black-18px">
                      Push and Pull Revelations: Two Types of Proactive Help<br />Proactive help comes in two forms, push
                      revelations and pull revelations. The difference between these relies on whether they are individualized to
                      the user’s context and likely to be related to the current user goal.<br /><br />Push revelations occur when
                      an interface provides assistance or help content that isn’t relevant to the users’ goals.&nbsp;&nbsp;Aptly
                      named, this type of proactive help pushes help content in a relatively random way, with no regard for what
                      the user is trying to do at the moment. The classic example is the tips or instructional overlays that occur
                      when an application is launched and that inform users of new features.
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px">
                      When logging into O’Reilly, a digital library, the system pushed proactive help with an instructional
                      overlay highlighting interface elements.
                    </div>
                  </div>
                  <img alt="" class="oreilly-1-C61RwL" src="/images/img/oreilly-1@1x.png" />
                  <img alt="" class="helpasset-4-1-C61RwL" src="/images/img/helpasset-4-1@1x.jpg" />
                  <img alt="" class="asana-1-C61RwL" src="/images/img/asana-1@1x.svg" />
                  <div class="rectangle-62-C61RwL"></div>
                </div>
              </div>
            </body>
          </html>          
          `,
        },
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./img/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/help-documentation-cont.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:500,300,700,400,600|Noto+Serif:600,600italic");

                @font-face {
                  font-family: "Proxima Nova-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf")
                    format("truetype");
                }

                @font-face {
                  font-family: "Helvetica Neue-Bold";
                  font-style: normal;
                  font-weight: 700;
                  src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                }

                .component-wrapper a,
                .screen a {
                  text-decoration: none;
                  display: contents;
                }

                .full-width-a {
                  width: 100%;
                }

                .full-height-a {
                  height: 100%;
                }

                .screen textarea:focus,
                .screen input:focus {
                  outline: none;
                }

                .screen *,
                .component-wrapper * {
                  box-sizing: border-box;
                }

                .screen div {
                  -webkit-text-size-adjust: none;
                }

                .container-center-vertical,
                .container-center-horizontal {
                  pointer-events: none;
                  display: flex;
                  flex-direction: row;
                  padding: 0;
                  margin: 0;
                }

                .container-center-vertical {
                  align-items: center;
                  height: 100%;
                }

                .container-center-horizontal {
                  justify-content: center;
                  width: 100%;
                }

                .container-center-vertical > *,
                .container-center-horizontal > * {
                  pointer-events: auto;
                  flex-shrink: 0;
                }

                .component-wrapper,
                .screen {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-all;
                  word-break: break-word;
                }

                .auto-animated div {
                  opacity: 0;
                  position: absolute;
                  --z-index: -1;
                }

                .auto-animated .container-center-vertical,
                .auto-animated .container-center-horizontal {
                  opacity: 1;
                }

                .overlay {
                  position: absolute;
                  opacity: 0;
                  display: none;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  position: fixed;
                }

                .animate-appear {
                  opacity: 0;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 normal forwards;
                }

                .animate-disappear {
                  opacity: 1;
                  display: block;
                  animation: reveal 0.3s ease-in-out 1 reverse forwards;
                }

                .animate-nodelay {
                  animation-delay: 0s;
                }

                @keyframes reveal {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                .align-self-flex-start {
                  align-self: flex-start;
                }
                .align-self-flex-end {
                  align-self: flex-end;
                }
                .align-self-flex-center {
                  align-self: center;
                }
                .valign-text-middle {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .valign-text-bottom {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                }
                input:focus {
                  outline: none;
                }
                .component-wrapper,
                .component-wrapper * {
                  pointer-events: none;
                }

                .component-wrapper a *,
                .component-wrapper a,
                .component-wrapper input,
                .component-wrapper video,
                .component-wrapper iframe,
                .listeners-active,
                .listeners-active * {
                  pointer-events: auto;
                }

                .hidden,
                .hidden * {
                  visibility: hidden;
                  pointer-events: none;
                }

                .smart-layers-pointers,
                .smart-layers-pointers * {
                  pointer-events: auto;
                  visibility: visible;
                }

                .component-wrapper.not-ready,
                .component-wrapper.not-ready * {
                  visibility: hidden !important;
                }

                .listeners-active-click,
                .listeners-active-click * {
                  cursor: pointer;
                }
              </style>
              <meta name="author" content="AnimaApp.com - Design to code, Automated." />
            </head>
            <body style="margin: 0; background: rgba(255, 255, 255, 1)">
              <input type="hidden" id="anPageName" name="page" value="help-documentation-cont" />
              <div class="container-center-horizontal">
                <div class="help-documentation-cont screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()"
                    ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                  >
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="text-body-paragraph-C61RwL">
                    <div class="body-copy-jdAx62 border-class-1 poppins-normal-black-18px">
                      Push revelations are often ignored by users because they get in the way: people want to use the interface,
                      not just read about it. This type of help also lacks context, as it’s challenging to remember the pushed
                      information when it is not related to your immediate goals.
                    </div>
                  </div>
                  <img alt="" class="addevent-1-C61RwL" src="/images/img/addevent-1@1x.svg" />
                  <div class="text-image-subtext-C61RwL">
                    <div class="the-visibi--for-users-KvLq2Y border-class-1 poppins-normal-black-14px">
                      Microsoft Word recognized that the user was working on a resume and provided a tip to See resume suggestions
                      from LinkedIn. This is an example of a pull revelation, because it is triggered by the individual user’s
                      behavior, not ‘pushed’ to all users.
                    </div>
                  </div>
                  <div class="text-body-paragraph-VMr6Om">
                    <div class="body-copy-SuXUfK border-class-1">
                      Dovetail, a user research platform, provided timely help content when users opened a data page — a pull
                      revelation. This was a better choice than presenting this content as a push revelation (e.g., at login)
                    </div>
                  </div>
                  <div class="text-body-paragraph-mzXdH9">
                    <div class="body-copy-SCxiAB border-class-1">
                      Dovetail, a user research platform, provided timely help content when users opened a data page — a pull
                      revelation. This was a better choice than presenting this content as a push revelation (e.g., at
                      login).&nbsp;&nbsp; ​​​​​s.
                    </div>
                  </div>
                  <div class="text-body-paragraph-QxM5SU">
                    <div class="body-copy-8ROB5j border-class-1 poppins-normal-black-18px">
                      AddEvent, a calendar event tool, prompted new users with an option to view a tutorial of the interface. This
                      push revelation was appropriately paired with the option to skip the tutorial. However, even if
                      users&nbsp;&nbsp;engaged with the tutorial, they would discover that it was too basic! Instructions to
                      create an event are likely unnecessary because the system follows design standards and is aligned with
                      traditional mental models of how to create a calendar event. Interfaces that provide basic information as
                      proactive help are partly why users skip push revelations. When users engage with them and are shown obvious
                      commands and controls, they may start to perceive all push revelations as low value and not worth engaging
                      with.
                    </div>
                  </div>
                  <div class="text-body-paragraph-2P4qUJ">
                    <div class="body-copy-aD3clP border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-SxnzLU"
                        >Pull revelations show contextual tips that are relevant to the user’s task. They could appear when the
                        mouse is near corresponding controls or when the user has started a corresponding flow. </span
                      ><span class="span2-SxnzLU"
                        >Implementation methods include tooltips, contextual overlays, or wizards. Pull revelations are less
                        likely to be ignored because they provide timely information to help users accomplish a task.<br /><br
                      /></span>
                    </div>
                  </div>
                  <div class="text-body-paragraph-qr8e7q">
                    <div class="body-copy-OF6xV9 border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-53Lcuj">Keep proactive help short and to the point.</span
                      ><span class="span2-53Lcuj">
                        Proactive help distracts users from their core task, so it’s important that the help is timely,
                        informative, and relevant. Write the content from the user’s perspective and consider using verb-oriented
                        phrases.<br /><br /></span
                      ><span class="span3-53Lcuj">Favor pull over push revelations. </span
                      ><span class="span4-53Lcuj"
                        >Make help content accessible, but don’t force users into it.&nbsp;&nbsp;Use push revelations for
                        information that is likely to be needed regardless of context and pull revelations to provide timely help
                        content relevant to the user’s task.</span
                      >
                    </div>
                  </div>
                  <div class="text-body-paragraph-J1YQmd">
                    <div class="body-copy-AkjVFn border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-BHHr0j">Push revelations should be easy to ignore (e.g., by dismissing them). </span
                      ><span class="span2-BHHr0j"
                        >Push revelations stall users from accessing the core interface. Additionally, push revelations can
                        frustrate users that are already familiar with the interface or don’t feel they need help. Anytime you
                        present content in this way, make sure users can skip it.</span
                      >
                    </div>
                  </div>
                  <img alt="" class="mind-1-C61RwL" src="/images/img/mind-1@1x.svg" />
                  <div class="conclusion-C61RwL">
                    <div class="message-box-scenario-uxVav3">
                      <div class="rectangle-89-l8o00t"></div>
                      <div
                        class="the-visibi--for-users-l8o00t valign-text-middle border-class-1 poppins-normal-granite-gray-24px"
                      >
                        <span>
                          <span class="span1-mWojpO">Conclusion:<br /></span
                          ><span class="span2-mWojpO"
                            >Help and documentation are an important element of user experience. They are often necessary, but
                            rarely fun. In general, users don’t like to read, and they particularly don’t like to read
                            instructions. But any kind of trouble in the interaction is also a learning opportunity for the user
                            and thus an opportunity for the designer to impact information and grow the user’s mental model in
                            ways that would not have happened without the impetus of this trouble. Anticipate when your users will
                            need help and provide relevant information that will support them in accomplishing their goal.
                            Supplement your proactive help with a documentation repository that users can refer to as needed. And
                            remember to keep help content brief, to the point, and easy to scan.&nbsp;&nbsp;</span
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                  <img alt="" class="word-1-C61RwL" src="/images/img/word-1@1x.svg" />
                  <img alt="" class="dovetail-1-C61RwL" src="/images/img/dovetail-1@1x.svg" />
                  <div class="section-header-C61RwL">
                    <div class="guidance-f-ctive-help-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Guidance for Providing Proactive Help
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `How is the image below an example of  <strong> Help & Documentation</strong>?`,
            timeLimit: 4,
            type: 'multiple-choice',
            media: '/images/question_images/Help___Documentation_Q1/invisionapp.png',
            answers: [
              {
                label: 'Productive Help',
                isCorrect: false,
                feedback:
                  'Whenever possible, present the documentation in-context right at the moment that the user requires it. Pull revelations show contextual tips that are relevant to the user’s task. Pull revelations provide timely information to help users accomplish a task.',
              },
              {
                label: 'Reactive Help',
                isCorrect: false,
                feedback:
                  'Whenever possible, present the documentation in-context right at the moment that the user requires it. Pull revelations show contextual tips that are relevant to the user’s task. Pull revelations provide timely information to help users accomplish a task.',
              },
              {
                label: 'Push Notification',
                isCorrect: false,
                feedback:
                  'Whenever possible, present the documentation in-context right at the moment that the user requires it. Pull revelations show contextual tips that are relevant to the user’s task. Pull revelations provide timely information to help users accomplish a task.',
              },
              {
                label: 'Pull Revelation',
                isCorrect: true,
                feedback:
                  'Whenever possible, present the documentation in-context right at the moment that the user requires it. Pull revelations show contextual tips that are relevant to the user’s task. Pull revelations provide timely information to help users accomplish a task.',
              },
            ],
          },
        },
        {
          type: 'question',
          contents: {
            problemStatement:
              `All of the following are important to keep in mind when designing for users as they are key to <strong>Help & Documentation <span style='color: red'>EXCEPT:</span></strong>`,
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Help___Documentation_Q2/Group_74.png',
            answers: [
              {
                label: 'A. Upload Option',
                isCorrect: true,
                feedback:
                  'Ensure that the help documentation is easy to search. Whenever possible, present the documentation in context right at the moment that the user requires it.  There should always be a place for users to go to find help with something.',
              },
              {
                label: 'B. Tips',
                isCorrect: false,
                feedback:
                  'Ensure that the help documentation is easy to search. Whenever possible, present the documentation in context right at the moment that the user requires it.  There should always be a place for users to go to find help with something.',
              },
              {
                label: 'C. Information',
                isCorrect: false,
                feedback:
                  'Ensure that the help documentation is easy to search. Whenever possible, present the documentation in context right at the moment that the user requires it.  There should always be a place for users to go to find help with something.',
              },
              {
                label: 'D. Customer Service',
                isCorrect: false,
                feedback:
                  'Ensure that the help documentation is easy to search. Whenever possible, present the documentation in context right at the moment that the user requires it.  There should always be a place for users to go to find help with something.',
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
