import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from './index.js'

export default class Link extends React.Component {

  cerateNavLink() {
    let arr = []
    routes.map(ele=>(
      arr.push(
          <NavLink 
            exact 
            className='linkItem' 
            key={ele.id} 
            to={ele.path}
          >
            {ele.text}
          </NavLink>
      )
    ))
    return arr
  }

  render() {
    return (
        <div className='Link'>
          { this.cerateNavLink() }
        </div>
    )
  }
}

