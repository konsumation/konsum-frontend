import Inferno, {linkEvent} from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import Login from './components/Login/Login';
import User from './components/User/User';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datum: Date(),
            wert: 1234,
            type: 'Strom'
        }
    }
    render() {
        return (< form > < label > Datum angeben : < input name = "datum" type = "text" value = {
            this.state.datum
        }
        onChange = {
            this.handleInputChange
        } /> < /
      label > <
      br / > < label > Wert angeben : < input name = "wert" type = "text" value = {
            this.state.wert
        }
        onChange = {
            this.handleInputChange
        } /> < /
      label > <
      br / > < label > Typ angeben : < input name = "type" type = "text" value = {
            this.state.type
        }
        onChange = {
            this.handleInputChange
        } /> < /
      label > <
      /form >);
    }
}
