import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import {counter} from './reducers';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const store = createStore(counter)
function render() {
  ReactDOM.render(
      <App store={store}/>
      ,
      document.getElementById('root')
  );
}

// 初始化渲染
render()

//订阅监听（store中的状态变化了，就会自动调用进行重绘）
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
