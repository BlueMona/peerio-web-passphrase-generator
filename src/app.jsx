'use strict';

import './styles/main.scss';

import React from 'react';
import {render} from 'react-dom';
import Index from './components/Index.jsx';


document.addEventListener('DOMContentLoaded', function () {
    var app = document.getElementById('app');
    render(<Index />, app);
});

