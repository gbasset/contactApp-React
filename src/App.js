import React, { PureComponent } from 'react'
import Header from './Component/interface/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./Context";
import List from './Component/contacts/List'
import State from './Component/revisions/state'
import AddContact from './Component/contacts/AddContact'
export default class App extends PureComponent {

  render() {
    return (
      <Provider>

      <div>
        <State/>
        <Header />
        <div className='container'>
      <AddContact/>
          <List/>
        </div>

      </div>
      </Provider>
    )
  }
}
