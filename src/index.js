/* eslint-disable jsx-a11y/aria-props */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/ready.css';


import 'jquery';
import 'jquery-ui';
import 'popper.js';
import 'bootstrap';

import Layout from './components/layout/Layout';




// 将模板转为HTML语言，并插入指定的DOM节点
ReactDOM.render(
    <Layout tag-role="Layout" />,
    document.getElementById('root'));
// ReactDOM.render(<AppRouter />, document.body);
