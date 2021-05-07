
import React from 'react';

import User from '../pages/User';
import Loading from '../pages/Loading';
import { useSelector } from 'react-redux';
import AlertContainer from '../components/AlertContainer';

function Home() {
    const load = useSelector(state => state.loading)
    const alert = useSelector(state => state.alert)
  return(
      <>
    
       
            
           { load.status === true && (
          <Loading />
        )}
          {
            alert.status && (
              <AlertContainer title={alert.title} message={alert.message} type={alert.type} />
            )
          }
         
          <User />
            

        
      
      </>
  )
}

export default Home;
