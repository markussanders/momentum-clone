import React from 'react';

class FocusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: '',
        }
    }

    render() {
        console.log('this.state = ', this.state)
        return (
            <div id="focus-form-div">
                {this.state.tasks ? <p>True</p> : <h3 className="focus-text-header">What's your main focus for today?</h3>}
                <form id="focus-form" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.setMainFocus(this.state.focus);
                }}>
                <input id="focus-input" onChange={(e) => this.setState({focus: e.target.value})}></input>
                </form>
            </div>
        )
    }
}

export default FocusForm;