import React, { Component } from 'react';
import { Button, Icon, Grid, Header, Image, Table, Card } from 'semantic-ui-react';
import AppActions from '../lib/appactions.js'
import '../App.css';

class Rows extends Component {
    handleClick(key) {
        AppActions.displayJournal(key)       
    }

    render() {
        var Item = this.props.journal;
        return (
            <tr>
                <td><a href="">{Item.Code}</a></td>
                <td><a href="">{Item.Description}</a></td>
                <td>{Item.Type}</td>
                <td><button onClick={()=>this.handleClick(Item.Code)}>View</button></td>
            </tr>
        );
    }
}

export default Rows;
