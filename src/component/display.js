import React, { Component } from 'react';
import { Button, Icon, Grid, Header, Image, Table, Card } from 'semantic-ui-react';
import '../App.css';

class Display extends Component {
    render() {
        var Item = this.props.journal;
        if (typeof Item == 'undefined') {
            return  <div></div>
        }
        return (
            <form className="ui form">
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="fields">
                        <div className="four wide field">
                            <input type="text" name="code" placeholder="Code" readOnly value={Item.Code} />
                            <input type="text" name="description" placeholder="Description" readOnly value={Item.Description} className="description" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Display;
