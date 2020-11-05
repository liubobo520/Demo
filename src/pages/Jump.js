import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './index.js'
 

export default class Jump extends React.Component {
  cerateRouteViews() {
    return routes.map(ele=>
        <Route 
          key={ele.id} 
          exact 
          path={ele.path} 
          component={ele.componentJump} 
        />
    )
  }
  render() {
    return (
      <div className='Jump'>
        <Switch>
          { this.cerateRouteViews() }
          <Redirect from='/*' to='/' />
        </Switch>
      </div>
    )
  }
}

 
