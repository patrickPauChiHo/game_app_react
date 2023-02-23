import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadGames} from './action/gameAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);


  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
