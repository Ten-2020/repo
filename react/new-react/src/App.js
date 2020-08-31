import React from 'react';
import './App.less';
import Gather from './view/gather.jsx'
function App () {
  return (
    <div className="App">
      <Gather>
        <span>你好</span>
        <span>兄弟</span>
      </Gather>
    </div>
  );
}

export default App;
