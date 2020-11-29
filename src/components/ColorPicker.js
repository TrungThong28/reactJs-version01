import react, {Component} from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : ['red', 'green', 'yellow', 'blue']
        };
    }

    showcolor(color){
        return{
            backgroundColor : color
        };
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

  render() {
    var elementcolors = this.state.colors.map((color, index) => {
        return <span 
                    key = {index} 
                    style={this.showcolor(color)}
                    className = {this.props.color === color ? 'active' : ''}
                    onClick = { () => this.setActiveColor(color)}
                    >Color </span>
    });

      return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elementcolors}

                        <hr/>
                    </div>
                </div>
            </div>
        );
      }
    }

export default ColorPicker;
