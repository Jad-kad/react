import React from 'react'


export class EditTasks extends React.createClass({ 
    getInitialState : function() {
       return { showMe : false };
    },
    onClick : function() {
       this.setState({ showMe : true} );
    },
    render : function() {
        if(this.state.showMe) { 
            return (<div> one div </div>);
        } else { 
            return (<a onClick={this.onClick}> press me </a>);
        } 
    }
}
