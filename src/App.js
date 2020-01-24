import React, { PureComponent } from 'react'
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import List from './Component/List'
export default class App extends PureComponent {

  render() {
    return (
      <div>

        <Header />
        <div className='container'>
          <List/>
        </div>


      </div>
    )
  }
}
