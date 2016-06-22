'use strict';

import 'peerio-web-styling';
import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import Index from './components/Index.jsx';

let div = document.createElement('div');
document.body.appendChild(div);

render(<Index />, div);
