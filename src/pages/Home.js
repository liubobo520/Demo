import React from 'react'

import Link from './Link'
import Route from './Jump'

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Link />
        <Route />
        <span>123456</span>
      </div>
    )
  }
}



