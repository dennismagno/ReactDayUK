import React, { Component } from 'react';
import Rows from './rows.js';
import { Button, Icon, Grid, Header, Image, Table, Card } from 'semantic-ui-react';
import '../App.css';

class Tables extends Component {
    render() {
        var Journals = this.props.journals;
        return (
            <table className="ui celled table">
                <thead>
                    <tr><th>Code</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Journals.map(journal =>
                        <Rows journal={journal} />
                    )}
                </tbody>
            </table>
        );
    }
}

export default Tables;
