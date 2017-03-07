import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import Login from './components/Login/Login';
import User from './components/User/User';

import './App.css';

function logOut(instance) {
  instance.setState({
    token: null
  });

  localStorage.removeItem('token');
  localStorage.removeItem('profile');
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      token: localStorage.getItem('token'),
      profile: JSON.parse(localStorage.getItem('profile'))
    };
  }

  componentDidMount() {
    this.lock = {};

    const profile = {
      'user': 'someone'
    };

    this.setState({
      token: 'missing token here',
      profile: profile
    });

    localStorage.setItem('token', this.state.token);
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  render(props, state) {
    return ( <div className="App" >
      <div className="App-header" >
      <div className="App-auth pull-right" > {
        !state.token ? ( < Login lock={
            this.lock
          }
          />
        ) : ( <div className="App-auth-loggedIn" >
          < User profile={
            state.profile
          }
          /> <a className="App-auth-loggedIn-logout"
          onClick={
            linkEvent(this, logOut)
          } > Log Out </a> </div>
        )
      } </div>

      < Logo width="80" height="80" / >
      <h2> Welcome to Inferno < /h2> < /div > < p className="App-intro" >
      To get started, edit < code > src / App.js < /code> and save to reload. </p> < /div>
    );
  }
}

export default App;
