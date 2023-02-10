/* eslint-disable */ 
import axios from 'axios';

export default axios.create({
    baseURL: "https://the1collector.herokuapp.com/",
    headers: {
      "Content-type": "application/json",
    }
  });