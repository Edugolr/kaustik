import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Schedule from './components/Schedule';
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        appointments: []
      };
    }
    componentDidMount() {
      fetch("http://www.mocky.io/v2/5c988db52f000073009f3090")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              appointments: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    render() {

      const { error, isLoaded, appointments } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div >
                <CssBaseline />
                <NavBar />
                <Schedule appointments={appointments}/>
                <BottomNav/>
            </div>

        );
      }
    }
}

export default App;
