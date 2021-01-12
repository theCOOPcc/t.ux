import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import activityService from '../../services/activityService';

const getActivityData = () => {
  return activityService.getOne('5ff8b36e56fdee429c008d3a');
};

const HeuristicsActivity = () => {
  const [activityData, setActivityData] = useState('');

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

  return activityData ? <Activity details={activityData} /> : <h1>Loading</h1>;
};

export default HeuristicsActivity;
