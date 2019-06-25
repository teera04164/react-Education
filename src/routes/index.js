import React from 'react'
import { Route, Switch } from 'react-router'
import Deshboard from '../container/Deshboard'
import Login from '../container/Login'
import User from '../container/User'
import AddSemester from '../container/User/add'
import UserDetail from '../container/User/detail'

import ClassRoom from '../container/ClassRoom'
import ClassDetail from '../container/ClassRoom/detailClass'

import SubJect from '../container/Subject'
import addSubject from '../container/Subject/addSubject'

import Teacher from '../container/Teacher'

const routes = (
  <Switch>
    
            <Route exact path="/" component={Login}/>
            <Route exact path="/deshboard" component={Deshboard}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/user/:_id/detail" component={UserDetail}/>
            <Route exact path="/user/add" component={AddSemester}/>
            <Route exact path="/class" component = {ClassRoom}/>
            <Route exact path="/class/:_year/:_class" component = {ClassDetail}/>
            <Route exact path="/subject" component = {SubJect}/>
            <Route exact path='/subject/add' component = {addSubject}/>
            <Route exact path='/teacher' component = {Teacher}/>
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