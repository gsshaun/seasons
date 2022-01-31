import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        //Lifecycle Method
        //Get called when the component is loaded on the screen after the render method. Good place to make a data loading job.
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        //Lifecycle Method
        //Whenever a state gets changed. It call render and then this method.
        console.log('My component was just updated');
    }

    componentWillUnmount() {
        //To cleanup stuffs
    }

    render() {
        //Lifecycle Method
        // Render returns only JSX. No logical job, network request or other than JSX tasks.
        if (!this.state.errorMessage && !this.state.lat) {
            return <div>Loading</div>
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>
        } else {
            return <div>Error: {this.state.errorMessage}</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);