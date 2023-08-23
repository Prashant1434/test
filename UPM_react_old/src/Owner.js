

import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
function Owner() {
  return (
    <>
    <Router>
    <Navbar/>
        <Switch>
            <Route path='/'/>
        </Switch>
    </Router>

    <div className='contentbox'>

    <div className='dashboardbtn' ></div>
    <div className='dashboardbtn'></div>
    <div className='dashboardbtn'></div>
    <div className='dashboardbtn'></div>
    </div>


    </>
  );
}

export default Owner