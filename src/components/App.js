import React, { Component } from 'react';
import '../styles/App.css';

// Import components here
import Header from './HeaderComponent';
import SubSection from './SubSectionComponent';

// Import and export everything else in order

class Grid extends Component {
  render() {
    return (
      <div className="container grid">
        <h1>grid grid grid</h1>
      </div>
    );
  }
}

class Locations extends Component {
  render() {
    return (
      <div className="container location">
        <h1>LOCATION LOCATION LOCATION</h1>
      </div>
    );
  }
}

class Testimonials extends Component {
  render() {
    return (
      <div className="container testimonials">
        <h1>TESTIMONIALS</h1>
      </div>
    );
  }
}

class Pricing extends Component {
  render() {
    return (
      <div className="container pricing">
        <h1>Pricing</h1>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <h1>Footer</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubSection />
        <Grid />
        <Locations />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
