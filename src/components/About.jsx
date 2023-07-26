import { React, Component } from "react";


// export const About = () => {
//     return (
//         <>
//             <h2> About Page</h2>
//             <h4> 🚀 Welcome to About Page 🚀 </h4>
//         </>
//     )
// }


export class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "initial rendering",
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name
        })
    }

    componentDidUpdate() {
        console.log("component update");
    }

    updateUI() {
        this.setState({
            name: "Mukul"
        })
    }


    componentWillUnmount() {
        console.log("component unmounted from UI");
    }

    render() {
        return(
            <div className="wrapper">
                <h1>About Page</h1>
                <h4> 🚀 Welcome to About Page 🚀 </h4>
                <h3>{this.state.name} is learning class components</h3>
                <br />
                <br />
                <button className="btn" onClick={() => this.updateUI()}>
                    Text change
                </button>
            </div>
        )
    }
}
