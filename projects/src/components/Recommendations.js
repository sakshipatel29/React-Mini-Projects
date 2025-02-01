import {React, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';


const Recommendations = () => {
  const user = useContext(UserContext);
  return (
    <div>Recommendations for {user}</div>
  )
}

export default Recommendations