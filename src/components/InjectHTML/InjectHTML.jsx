import React from 'react';
// import './InjectHTML.css';
// heuristics activity css
import './css/heuristics-activity/introduction.css'
import './css/heuristics-activity/aesthetic-minimilism.css'
import './css/heuristics-activity/aesthetic-minimilism1.css'
import './css/heuristics-activity/congratulations.css'
import './css/heuristics-activity/consistency-standards.css'
import './css/heuristics-activity/error-prevention.css'
import './css/heuristics-activity/error-recovery.css'
import './css/heuristics-activity/flexibility-efficiency.css'
import './css/heuristics-activity/help-documentation-cont.css'
import './css/heuristics-activity/help-documentation.css'
import './css/heuristics-activity/recognition-over-recall.css'
import './css/heuristics-activity/system-world-match.css'
import './css/heuristics-activity/visibility-of-ss-example-page.css'
import './css/heuristics-activity/visibility-of-system-status-2.css'
import './css/heuristics-activity/visibility-of-system-status.css'
import './css/heuristics-activity/user-control-and-freedom.css'
// accessibility activity css
import './css/accessibility-activity/intro.css'
import './css/accessibility-activity/perceivable.css'
import './css/accessibility-activity/perceivable-color-contrast.css'
import './css/accessibility-activity/operable.css'
import './css/accessibility-activity/operable-2.css'
import './css/accessibility-activity/understandable.css'
import './css/accessibility-activity/robust.css'
import './css/accessibility-activity/resources.css'
import './css/accessibility-activity/end-of-activity.css'
import './css/accessibility-activity/alternate-end-of-activity.css'

const InjectHTML = ({ markup }) => {
  return (<div className="inject" dangerouslySetInnerHTML={{ __html: markup }}></div>);
}

export default InjectHTML;

