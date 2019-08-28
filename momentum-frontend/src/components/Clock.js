import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            greeting: '',
            time: '',
        }
    }

    componentDidMount() {
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
    }

    getTime = () => {
        let dateTime = new Date();
        let time = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
        this.setState({time});
        this.greet(time);
    }

    greet = time => {
        let newTime = parseInt(time.replace(':', ''));
        let greeting =  newTime < 1200 ? 'Good Morning': newTime > 1700 ? 'Good Evening' : 'Good Afternoon';
        this.state.currentUser.name ? this.setState({greeting: `${greeting}, ${this.state.currentUser.name}.`}) : this.setState({ greeting });
    }

    render() {
        return (
            <div id="greeting-clock-div">
                <h2 id="clock">{this.state.time}</h2>
                <h3 id="greeting">{this.state.greeting}</h3>
            </div>
        )
    }

}

export default Clock;