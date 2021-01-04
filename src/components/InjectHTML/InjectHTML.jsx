import React from 'react';
import './InjectHTML.css'

const InjectHTML = ({markup}) => {
  return ( <div className="inject" dangerouslySetInnerHTML={{__html: markup}}></div> );
}
 
export default InjectHTML; 

