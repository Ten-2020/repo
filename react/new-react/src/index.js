import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

ReactDOM.render(
  // <React.StrictMode> // 这个不注释掉就会出现提示
    <App />
  // </React.StrictMode>
  ,document.getElementById('root')
);
serviceWorker.unregister();
