import React, { Component } from "react";

import { Card, Button } from "tabler-react";

class TimeCard extends Component {
    state = {
        data:{}
    }
    
    constructor(props) {
        super(props);
        this.state = {data: this.props.data};
    }

    render() {
//        const {data} = this.state;
        const data = this.props.data;
        return (
        <Card>
            <Card.Header>
                <Card.Title>{data.value}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Button color="primary">OK</Button>
            </Card.Body>
        </Card>
        );
    }
}
export default TimeCard;