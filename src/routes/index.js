import React from 'react'
import { Route, Switch } from 'react-router'
import Deshboard from '../container/Deshboard'
import Login from '../container/Login'
import User from '../container/User'
import AddSemester from '../container/User/add'


const routes = (
  <Switch>
    
            <Route exact path="/" component={Login}/>
            <Route exact path="/deshboard" component={Deshboard}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/user/add" component={AddSemester}/>
            {/* <Route exact path="/deshboard" component={Des}/>
            <Route exact path="/semester" component={Semester}/>
            <Route exact path="/learnning_management" component={Learn}/>
            <Route exact path="/sub" component={SubJect}/>
            <Route exact path="/student" component={Student}/>
            <Route exact path="/student/junior" component={Junior}/>
            <Route exact path="/student/junior/:classNo" component={TableClass}/>
            <Route exact path="/teacher" component={Teacher}/> */}
  </Switch>
)

export default routes