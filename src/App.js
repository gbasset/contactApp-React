import React, { PureComponent } from 'react'
import Header from './Component/interface/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./Context";
import List from './Component/contacts/List'
import State from './Component/revisions/state'
import AddContact from './Component/contacts/AddContact'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Apropos from './Component/pages/Apropos';
import Page404 from './Component/pages/Page404';
export default class App extends PureComponent {

  render() {
    return (
      <Provider>
        <Router>
          <div>
            <State />
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/liste' component={List} />
                <Route exact path='/ajout' component={AddContact} />
                <Route exact path='/propos' component={Apropos} />
                <Route exact path='/' component={List} />
                <Route component={Page404} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
