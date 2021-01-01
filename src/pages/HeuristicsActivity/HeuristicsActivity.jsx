import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import activityService from '../../services/activityService';

const getActivityData = () => {
  return activityService.getOne('5fedff0ed2cde92a7579795c');
};

const HeuristicsActivity = () => {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

  return activityData ? <Activity details={activityData} /> : <h1>Loading</h1>;
};

export default HeuristicsActivity;
