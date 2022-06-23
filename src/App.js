import './App.css';
import React from 'react';
import Forminput from './components/Forminput'
import List from './components/List'
import Footer from './components/Footer'
import {DataProvider} from './components/DataProvider'

function App() {
  return (
    <DataProvider>
      <div className="App">
      <h1>To Do List</h1>
      <Forminput/>
      <List/>
      <Footer />
    </div>
  </DataProvider>
  );
}

export default App;
