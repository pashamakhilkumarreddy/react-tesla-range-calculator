import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TeslaBattery from './containers/TeslaBattery';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container mt-6">
        <TeslaBattery />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
