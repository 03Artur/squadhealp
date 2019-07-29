import React, {Component} from "react";
import queryString from 'query-string';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
            offset: 20,
            where: JSON.stringify({
                isBanned: true,
            })
        }

    }


    componentDidMount() {
        this.props.history.push({
            search: queryString.stringify(this.state)
    })

    }
    parseSearch = () => {
        console.log(queryString.parse(this.props.location.search))
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return <button onClick={this.parseSearch}/>
    }

};
