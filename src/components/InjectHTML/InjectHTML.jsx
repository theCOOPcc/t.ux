import React from 'react';
// import './InjectHTML.css';
import './css/introduction.css'
import './css/aesthetic-minimilism.css'
import './css/aesthetic-minimilism1.css'
import './css/congratulations.css'
import './css/consistency-standards.css'
import './css/error-prevention.css'
import './css/error-recovery.css'
import './css/flexibility-efficiency.css'
import './css/help-documentation-cont.css'
import './css/help-documentation.css'
import './css/recognition-over-recall.css'
import './css/system-world-match.css'
import './css/visibility-of-ss-example-page.css'
import './css/visibility-of-system-status-2.css'
import './css/visibility-of-system-status.css'
import './css/user-control-and-freedom.css'

const InjectHTML = ({markup}) => {
  return ( <div className="inject" dangerouslySetInnerHTML={{__html: markup}}></div> );
}
 
export default InjectHTML; 

