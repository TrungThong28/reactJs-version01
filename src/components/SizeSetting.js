import react, {Component} from 'react';

class SizeSetting extends Component {

  changeSize(value){
    this.props.onChangeSize(value);
  }

  render() {
      return (
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                        </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-info reduced" onClick={ () => this.changeSize(-1)}>Reduced</button>
                        <button type="button" className="btn btn-info" onClick={ () => this.changeSize(1)}>Increase</button>
                    </div>
                </div>
            </div>
        );
      }
    }

export default SizeSetting;
