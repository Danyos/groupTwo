import React, {Component} from 'react';

class ExampleComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({count: this.state.count+1});
    }
    componentDidMount() {
        console.log('Component mount')
    }
    componentDidUpdate() {
        console.log('Component did update')
    }
    componentWillUnmount() {
        console.log('compont will unmount')
    }

    render() {
        return(
            <>
                <h2>Class example component</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Incriment</button>

            </>
        )
    }


}
export  default ExampleComponent