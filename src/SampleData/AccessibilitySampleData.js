export const AccessibilitySampleData = {
  name: 'Accessibility',
  topic: 'Accessibility',
  sections: [
    // introduction
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
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/intro.css" />
              <style>
                  @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

                  @font-face {
                      font-family: "Proxima Nova-Bold";
                      font-style: normal;
                      font-weight: 700;
                      src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf") format("truetype");
                  }

                  @font-face {
                      font-family: "Helvetica Neue-Bold";
                      font-style: normal;
                      font-weight: 700;
                      src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                  }

                  @font-face {
                      font-family: "Helvetica Neue-Regular";
                      font-style: normal;
                      font-weight: 400;
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

                  .container-center-vertical>*,
                  .container-center-horizontal>* {
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
              <input type="hidden" id="anPageName" name="page" value="intro" />
              <div class="intro screen">
                  <a href="javascript:history.back()">
                      <div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div>
                  </a>
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <img class="intro-image-C61RwL" src="accessibility_activity/intro-image@1x.png" />
                  <div class="x1-perceiva-4-robust-r-C61RwL border-class-1">
                      1. Perceivable (P)<br />2. Operable (O)<br />3. Understandable (U)<br />4. Robust (R)
                  </div>
                  <img class="line-8-C61RwL" src="accessibility_activity/line-8-1@1x.png" />
                  <img class="line-9-C61RwL" src="accessibility_activity/line-8-1@1x.png" />
                  <img class="line-10-C61RwL" src="accessibility_activity/line-8-1@1x.png" />
                  <img class="line-11-C61RwL" src="accessibility_activity/line-8-1@1x.png" />
                  <div class="most-recen-y-everyone-C61RwL border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-xiWbc1">Most recently updated in June 2018, the Web Accessibility Guidelines (WCAG) 2.1
                          are the current rules by
                          which we design for Accessibility.&nbsp;&nbsp;Created by the World Wide Web Consortium (W3C), the
                          guidelines
                          were created with the aim of making Web content more accessible namely to those with
                          disabilities.<br /><br /></span><span class="span2-xiWbc1">As designers, it is important that we design
                          in a way that enables our products to be more accessible and
                          usable by everyone.&nbsp;&nbsp;<br /></span>
                  </div>
                  <div class="rectangle-90-C61RwL"></div>
                  <div class="rectangle-89-C61RwL"></div>
                  <div class="lesson-obj-avoid-them-C61RwL border-class-1">
                      <span class="span1-q7DJcE">Lesson Objectives<br /></span><span class="span2-q7DJcE">• At the end of this
                          Activity you will be able to: <br />• Define the 4 Principles of Accessibility<br />• Identify
                          The Sub-Categories within each Principle<br />• Recognize Accessibility Issues and Design to avoid
                          them<br /></span>
                  </div>
                  <div class="divider-dotted-C61RwL"><img class="line-4-xv1xHo" src="accessibility_activity/line-4-3@1x.png" /></div>
                  <div class="to-the-4-p-essibility-C61RwL valign-text-middle border-class-1 poppins-normal-white-28px">
                      <span>
                          <span class="span1-466SDy">to the </span><span class="span2-466SDy">4 Principles of Web
                              Accessibility</span><span class="span3-466SDy">.</span>
                      </span>
                  </div>
                  <div class="this-is-no-essibility-C61RwL valign-text-middle border-class-1">
                      <span>
                          <span class="span1-IAmBUU">This is not a test.</span><span class="span2-IAmBUU">
                              The following activity is intended as an introduction to the 4 Principles for Web
                              Accessibility.</span>
                      </span>
                  </div>
                  <div class="introduction-C61RwL valign-text-middle border-class-1">Introduction</div>
                  <div class="divider-dotted-VMr6Om"><img class="line-4-OrBG3r" src="accessibility_activity/line-4-1@1x.png" /></div>
              </div>
          </body>

          </html>
          `,
        },
      ],
    },
    // perceivable
    {
      name: 'Perceivable',
      modules: [
        // html 1
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/perceivable.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="perceivable" />
              <div class="perceivable screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="arrows-C61RwL">
                  <div class="arrows-qrGft6">
                    <img class="line-xyzGYC" src="accessibility_activity/line@1x.png" />
                    <div class="end-circle-xyzGYC"><img class="circle-Y2m0dH" src="accessibility_activity/circle@2x.png" /></div>
                    <div class="end-arrow-xyzGYC"><img class="arrow-V64ixE" src="accessibility_activity/arrow@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-VMr6Om">
                  <div class="arrows-k63xqQ">
                    <img class="line-FIkP59" src="accessibility_activity/line-1@1x.png" />
                    <div class="end-circle-FIkP59"><img class="circle-K5xWjC" src="accessibility_activity/circle-1@2x.png" /></div>
                    <div class="end-arrow-FIkP59"><img class="arrow-pYhnqA" src="accessibility_activity/arrow-1@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-mzXdH9">
                  <div class="arrows-Jq80WT">
                    <img class="line-GjMvlA" src="accessibility_activity/line-2@1x.png" />
                    <div class="end-circle-GjMvlA"><img class="circle-s6JKa3" src="accessibility_activity/circle-2@2x.png" /></div>
                    <div class="end-arrow-GjMvlA"><img class="arrow-yjuGQ2" src="accessibility_activity/arrow-2@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-QxM5SU">
                  <div class="straight-RN3tVf">
                    <img class="x-BbwkIO" src="accessibility_activity/-@1x.png" />
                    <div class="end-arrow-BbwkIO"><img class="arrow-ciuQSm" src="accessibility_activity/arrow-3@2x.png" /></div>
                    <div class="end-circle-BbwkIO"><img class="circle-RprOp1" src="accessibility_activity/circle-3@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-2P4qUJ">
                  <div class="arrows-uEHKQf">
                    <img class="line-V50siW" src="accessibility_activity/line-3@1x.png" />
                    <div class="end-circle-V50siW"><img class="circle-jhlCFz" src="accessibility_activity/circle-4@2x.png" /></div>
                    <div class="end-arrow-V50siW"><img class="arrow-VKDAsf" src="accessibility_activity/arrow-4@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-qr8e7q">
                  <div class="arrows-OoCC4Z">
                    <img class="line-nbGgow" src="accessibility_activity/line-5@1x.png" />
                    <div class="end-circle-nbGgow"><img class="circle-fNDTVt" src="accessibility_activity/circle-5@2x.png" /></div>
                    <div class="end-arrow-nbGgow"><img class="arrow-vvzelS" src="accessibility_activity/arrow-5@2x.png" /></div>
                  </div>
                </div>
                <div class="straight-C61RwL">
                  <img class="x-FLZs8k" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-FLZs8k"><img class="arrow-fH50B9" src="accessibility_activity/arrow-6@2x.png" /></div>
                  <div class="end-circle-FLZs8k"><img class="circle-ezCUt6" src="accessibility_activity/circle-6@2x.png" /></div>
                </div>
                <div class="arrows-J1YQmd">
                  <div class="arrows-xL517Z">
                    <img class="line-77EOdN" src="accessibility_activity/line-6@1x.png" />
                    <div class="end-circle-77EOdN"><img class="circle-M6tyV3" src="accessibility_activity/circle@2x.png" /></div>
                    <div class="end-arrow-77EOdN"><img class="arrow-EpeAAN" src="accessibility_activity/arrow-7@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-a5WPlX">
                  <div class="arrows-xxPnZw">
                    <img class="line-NxraJ0" src="accessibility_activity/line-7@1x.png" />
                    <div class="end-circle-NxraJ0"><img class="circle-if9zBr" src="accessibility_activity/circle-8@2x.png" /></div>
                    <div class="end-arrow-NxraJ0"><img class="arrow-xtxcog" src="accessibility_activity/arrow-8@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-HlKRTo">
                  <div class="arrows-AqJEqU">
                    <img class="line-pZEISt" src="accessibility_activity/line-8@1x.png" />
                    <div class="end-circle-pZEISt"><img class="circle-64h8qX" src="accessibility_activity/circle-9@2x.png" /></div>
                    <div class="end-arrow-pZEISt"><img class="arrow-5TTYTv" src="accessibility_activity/arrow-9@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-VkPPtx">
                  <div class="arrows-CTgWnK">
                    <img class="line-N8VbF9" src="accessibility_activity/line-9@1x.png" />
                    <div class="end-circle-N8VbF9"><img class="circle-GW9AFU" src="accessibility_activity/circle-10@2x.png" /></div>
                    <div class="end-arrow-N8VbF9"><img class="arrow-vNxSfx" src="accessibility_activity/arrow-10@2x.png" /></div>
                  </div>
                </div>
                <div class="straight-VMr6Om">
                  <img class="x-Qrtl8p" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-Qrtl8p"><img class="arrow-9jZgs5" src="accessibility_activity/arrow-11@2x.png" /></div>
                  <div class="end-circle-Qrtl8p"><img class="circle-s3unbu" src="accessibility_activity/circle-11@2x.png" /></div>
                </div>
                <div class="arrows-YWzA7M">
                  <div class="straight-nrrmIW">
                    <img class="x-qIbqgp" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-qIbqgp"><img class="arrow-qoN9IZ" src="accessibility_activity/arrow-12@2x.png" /></div>
                    <div class="end-circle-qIbqgp"><img class="circle-Zc68sm" src="accessibility_activity/circle-12@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-3kIbHG">
                  <div class="straight-4Cnj9O">
                    <img class="x-neAleF" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-neAleF"><img class="arrow-oSre6K" src="accessibility_activity/arrow-12@2x.png" /></div>
                    <div class="end-circle-neAleF"><img class="circle-xXbFhQ" src="accessibility_activity/circle-12@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-a73nmY">
                  <div class="straight-xRxczN">
                    <img class="x-YMmEkW" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-YMmEkW"><img class="arrow-xUkMIC" src="accessibility_activity/arrow-14@2x.png" /></div>
                    <div class="end-circle-YMmEkW"><img class="circle-krlFG6" src="accessibility_activity/circle-14@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-R7WrHk">
                  <div class="straight-IRCBUA">
                    <img class="x-B81KrX" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-B81KrX"><img class="arrow-RoxMqt" src="accessibility_activity/arrow-15@2x.png" /></div>
                    <div class="end-circle-B81KrX"><img class="circle-xMSK42" src="accessibility_activity/circle-15@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-rxvq3k">
                  <div class="straight-VeMWtl">
                    <img class="x-7SuQQW" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-7SuQQW"><img class="arrow-8VdKlP" src="accessibility_activity/arrow-16@2x.png" /></div>
                    <div class="end-circle-7SuQQW"><img class="circle-6riH4Z" src="accessibility_activity/circle-16@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-00LGpa">
                  <div class="straight-nwrCA7">
                    <img class="x-jeV6nn" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-jeV6nn"><img class="arrow-SaugEM" src="accessibility_activity/arrow-17@2x.png" /></div>
                    <div class="end-circle-jeV6nn"><img class="circle-xx2egJ" src="accessibility_activity/circle-17@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-x5xjB4">
                  <div class="straight-hnlRxw">
                    <img class="x-hcxild" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-hcxild"><img class="arrow-1Ee8tN" src="accessibility_activity/arrow-18@2x.png" /></div>
                    <div class="end-circle-hcxild"><img class="circle-jlFycb" src="accessibility_activity/circle-18@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-QL5zbd">
                  <div class="straight-StUVBj">
                    <img class="x-Uc3bIO" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-Uc3bIO"><img class="arrow-bls4LO" src="accessibility_activity/arrow-19@2x.png" /></div>
                    <div class="end-circle-Uc3bIO"><img class="circle-qHaffj" src="accessibility_activity/circle-19@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-rzkej8">
                  <div class="straight-fQfPSS">
                    <img class="x-jTFAAL" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-jTFAAL"><img class="arrow-qNkBU2" src="accessibility_activity/arrow-20@2x.png" /></div>
                    <div class="end-circle-jTFAAL"><img class="circle-xsWxhn" src="accessibility_activity/circle-20@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-eCxQ2N">
                  <div class="straight-UHfHL9">
                    <img class="x-ixr2pu" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-ixr2pu"><img class="arrow-n2KMxq" src="accessibility_activity/arrow-21@2x.png" /></div>
                    <div class="end-circle-ixr2pu"><img class="circle-k6uuW4" src="accessibility_activity/circle-21@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-dMQSMw">
                  <div class="straight-Z3Bd6G">
                    <img class="x-dyxDQU" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-dyxDQU"><img class="arrow-mva8kQ" src="accessibility_activity/arrow-22@2x.png" /></div>
                    <div class="end-circle-dyxDQU"><img class="circle-9l7LTZ" src="accessibility_activity/circle-22@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-MGnoC8">
                  <div class="straight-5lGawT">
                    <img class="x-0aO1VI" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-0aO1VI"><img class="arrow-CwR3YI" src="accessibility_activity/arrow-23@2x.png" /></div>
                    <div class="end-circle-0aO1VI"><img class="circle-IY6ygl" src="accessibility_activity/circle-23@2x.png" /></div>
                  </div>
                </div>
                <div class="straight-mzXdH9">
                  <img class="x-iPQYgu" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-iPQYgu"><img class="arrow-TZ9Exm" src="accessibility_activity/arrow-24@2x.png" /></div>
                  <div class="end-circle-iPQYgu"><img class="circle-C9ICD6" src="accessibility_activity/circle-24@2x.png" /></div>
                </div>
                <div class="arrows-K0Quix">
                  <div class="straight-bsrUp3">
                    <img class="x-N6pqu4" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-N6pqu4"><img class="arrow-Fd1Dgl" src="accessibility_activity/arrow-25@2x.png" /></div>
                    <div class="end-circle-N6pqu4"><img class="circle-igEA4I" src="accessibility_activity/circle-25@2x.png" /></div>
                  </div>
                </div>
                <img class="arrows-oGxSr2" src="accessibility_activity/arrows@1x.png" />
                <div class="arrows-NjZa5V">
                  <img class="line-qTIc1H" src="accessibility_activity/line-10@1x.png" />
                  <div class="end-circle-qTIc1H"><img class="circle-VBxTSi" src="accessibility_activity/circle-25@2x.png" /></div>
                  <div class="end-arrow-qTIc1H"><img class="arrow-L0DJjq" src="accessibility_activity/arrow-26@2x.png" /></div>
                </div>
                <div class="arrows-JNxCmP">
                  <div class="straight-hm6SoA">
                    <img class="x-pflG9e" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-pflG9e"><img class="arrow-5RgZvx" src="accessibility_activity/arrow-27@2x.png" /></div>
                    <div class="end-circle-pflG9e"><img class="circle-m9oihe" src="accessibility_activity/circle-27@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-NVuCL2">
                  <div class="straight-fDlEfQ">
                    <img class="x-Qv573z" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-Qv573z"><img class="arrow-k9saW0" src="accessibility_activity/arrow-27@2x.png" /></div>
                    <div class="end-circle-Qv573z"><img class="circle-Tesj9r" src="accessibility_activity/circle-27@2x.png" /></div>
                  </div>
                </div>
                <div class="straight-QxM5SU">
                  <img class="x-53pGde" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-53pGde"><img class="arrow-gWxjPS" src="accessibility_activity/arrow-29@2x.png" /></div>
                  <div class="end-circle-53pGde"></div>
                </div>
                <div class="arrows-uUmcMD">
                  <img class="x-D6XEqY" src="accessibility_activity/-@2x.png" />
                  <img class="x-jXfIdh" src="accessibility_activity/-@1x.png" />
                  <div class="end-circle-D6XEqY"><img class="circle-PFATD5" src="accessibility_activity/circle-25@2x.png" /></div>
                  <div class="end-arrow-D6XEqY"><img class="arrow-R23veA" src="accessibility_activity/arrow-30@2x.png" /></div>
                </div>
                <div class="arrows-sOxCtc">
                  <img class="x-wVBmTr" src="accessibility_activity/-@2x.png" />
                  <img class="x-RbyElE" src="accessibility_activity/-@1x.png" />
                  <div class="end-circle-wVBmTr"><img class="circle-OfEFdA" src="accessibility_activity/circle-25@2x.png" /></div>
                  <div class="end-arrow-wVBmTr"><img class="arrow-2mtH7D" src="accessibility_activity/arrow-30@2x.png" /></div>
                </div>
                <div class="arrows-V4bTox">
                  <div class="straight-XbotIx">
                    <img class="x-NuvwBY" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-NuvwBY"><img class="arrow-QxU2w2" src="accessibility_activity/arrow-32@2x.png" /></div>
                    <div class="end-circle-NuvwBY"><img class="circle-QPHUNO" src="accessibility_activity/circle-31@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-Pmjxql">
                  <div class="straight-NiiWBv">
                    <img class="x-vFFAA6" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-vFFAA6"><img class="arrow-rSYQDE" src="accessibility_activity/arrow-33@2x.png" /></div>
                    <div class="end-circle-vFFAA6"><img class="circle-6Z2x6E" src="accessibility_activity/circle-32@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-XZCSIE">
                  <div class="straight-k989eE">
                    <img class="x-DRE5oQ" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-DRE5oQ"><img class="arrow-FqyqBX" src="accessibility_activity/arrow-34@2x.png" /></div>
                    <div class="end-circle-DRE5oQ"><img class="circle-xZxeJV" src="accessibility_activity/circle-33@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-fFhl4P">
                  <div class="straight-4bBlGY">
                    <img class="x-QgopHv" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-QgopHv"><img class="arrow-Y8Vu52" src="accessibility_activity/arrow-34@2x.png" /></div>
                    <div class="end-circle-QgopHv"><img class="circle-x58iqR" src="accessibility_activity/circle-33@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-xsJokX">
                  <div class="straight-U97laX">
                    <img class="x-hvSJxm" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-hvSJxm"><img class="arrow-8HDS7L" src="accessibility_activity/arrow-34@2x.png" /></div>
                    <div class="end-circle-hvSJxm"><img class="circle-EWg7nJ" src="accessibility_activity/circle-33@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-AViU91">
                  <img class="x-Wxfvkr" src="accessibility_activity/-@2x.png" />
                  <img class="x-hqJgpG" src="accessibility_activity/-@1x.png" />
                  <div class="end-circle-Wxfvkr"><img class="circle-HxPi7R" src="accessibility_activity/circle-25@2x.png" /></div>
                  <div class="end-arrow-Wxfvkr"><img class="arrow-9KOfAI" src="accessibility_activity/arrow-25@2x.png" /></div>
                </div>
                <div class="arrows-4yyt9N">
                  <div class="straight-w47nXc">
                    <img class="x-vxIQIV" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-vxIQIV"><img class="arrow-XiQxux" src="accessibility_activity/arrow-38@2x.png" /></div>
                    <div class="end-circle-vxIQIV"><img class="circle-WilVx5" src="accessibility_activity/circle-37@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-4XW1xH">
                  <div class="straight-Ku5SWk">
                    <img class="x-d1MhVV" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-d1MhVV"><img class="arrow-R2adEB" src="accessibility_activity/arrow-38@2x.png" /></div>
                    <div class="end-circle-d1MhVV"><img class="circle-wWjyMV" src="accessibility_activity/circle-37@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-ucCvyV">
                  <div class="straight-BvRG2a">
                    <img class="x-pNWzPk" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-pNWzPk"><img class="arrow-yZP1J2" src="accessibility_activity/arrow-27@2x.png" /></div>
                    <div class="end-circle-pNWzPk"><img class="circle-EBBky8" src="accessibility_activity/circle-27@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-6y9Vs4">
                  <div class="straight-h7vOa8">
                    <img class="x-xDNiYj" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-xDNiYj"><img class="arrow-pBJTIg" src="accessibility_activity/arrow-27@2x.png" /></div>
                    <div class="end-circle-xDNiYj"><img class="circle-ycr7Zt" src="accessibility_activity/circle-27@2x.png" /></div>
                  </div>
                </div>
                <div class="arrows-fxLfJc">
                  <div class="straight-vkgCvA">
                    <img class="x-xx5tTK" src="accessibility_activity/-@2x.png" />
                    <div class="end-arrow-xx5tTK"><img class="arrow-6jc168" src="accessibility_activity/arrow-27@2x.png" /></div>
                    <div class="end-circle-xx5tTK"><img class="circle-Z4uaac" src="accessibility_activity/circle-27@2x.png" /></div>
                  </div>
                </div>
                <div class="straight-2P4qUJ">
                  <img class="x-8k6xAd" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-8k6xAd"><img class="arrow-gwgRCl" src="accessibility_activity/arrow-43@2x.png" /></div>
                  <div class="end-circle-8k6xAd"><img class="circle-uwJica" src="accessibility_activity/circle-42@2x.png" /></div>
                </div>
                <div class="straight-qr8e7q">
                  <img class="x-XOxNi0" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-XOxNi0"><img class="arrow-DkpVx9" src="accessibility_activity/arrow-44@2x.png" /></div>
                  <div class="end-circle-XOxNi0"><img class="circle-DDFxpg" src="accessibility_activity/circle-43@2x.png" /></div>
                </div>
                <div class="straight-J1YQmd">
                  <img class="x-fm9YjI" src="accessibility_activity/-@1x.png" />
                  <div class="end-arrow-fm9YjI"><img class="arrow-oB0zZ2" src="accessibility_activity/arrow-44@2x.png" /></div>
                  <div class="end-circle-fm9YjI"><img class="circle-EdSul4" src="accessibility_activity/circle-43@2x.png" /></div>
                </div>
                <div class="straight-a5WPlX">
                  <img class="x-2afLls" src="accessibility_activity/-@2x.png" />
                  <div class="end-arrow-2afLls"><img class="arrow-FmLjec" src="accessibility_activity/arrow-46@2x.png" /></div>
                  <div class="end-circle-2afLls"><img class="circle-AvwTxe" src="accessibility_activity/circle-45@2x.png" /></div>
                </div>
                <div class="end-arrow-C61RwL"></div>
                <div class="text-VMr6Om border-class-1 poppins-normal-black-18px">
                  • Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other
                  forms people need, such as large print, braille, speech, symbols or simpler language.<br /><br />• Time-based
                  Media: Provide alternatives for time-based media.<br /><br />• Adaptable: Create content that can be presented
                  in different ways (for example simpler layout) without losing information or structure.<br /><br />• Distinguishable:
                  Make it easier for users to see and hear content including separating foreground from background.
                </div>
                <div class="the-visibi--for-users-C61RwL valign-text-middle border-class-1 poppins-normal-black-18px">
                  Perceivability means the user can identify content and interface elements by means of the senses.&nbsp;&nbsp;For
                  many users, this means perceiving a system primarily visually, while for others, perceivability may be a matter
                  of sound or touch. New and emerging technologies may include sensory cues for smell and taste; these would also
                  be considered examples of &#34;perceivable&#34; technology.
                </div>
                <div class="the-visibi--for-users-VMr6Om valign-text-middle border-class-1 poppins-normal-black-18px">
                  Text descriptions give anyone with hearing loss or in an environment where the hearing is impaired, the ability
                  to understand the information conveyed in the video. Providing text descriptions for images in the form of Alt
                  attributes makes the content available to assistive tech such as screen readers and braille displays.
                </div>
                <div class="the-visibi--for-users-mzXdH9 border-class-1 poppins-normal-black-18px-2">
                  <span class="span1-D0bpM7"
                    >Put broadly, time-based media is anything that&#39;s embedded on a website that: moves, makes noise, displays
                    content synchronized with another element of the site, or displays content that changes without user input.
                    Certain accessibility considerations need to be made when building content so that everyone has access to
                    content regardless of their level of ability.<br /><br /></span
                  ><span class="span2-D0bpM7">Content is considered time-based media if it&#39;s:<br /></span
                  ><span class="span3-D0bpM7"
                    >• Audio-only<br />• Video-only<br />• A combination audio/video<br />• Audio and or video combined with an
                    interaction.<br /><br /></span
                  ><span class="span4-D0bpM7">Video and audio content should contain at least one of the following:<br /></span
                  ><span class="span5-D0bpM7"
                    >• Closed Captioning<br />• Open Captioning<br />• Audio Transcripts<br />• Video Transcripts</span
                  >
                </div>
                <div class="the-visibi--for-users-QxM5SU border-class-1 poppins-normal-black-18px">
                  Create content that can be presented in different ways (for example simpler layout) without losing information
                  or structure.<br /><br />Be clear in writing; avoid jargon and idioms.
                </div>
                <div class="the-visibi--for-users-2P4qUJ border-class-1 poppins-normal-black-18px">
                  Create content that can be presented in different ways (for example simpler layout) without losing information
                  or structure.
                </div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Perceivable Guidelines
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Text Alternatives
                  </div>
                </div>
                <div class="section-header-mzXdH9">
                  <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Time Based Media
                  </div>
                </div>
                <div class="section-header-QxM5SU">
                  <div class="five-ways---your-work-tO655I valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Adaptable
                  </div>
                </div>
                <div class="section-header-2P4qUJ">
                  <div class="five-ways---your-work-gMZtlt valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Distinguishable
                  </div>
                </div>
                <img class="perceivable-image-C61RwL" src="accessibility_activity/perceivable-image@1x.png" />
                <img class="screen-sho--at-1021-1-C61RwL" src="accessibility_activity/screen-shot-2020-12-25-at-10-21-1@1x.jpg" />
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1 poppins-normal-black-14px">
                    <span class="span1-SQKVtq">Example: </span
                    ><span class="span2-SQKVtq"
                      >When writing HTMl alt text is addes to the code. Designers need to account for this content.</span
                    >
                  </div>
                </div>
                <div class="image-caption-VMr6Om">
                  <div class="the-visibi--for-users-jD5qyr border-class-1 poppins-normal-black-14px">
                    <span class="span1-sx37NZ">Source: </span
                    ><span class="span2-sx37NZ"
                      >Source: WCAG Mobile accessibility mapping: Consistent layout , WCAG 2.1: Info and relationships</span
                    >
                  </div>
                </div>
                <div class="image-caption-mzXdH9">
                  <div class="the-visibi--for-users-T3UoVK border-class-1 poppins-normal-black-14px">
                    <span class="span1-ptoeQD">Example: </span
                    ><span class="span2-ptoeQD"
                      >The UK Government websites for public service are usually very good at this. Links are presented in a
                      common colour and are underlined on hover state.
                    </span>
                  </div>
                </div>
                <div class="conclusion-C61RwL">
                  <div class="message-box-scenario-uxVav3">
                    <div class="rectangle-89-l8o00t"></div>
                    <div class="the-visibi--for-users-l8o00t valign-text-middle border-class-1">
                      <span>
                        <span class="span1-mWojpO">EXAMPLE:<br /></span
                        ><span class="span2-mWojpO"
                          >A training film shows employees how to use a new piece of equipment. It involves a person talking
                          throughout while they demonstrate the operation. The screenplay used to create the training film is used
                          as a starting point. It is then edited and corrected to match the dialogue etc. The film and the
                          resulting alternative for time-based media are then made available on the company Web site. Employees
                          can then use either or both to learn how to use the machine.</span
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <img class="x0yno3-lx1t--lxxz7-p-1-C61RwL" src="accessibility_activity/0-yno3lx1ttxlxxz7p-1@1x.png" />
                <img class="x1v3-q-ducp-jns7-q-1-1-C61RwL" src="accessibility_activity/1-v3qducpnlpwr91sbbjns7q-1-1@1x.png" />
                <img class="vector-C61RwL" src="accessibility_activity/vector-18@2x.png" />
                <div class="divider-dotted-C61RwL"><img class="line-4-xv1xHo" src="accessibility_activity/line-4-4@1x.png" /></div>
                <div class="welcome-C61RwL">
                  <div class="x1-perceivable-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    1. Perceivable
                  </div>
                </div>
              </div>
            </body>
          </html>
            `,
        },
        // question 1
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'Which of the following options is NOT a way to make time-based media more accessible to a visually impaired user who is using a screen reader, or a hearing impaired user visiting the site?',
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
              // OTHER ANSWERS
            ],
          },
        },
        // question 2
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'
            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // html 2
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>

          <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/perceivable-color-contrast.css" />
              <style>
                  @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

                  @font-face {
                      font-family: "Proxima Nova-Bold";
                      font-style: normal;
                      font-weight: 700;
                      src: url("https://anima-uploads.s3.amazonaws.com/5c5874afb72544000ad1576b/ProximaNova-Reg.ttf") format("truetype");
                  }

                  @font-face {
                      font-family: "Helvetica Neue-Bold";
                      font-style: normal;
                      font-weight: 700;
                      src: url("https://anima-uploads.s3.amazonaws.com/5ad90c8b588afb000b501a89/HelveticaNeue.ttf") format("truetype");
                  }

                  @font-face {
                      font-family: "Helvetica Neue-Regular";
                      font-style: normal;
                      font-weight: 400;
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

                  .container-center-vertical>*,
                  .container-center-horizontal>* {
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
              <input type="hidden" id="anPageName" name="page" value="perceivable-color-contrast" />
              <div class="perceivable-color-contrast screen">
                  <div class="rectangle-48-C61RwL border-class-2"></div>
                  <a href="javascript:history.back()">
                      <div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div>
                  </a>
                  <div class="rectangle-61-C61RwL"></div>
                  <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                  <div class="text-VMr6Om border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-fIikK1">• </span><span class="span2-fIikK1">Text</span><span class="span3-fIikK1">: The
                          WCAG Success Criterion for Color Contrast calls for a Minimum of </span><span
                          class="span4-fIikK1">4.5:1</span><span class="span5-fIikK1">
                          ratio for the visual presentation of text and images of text.&nbsp;&nbsp;This rule applies to all text
                          and
                          images of text that are smaller than 18 pt or 14 pt bold.<br /><br />• </span><span
                          class="span6-fIikK1">Large-scale text</span><span class="span7-fIikK1"> and </span><span
                          class="span8-fIikK1">images of large-scale text</span><span class="span9-fIikK1">: should have a minimum
                          contrast ratio of </span><span class="span10-fIikK1">3:1. </span><span class="span11-fIikK1">
                          Large-scale text is text that is 18 pt or larger, or 14 pt bold and larger.<br /><br />• </span><span
                          class="span12-fIikK1">Logo-Type</span><span class="span13-fIikK1">: Text that is part of a logo or brand
                          name has </span><span class="span14-fIikK1">no contrast requirement.<br /><br /></span><span
                          class="span15-fIikK1">• </span><span class="span16-fIikK1">Incidentals</span><span
                          class="span17-fIikK1">: Text or images of text that are part of an inactive user interface component,
                          that are pure decoration,
                          that are not visible to anyone, or that are part of a picture that contains significant other visual
                          content,
                          have </span><span class="span18-fIikK1">no contrast requirement.<br /></span><span
                          class="span19-fIikK1">&nbsp;</span>
                  </div>
                  <div class="the-visibi--for-users-C61RwL valign-text-middle border-class-1 poppins-normal-black-18px">
                      Part of making a website perceivable to the visually impaired is following strict guidelines when it comes
                      to
                      Color Contrast.&nbsp;&nbsp;Contrast, in this sense of the word, is a measure of the difference in perceived
                      luminance between 2 colors.&nbsp;&nbsp;Luminance is the amount of light in a color.
                  </div>
                  <div class="the-visibi--for-users-VMr6Om valign-text-middle border-class-1 poppins-normal-black-18px">
                      Below you will see a bad example (on the left) and a good example (on the right) of color contrast ratios
                      for
                      normal text.
                  </div>
                  <div class="the-visibi--for-users-mzXdH9 valign-text-middle border-class-1 poppins-normal-black-18px">
                      Below is an example of large-scale text that meets the minimum ratio for large-scale text.&nbsp;&nbsp;Notice
                      the
                      pink color has a bit more luminance than that of the 17pt text in example 2.&nbsp;&nbsp;This is more
                      acceptable
                      because larger text is easier to see.
                  </div>
                  <div class="the-visibi--for-users-QxM5SU valign-text-middle border-class-1 poppins-normal-black-18px">
                      Below are some examples of incidentals and logotypes.&nbsp;&nbsp;They are not required to meet any color
                      contrast standards.
                  </div>
                  <div class="the-visibi--for-users-2P4qUJ valign-text-middle border-class-1">
                      By making the text a little darker, and making the background white, we were able to just meet the minimum
                      for
                      AA standards.
                  </div>
                  <div class="section-header-C61RwL">
                      <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                          Color Contrast Guidelines
                      </div>
                  </div>
                  <div class="section-header-VMr6Om">
                      <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                          Color Contrast For Text
                      </div>
                  </div>
                  <div class="color-cont-scale-text-C61RwL valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                      Color Contrast For Large-Scale Text
                  </div>
                  <div class="section-header-mzXdH9">
                      <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                          Incidentals and Logotypes
                      </div>
                  </div>
                  <div class="image-placeholder-C61RwL"></div>
                  <div class="x17-pt-helv-x-b3-b3-b3-C61RwL valign-text-middle border-class-1">
                      17 pt Helvetica Neue font in fuchsia Hex #FF00FF<br />on a background with the Hex #B3B3B3
                  </div>
                  <div class="image-placeholder-VMr6Om"></div>
                  <div class="this-text--hex-ffffff-C61RwL valign-text-middle border-class-1">
                      This text is 17 pt Helvetica Neue with a regular font weight, in Hex #CC21CC on a white background (Hex
                      #FFFFFF)
                  </div>
                  <div class="paragraph-C61RwL border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-AIuAkp">Example 1 (Does Not Meet AA Minimum)<br /></span><span
                          class="span2-AIuAkp"><br />The example above has a contrast ratio of </span><span
                          class="span3-AIuAkp">1.49:1<br /></span>
                  </div>
                  <div class="paragraph-VMr6Om border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-APjJZp">Example 2 (Meets AA Minimum)<br /></span><span class="span2-APjJZp"><br />The
                          above has a contrast ratio of </span><span class="span3-APjJZp">4.5:1</span><span class="span4-APjJZp">
                          exactly</span>
                  </div>
                  <div class="incidental-C61RwL valign-text-middle border-class-1">Incidental</div>
                  <div class="logotype-C61RwL valign-text-middle border-class-1">Logotype</div>
                  <div class="slackrgb-2-C61RwL">
                      <img class="vector-HnZ9Ub" src="accessibility_activity/vector-4@2x.png" />
                      <img class="vector-1gbtub" src="accessibility_activity/vector-5@2x.png" />
                      <img class="vector-x5HsnM" src="accessibility_activity/vector-6@2x.png" />
                      <img class="vector-UcAU16" src="accessibility_activity/vector-7@2x.png" />
                      <img class="vector-kAwM0S" src="accessibility_activity/vector-8@2x.png" />
                      <img class="vector-s9THO7" src="accessibility_activity/vector-9@2x.png" />
                      <img class="vector-4xMZ0u" src="accessibility_activity/vector-10@2x.png" />
                      <img class="vector-nMSbRE" src="accessibility_activity/vector-11@2x.png" />
                      <img class="vector-yXgpL3" src="accessibility_activity/vector-12@2x.png" />
                      <img class="vector-c3y5OG" src="accessibility_activity/vector-13@2x.png" />
                      <img class="vector-eDjr0x" src="accessibility_activity/vector-14@2x.png" />
                      <img class="vector-Kw3YKU" src="accessibility_activity/vector-15@2x.png" />
                      <img class="vector-v1ZexB" src="accessibility_activity/vector-16@2x.png" />
                  </div>
                  <div class="rectangle-44-C61RwL"></div>
                  <div class="color-cont-le-image-1-C61RwL">
                      <img class="incidental-text-image-jAorUh" src="accessibility_activity/incidental-text-image@2x.png" />
                  </div>
                  <img class="vector-C61RwL" src="accessibility_activity/vector@2x.png" />
                  <img class="color-contrast-image-C61RwL" src="accessibility_activity/color-contrast-image@2x.png" />
                  <div class="image-placeholder-mzXdH9"></div>
                  <div class="this-text--hex-ffffff-VMr6Om valign-text-middle border-class-1">
                      This text is 18 pt Helvetica Neue with a regular font weight, in Hex #FF00FF on a white background (Hex
                      #FFFFFF)
                  </div>
                  <div class="paragraph-mzXdH9 border-class-1 poppins-normal-black-18px-2">
                      <span class="span1-CSwWdx">Example 3 (Meets AA Minimum)<br /></span><span class="span2-CSwWdx"><br />The
                          above has a contrast ratio of </span><span class="span3-CSwWdx">3.13:1</span>
                  </div>
                  <div class="welcome-C61RwL">
                      <div class="color-contrast-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                          Color Contrast
                      </div>
                  </div>
                  <div class="divider-dotted-C61RwL"><img class="line-4-xv1xHo" src="accessibility_activity/line-4-3@1x.png" /></div>
              </div>
          </body>

          </html>
          `,
        },
        // question 3
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'Which of the following options is NOT a way to make time-based media more accessible to a visually impaired user who is using a screen reader, or a hearing impaired user visiting the site?',
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
              // OTHER ANSWERS
            ],
          },
        },
        // question 4
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'
            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
      ],
    },
    // operable
    {
      name: 'Operable',
      modules: [
        // html 1
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/operable.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="operable" />
              <div class="operable screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="the-visibi--for-users-C61RwL border-class-1 poppins-normal-black-18px">
                  Many users who have disabilities need more time to complete tasks than the majority of users: they may take
                  longer to physically respond, they may take longer to read things, they may have low vision and take longer to
                  find things or to read them, or they may be accessing content through an assistive technology that requires more
                  time. This guideline focuses on ensuring that users are able to complete the tasks required by the content with
                  their own individual response times. The primary approaches deal with eliminating time constraints or providing
                  users enough additional time to allow them to complete their tasks. Exceptions are provided for those cases
                  where this is not possible.
                </div>
                <div class="the-visibi--for-users-VMr6Om border-class-1 poppins-normal-black-18px">
                  There are many stereotypical keyboard shortcuts in use. It is good practice to test your site only using a
                  keyboard to see how your site perform under such a test.
                </div>
                <div class="the-visibi--for-users-mzXdH9 border-class-1 poppins-normal-black-18px">
                  The tabs should go in a logical reading order.&nbsp;&nbsp; Observe the diagram above.&nbsp;&nbsp;The order goes
                  left to right, top to bottom for the most part, with more important information taking priority over smaller
                  navigation. For example, the main content (#9) is ordered before left (#10 &amp; #11) and right navigation (#12
                  &amp; #13) in the body of this web page.
                </div>
                <img class="operable-k-ible-image-C61RwL" src="accessibility_activity/operable-keyboard-accessible-image@1x.jpg" />
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Enough Time
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Keyboard Accessible
                  </div>
                </div>
                <div class="section-header-mzXdH9">
                  <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Keyboard-only Tab Order Guidelines
                  </div>
                </div>
                <img class="operable-t-rder-image-C61RwL" src="accessibility_activity/operable-tab-order-image@1x.png" />
                <div class="the-visibi--for-users-QxM5SU valign-text-middle border-class-1 poppins-normal-black-18px">
                  Operability means that a user can successfully use controls, buttons, navigation, and other necessary
                  interactive elements.&nbsp;&nbsp;For many users, this means identifying an interface control visually, and then
                  clicking, tapping, or swiping.&nbsp;&nbsp;For other users, using a computer keyboard or voice commands may be
                  the only means by which they can operate and control the interface.
                </div>
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1">
                    Apple’s AssistiveTouch provides alternative navigation methods and gesture controls.
                  </div>
                </div>
                <img class="operable-i-image-left-C61RwL" src="accessibility_activity/operable-iphone-image--left-@2x.png" />
                <img class="operable-i-mage-right-C61RwL" src="accessibility_activity/operable-iphone-image--right-@2x.png" />
                <div class="text-VMr6Om border-class-1 poppins-normal-black-18px">
                  • Keyboard Accessible: Make all functionality available from a keyboard.<br /><br />• Enough Time: Provide users
                  enough time to read and use content.<br /><br />• Seizures and Physical Reactions: Do not design content in a
                  way that is known to cause seizures or physical reactions.<br /><br />• Navigable: Provide ways to help users
                  navigate, find content, and determine where they are.<br /><br />• Input Modalities: Make it easier for users to
                  operate functionality through various inputs beyond keyboard.
                </div>
                <div class="section-header-QxM5SU">
                  <div class="five-ways---your-work-tO655I valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Operable Guidelines
                  </div>
                </div>
                <div class="welcome-C61RwL">
                  <div class="x2-operable-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    2. Operable
                  </div>
                </div>
                <img class="vector-C61RwL" src="accessibility_activity/vector@2x.png" />
                <img class="line-4-C61RwL" src="accessibility_activity/line-4-2@1x.png" />
              </div>
            </body>
          </html>

          `,
        },
        // Question 0
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // Question 1
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // Question 2
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // Question 3
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // html 2
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/operable-2.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="operable-2" />
              <div class="operable-2 screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="the-visibi--for-users-C61RwL border-class-1 poppins-normal-black-18px">
                  Many users who have disabilities need more time to complete tasks than the majority of users: they may take
                  longer to physically respond, they may take longer to read things, they may have low vision and take longer to
                  find things or to read them, or they may be accessing content through an assistive technology that requires more
                  time. This guideline focuses on ensuring that users are able to complete the tasks required by the content with
                  their own individual response times. The primary approaches deal with eliminating time constraints or providing
                  users enough additional time to allow them to complete their tasks. Exceptions are provided for those cases
                  where this is not possible.
                </div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Navigable
                  </div>
                </div>
                <img class="operable-2-image-C61RwL" src="accessibility_activity/operable-2---image@1x.jpg" />
                <div class="welcome-C61RwL">
                  <div class="x2-operable-cont-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    2. Operable - Cont
                  </div>
                </div>
                <div class="the-visibi--for-users-VMr6Om valign-text-middle border-class-1 poppins-normal-black-18px">
                  Nausea, vertigo (or dizziness), and disorientation are very nonspecific symptoms associated with all kinds of
                  diseases and not particularly suggestive of seizures (except maybe disorientation, which is seen in seizures).
                  However, seizures are not the only adverse physical response possible from flashing, flickering, blnking, and
                  other such stimuli. In 1997, a Japanese cartoon featured an animated &#34;virus bomb&#34;. Some of the children
                  watching the cartoon reacted by having seizures, others by suffering nausea, shaking, and vomitting blood. The
                  reactions from the children were so severe, they had to be rushed to the emergency room. The physical disorders
                  listed below are all possible consequences: each of these physical reactions may be so severe as to be
                  incapacitating:<br /><br />• Seizures<br />• Vestibuler Disordera<br />• Migraines<br />• Nausea<br />• Vomiting
                </div>
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1 poppins-normal-black-14px">
                    <span class="span1-SQKVtq">Example: </span><span class="span2-SQKVtq">NASA Color Usage Research Lab</span>
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Seizures &amp; Physical Reactions
                  </div>
                </div>
                <img class="vector-C61RwL" src="accessibility_activity/vector@2x.png" />
              </div>
            </body>
          </html>

          `,
        },
        // Question 4
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // Question 5
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
      ],
    },
    // understandable
    {
      name: 'Understandable',
      modules: [
        // html
        {
          type: 'display',

          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/understandable.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="understandable" />
              <div class="understandable screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="the-visibi--for-users-C61RwL valign-text-middle border-class-1 poppins-normal-black-18px">
                  Understandable technology is consistent in its presentation and format, predictable in its design and usage
                  patterns, concise, multimodal, and appropriate to the audience in its voice and tone.&nbsp;&nbsp;Users should be
                  able to comprehend the content, and learn and remember how to use the interface.
                </div>
                <img class="understand-bulb-image-C61RwL" src="accessibility_activity/understandable---lightbulb-image@1x.png" />
                <img
                  class="understand-t-mistakes-C61RwL"
                  src="accessibility_activity/understandable---image-3---avoid-and-correct-mistakes@1x.jpg"
                />
                <img class="understand-le-1-image-C61RwL" src="accessibility_activity/understandable---example-1-image@1x.jpg" />
                <div class="image-caption-C61RwL">
                  <div class="the-visibi--for-users-mWuPKx border-class-1 poppins-normal-black-14px">
                    <span class="span1-SQKVtq">Example:</span
                    ><span class="span2-SQKVtq">
                      When combining multiple resources into a single Web page, the abbreviation would be expanded at the
                      beginning of each resource. In this case, however, using a different technique for providing the expanded
                      form may be more appropriate.</span
                    >
                  </div>
                </div>
                <div class="welcome-C61RwL">
                  <div class="x3-understandable-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">
                    3. Understandable
                  </div>
                </div>
                <div class="text-VMr6Om border-class-1 poppins-normal-black-18px">
                  • Readable: Make text content readable and understandable.<br /><br />• Content appears and operates in
                  predictable ways<br /><br />• Users are helped to avoid and correct mistakes
                </div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Undertandable Guidelines
                  </div>
                </div>
                <div class="the-visibi--for-users-VMr6Om border-class-1 poppins-normal-black-18px">
                  Content authors need to ensure that text content is readable and understandable to the broadest audience
                  possible, including when it is read aloud by text-to-speech. Such content includes:<br /><br />• Identifying the
                  primary language of a web page, such as Arabic, Dutch, or Korean<br /><br />• Identifying the language of text
                  passages, phrases, or other parts of a web page<br /><br />• Providing definitions for any unusual words,
                  phrases, idioms, and abbreviations<br /><br />• Using the clearest and simplest language possible, or providing
                  simplified versions<br /><br />Meeting this requirement helps software, including assistive technology, to
                  process text content correctly. For instance, this requirement helps software to read the content aloud, to
                  generate page summaries, and to provide definitions for unusual words such as technical jargon. It also helps
                  people who have difficulty understanding more complex sentences, phrases, and vocabulary. In particular, it
                  helps people with different types of cognitive disabilities.
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Text is readable and understandable
                  </div>
                </div>
                <div class="the-visibi--for-users-mzXdH9 border-class-1 poppins-normal-black-18px">
                  Many people rely on predictable user interfaces and are disoriented or distracted by inconsistent appearance or
                  behavior. Examples of making content more predictable include:<br /><br />• Navigation mechanisms that are
                  repeated on multiple pages appear in the same place each time<br /><br />• User interface components that are
                  repeated on web pages have the same labels each time<br /><br />• Significant changes on a web page do not
                  happen without the consent of the user<br /><br />Meeting this requirement helps people to quickly learn the
                  functionality and navigation mechanisms provided on a website, and to operate them according to their specific
                  needs and preferences. For instance, some people assign personalized shortcut keys to functions they frequently
                  use to enhance keyboard navigation. Others memorize the steps to reach certain pages or to complete processes on
                  a website. Both rely on predictable and consistent functionality.
                </div>
                <div class="section-header-mzXdH9">
                  <div class="five-ways---your-work-IYShxb valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Content appears and operates in predictable ways
                  </div>
                </div>
                <div class="the-visibi--for-users-QxM5SU border-class-1 poppins-normal-black-18px">
                  Forms and other interaction can be confusing or difficult to use for many people, and, as a result, they may be
                  more likely to make mistakes. Examples of helping users to avoid and correct mistakes include:<br /><br />• Descriptive
                  instructions, error messages, and suggestions for correction<br /><br />• Context-sensitive help for more
                  complex functionality and interaction<br /><br />• Opportunity to review, correct, or reverse submissions if
                  necessary<br /><br />Meeting this requirement helps people who do not see or hear the content, and may not
                  recognize implicit relationships, sequences, and other cues. It also helps people who do not understand the
                  functionality, are disoriented or confused, forget, or make mistakes using forms and interaction for any other
                  reason.
                </div>
                <div class="section-header-QxM5SU">
                  <div class="five-ways---your-work-tO655I valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Users are helped to avoid and correct mistakes
                  </div>
                </div>
                <img class="line-4-C61RwL" src="accessibility_activity/line-4-1@1x.png" />
                <img class="vector-C61RwL" src="accessibility_activity/vector@2x.png" />
                <img class="chrome-links-1-C61RwL" src="accessibility_activity/chrome-links-1@2x.jpg" />
                <img class="chrome-form-fields-1-C61RwL" src="accessibility_activity/chrome-form-fields-1@2x.jpg" />
                <img class="chrome-but-n-widget-1-C61RwL" src="accessibility_activity/chrome-button-widget-1@2x.jpg" />
                <div class="image-caption-VMr6Om">
                  <div class="the-visibi--for-users-jD5qyr border-class-1 poppins-normal-black-14px">
                    <span class="span1-sx37NZ">Example: </span
                    ><span class="span2-sx37NZ">Google Chrome text / Form Fields / Buttons</span>
                  </div>
                </div>
                <div class="image-caption-mzXdH9"><div class="the-visibi--for-users-T3UoVK border-class-1">Form Field</div></div>
                <div class="image-caption-QxM5SU"><div class="the-visibi--for-users-qWiSjq border-class-1">Text</div></div>
                <div class="image-caption-2P4qUJ"><div class="the-visibi--for-users-NA0Qkv border-class-1">Button</div></div>
              </div>
            </body>
          </html>

          `,
        },
        // question 1
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // question 2
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
      ],
    },
    // robust
    {
      name: 'Robust',
      modules: [
        // html 1
        {
          type: 'display',

          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1042, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/robust.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="robust" />
              <div class="robust screen">
                <div class="rectangle-48-C61RwL border-class-2"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="the-visibi--for-users-C61RwL valign-text-middle border-class-1 poppins-normal-black-18px">
                  Robust I.T. is standards-compliant, and designed to function on all appropriate technologies.&nbsp;&nbsp;Users
                  should be able to choose the technology they use to interact with websites, online documents, multimedia, and
                  other information formats.
                </div>
                <img class="robust-image-1-C61RwL" src="accessibility_activity/robust-image-1@1x.jpg" />
                <img class="robust-image-2-C61RwL" src="accessibility_activity/robust-image-2@1x.jpg" />
                <div class="welcome-C61RwL">
                  <div class="x4-robust-0O6yUh valign-text-middle border-class-1 poppins-bold-chilean-fire-60px">4. Robust</div>
                </div>
                <div class="text-VMr6Om border-class-1 poppins-normal-black-18px">
                  • Content is compatible with current and future user tools
                </div>
                <div class="text-mzXdH9 border-class-1 poppins-normal-black-18px">
                  Robust content is compatible with different browsers, assistive technologies, and other user agents. Examples of
                  how this can be achieved include:<br /><br />• Ensuring markup can be reliably interpreted, for instance by
                  ensuring it is valid<br /><br />• Providing a name, role, and value for non-standard user interface
                  components<br /><br />• Meeting this requirement helps maximize compatibility with current and future user
                  agents, including assistive technologies. In particular, it enables assistive technologies to process the
                  content reliably, and to present or to operate it in different ways. This includes non-standard (scripted)
                  buttons, input fields, and other controls.
                </div>
                <div class="section-header-C61RwL">
                  <div class="five-ways---your-work-X1rVr0 valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Robust Guidelines
                  </div>
                </div>
                <div class="section-header-VMr6Om">
                  <div class="five-ways---your-work-C44tDP valign-text-middle border-class-1 poppins-semi-bold-black-24px">
                    Content is compatible with current and future user tools
                  </div>
                </div>
                <div class="divider-dotted-C61RwL"><img class="line-4-xv1xHo" src="accessibility_activity/line-4@1x.png" /></div>
                <img class="vector-C61RwL" src="accessibility_activity/vector@2x.png" />
              </div>
            </body>
          </html>

          `,
        },
        // question 1
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
        // question 2
        {
          type: 'question',
          template: 'multiple-choice-right',
          contents: {
            problemStatement:
              'PROBLEM QUESTION',
            timeLimit: 4,
            type: 'multiple-choice',
            media:
              '/images/question_images/Visibility_of_System_Status_Q1/Visibility_of_System_Status_Q1.png',
// REALLY SHOULD BE '/IMAGES/ACCESSIBILITY/QUSTION_IMAGES/ADLFKJDAFAKJSDF'

            answers: [
              {
                label: 'A. TITLE',
                isCorrect: false,
                feedback:
                  'FEEDBACK FROM FIGMA',
              },
              // OBJECTS FOR B, C, D
            ],
          },
        },
      ],
    },
    // resources
    {
      name: 'Resources',
      modules: [
        // html
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1036, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/resources.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="resources" />
              <div class="resources screen">
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-casal-48px">
                    More Accessibility Resources
                  </div>
                </div>
                <div class="main-artic-ntab-order-C61RwL border-class-1">
                  <span class="span1-UBaHLA">Main Articles:<br /></span
                  ><span class="span2-UBaHLA"
                    >https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b<br />https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94<br />https://uxdesign.cc/accessibility-guidelines-for-a-ux-designer-c3ba775539be<br /></span
                  ><span class="span3-UBaHLA">Supplemental Info:<br /></span
                  ><span class="span4-UBaHLA"
                    >Color Safe - accessible web color combinations<br />https://webaim.org/resources/contrastchecker/<br />https://www.w3.org/TR/wai-aria-practices/#aria_ex<br />axe-coconut
                    - Web Accessibility Testing<br />Contrast Checker<br />Color Oracle | Color Oracle<br />Accessible color
                    palette builder<br />https://static.skillshare.com/uploads/attachment/166696059/9001d2a7/WCAG%202.0%20Guidelines%20for%20UX%20Designers.pdf<br />https://www.w3.org/WAI/fundamentals/accessibility-principles/<br />https://www.ibm.com/able/toolkit/design/ux/navigation#tab-order<br
                  /></span>
                </div>
                <div class="text-quest-n-question-C61RwL">
                  <div class="question-OvaCyR valign-text-middle border-class-1">
                    Don’t stop here!&nbsp;&nbsp;There are a lot more ways to learn about accessibility and many websites designed
                    to help you better design for accessibility.
                  </div>
                </div>
              </div>
            </body>
          </html>
          `,
        }
      ],
    },
    // end of activity
    {
      name: 'End of Activity',
      modules: [
        // html 1
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1036, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/end-of-activity.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="end-of-activity" />
              <div class="end-of-activity screen">
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <div class="text-activ-on-message-C61RwL">
                  <div class="youve-succ-n-activity-r097xv valign-text-middle border-class-1 poppins-normal-white-28px">
                    <span>
                      <span class="span1-0OrvDJ">You’ve Successfully completed your <br /></span
                      ><span class="span2-0OrvDJ">4 Principles of Web Accessibility</span>
                    </span>
                  </div>
                </div>
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-casal-48px">Congratulations!</div>
                </div>
                <div class="additional-r-comments-C61RwL border-class-1">Additional Questions or Comments?</div>
                <div class="text-box-C61RwL">
                  <img class="line-14-PllR71" src="accessibility_activity/line-14@2x.png" />
                  <img class="line-15-PllR71" src="accessibility_activity/line-15@2x.png" />
                  <img class="line-16-PllR71" src="accessibility_activity/line-16@2x.png" />
                </div>
                <div class="text-quest-n-question-C61RwL">
                  <div class="question-OvaCyR valign-text-middle border-class-1">
                    How did we do?&nbsp;&nbsp;Check the boxes next to the concepts you feel confident about after completing this
                    activity:
                  </div>
                </div>
                <div class="checkbox-C61RwL">
                  <div class="label-jOya0a valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px">Percievable</div>
                  <div class="checkbox-c-ox-default-jOya0a"></div>
                </div>
                <div class="checkbox-VMr6Om">
                  <div class="label-C3KYGZ valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px"></div>
                  <div class="checkbox-c-ox-default-C3KYGZ"></div>
                </div>
                <div class="checkbox-mzXdH9">
                  <div class="label-ckkASn valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px"></div>
                  <div class="checkbox-c-ox-default-ckkASn"></div>
                </div>
                <div class="checkbox-QxM5SU">
                  <div class="label-7nEilF valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px"></div>
                  <div class="checkbox-c-ox-default-7nEilF"></div>
                </div>
                <div class="operable-C61RwL valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px">Operable</div>
                <div class="understandable-C61RwL valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px">
                  Understandable
                </div>
                <div class="robust-C61RwL valign-text-middle border-class-1 helveticaneue-bold-mine-shaft-16px">Robust</div>
              </div>
            </body>
          </html>

`,
        },
        // html 2 with modal
        {
          type: 'display',
          contents: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=1036, maximum-scale=1.0" />
              <link rel="shortcut icon" href="./accessibility_activity/favicon.png" />
              <meta name="og:type" content="website" />
              <meta name="twitter:card" content="photo" />
              <link rel="stylesheet" type="text/css" href="css/alternate-end-of-activity.css" />
              <style>
                @import url("https://fonts.googleapis.com/css?family=Poppins:600,400,700,500");

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

                @font-face {
                  font-family: "Helvetica Neue-Regular";
                  font-style: normal;
                  font-weight: 400;
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
              <input type="hidden" id="anPageName" name="page" value="alternate-end-of-activity" />
              <div class="alternate-end-of-activity screen">
                <div class="rectangle-61-C61RwL"></div>
                <div class="text-C61RwL valign-text-middle border-class-1 proximanova-bold-black-40px"></div>
                <a href="javascript:history.back()"
                  ><div class="x-back-C61RwL valign-text-middle border-class-1 poppins-medium-black-16px">&lt;Back</div></a
                >
                <img class="alternate--vity-image-C61RwL" src="accessibility_activity/alternate-end-of-activity-image@1x.png" />
                <div class="text-activ-on-message-C61RwL">
                  <div class="youve-succ-n-activity-r097xv valign-text-middle border-class-1 poppins-normal-white-28px">
                    <span>
                      <span class="span1-0OrvDJ">You’ve Successfully completed your <br /></span
                      ><span class="span2-0OrvDJ">4 Principles of Web Accessibility</span>
                    </span>
                  </div>
                </div>
                <div class="welcome-C61RwL">
                  <div class="welcome-0O6yUh valign-text-middle border-class-1 poppins-bold-casal-48px">Congratulations!</div>
                </div>
              </div>
            </body>
          </html>


`,
        },
      ],
    }
  ],
  isDraft: false,
  archived: false,
};

// current state of file: 
// all html should be correct
// image files should be accessibility_activity/blah rather than img/blah


// need to do:
// update question text
// update question images
// update css filepaths, maybe?