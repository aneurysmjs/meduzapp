import axios from 'axios';

export default axios.create({
  baseURL: `https://meduza.io/api/v3/`
});