import React from 'react';

import {HashRouter, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/skills';
import Contact from '../Contact/Contact';
import About from '../About/About';
import GoHome from '../GoHome/GoHome';

import './App.css';
import NavBar from '../NavBar/NavBar';

const App = () => {
    return (
        <div>
            <HashRouter>
            <div>
                <NavBar />
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/projects' exact component={Projects} />
                <Route path='/skills' exact component={Skills} />
                <Route path='/contact' exact component={Contact} />
            <GoHome/>
            </div>
            </HashRouter>
        </div>
    );
};

export default App;
