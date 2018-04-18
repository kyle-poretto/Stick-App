import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import Team from './components/components/Team'
import About from './components/components/About'



ReactDOM.render(
<Provider store={store}>
    <Router>
      <div>
      <Route exact path="/about" component={Team} />
      <Route exact path="/team" component={About} />
      <Route path="/" component={App} />
      </div>
    </Router>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
