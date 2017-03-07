import Inferno from 'inferno';
import Component from 'inferno-component';
import './User.css';

class User extends Component {
  render(props) {
    const profile = props.profile || { picture: 'pic', name: 'someone'}
    const idp = 'title';

    return(
      <div className="User" title={idp}>
        <img src={profile.picture} alt={profile.name} />
        <span>{profile.name}</span>
      </div>
    );
  }
}

export default User;
