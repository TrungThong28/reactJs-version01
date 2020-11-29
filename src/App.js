import react, {Component} from 'react';
import './App.css';

import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'red',
            fontSize : 18
        };
    }

    onSetColor = (params) => {
        this.setState({
            color : params
        });
    }

    change = (value) => {
        // font size lớn hơn hoặc bằng 8 và nhỏ hơn hoặc bằng 35
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 35) {
            this.setState({
                fontSize : this.state.fontSize + value // +1 hoac -1
            });
        }
    }

    Default = (value) => {
        if (value) {
            this.setState({
                color : 'red',
                fontSize : 18
            });
        }
    }

  render() {
      return (
            <div className ="container body">
                <div className="row">
                    <ColorPicker 
                        color = {this.state.color} 
                        onReceiveColor={this.onSetColor} 
                        />
                    <SizeSetting 
                        fontSize = {this.state.fontSize} 
                        onChangeSize={this.change} 
                        />
                    <Reset onSettingDefault = {this.Default} />
                    <Result color = {this.state.color} fontSize={this.state.fontSize} />

                </div>
            </div>
        );
      }
    }

export default App;
