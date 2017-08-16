import React, { Component } from 'react';
import Table from './component/table.js';
import Rows from './component/rows.js';
import Display from './component/display.js';
import logo from './logo.svg';
import './App.css';
import AppActions from './lib/appactions.js';
import AppStore from './lib/appstore.js'

var jsonData = require('./data/journals.json');

/*let base64 = require('base-64');
let username = 'CustomerAdvancedUK';
let password = 'Online';
let eolheader = new Headers();
eolheader.append('Content-Type', 'application/x-www-form-urlencoded');
eolheader.append('Accept', 'application/json');
eolheader.append('Authorization', 'Basic Q3VzdG9tZXJBZHZhbmNlZFVLOk9ubGluZQ==');
eolheader.append('Access-Control-Request-Headers', 'Authorization');*/

class App extends Component {
  constructor(props) {
        super(props);
        this.state = { journals: [],viewjournal:[]};
        this.onView = this.onView.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

  componentDidMount() {
    //this.setState({ journals: jsonData.d.results });
    AppStore.addChangeListener('STORE_SUBMIT_JOURNAL', this.onSubmit);
    AppStore.addChangeListener('STORE_REMOVE_JOURNAL', this.onRemove);
    AppStore.addChangeListener('STORE_VIEW_JOURNAL', this.onView);
    this.listJournals();
  }

  viewJournal() {
    this.setState({
      viewjournal: AppStore.getView()
    })
  }

  onView() {
    try {
      this.viewJournal()
    } catch (error) {
      
    }
  }

  onRemove() {
    this.listJournals()
  }

  onSubmit() {
    this.listJournals()
  }

  listJournals() {
    let usermessage = ''

    if (this.state.journals.length > 9) {
      usermessage = 'You have exceeded the number of articles you can submit,You cannot add more articles'
    }

    this.setState({
      journals: AppStore.getAll(),
      message: usermessage
    })
  }

  render() {
    return (
      <div className="ui grid">
        <div className="ten wide column">
          <div className="App">
            <h1>Overview | Journals</h1>
            <div >
              <Table journals={this.state.journals} />
            </div>
          </div>
        </div>
        <div className="six wide column">
          <div className="App">
            <h1>Details</h1>
            <div >
              <Display journal={this.state.viewjournal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
