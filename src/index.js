import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Common/System/configStore';
import moment from "moment";
import { Provider } from "react-redux";
import App from "./Features/Application/App";
import 'bootstrap/dist/css/bootstrap.css';

moment.locale('ru');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
