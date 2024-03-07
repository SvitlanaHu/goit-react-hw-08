import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './components/App/App';
import './components/index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
);
