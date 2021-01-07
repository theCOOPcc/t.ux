import React from 'react';
// import './InjectHTML.css';
import '../InjectHTML/css/introduction.css'

const InjectHTML = ({markup}) => {
  return ( <div className="inject" dangerouslySetInnerHTML={{__html: markup}}></div> );
}
 
export default InjectHTML; 

