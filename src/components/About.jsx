import { React, Component } from "react";

const About = () => {
  return (
    <h1>
      {" "}
      Our About online store, and we have a lot of child components inside
      this web page!!!
    </h1>
  );
};

export default About;

// const About = (props) => {
//   return (
//     <div className="wrapper">
//       <h1>About Page</h1>
//       <h4> 🚀 Welcome to About Page 🚀 </h4>
//       <h3>{props.name} is learning class components</h3>
//       <br />
//       <br />
//       <button className="btn" onClick={() => this.updateUI()}>
//         Text change
//       </button>
//     </div>
//   );
// };

// class About extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: "initial rendering",
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             name: this.props.name
//         })
//     }

//     componentDidUpdate() {
//         console.log("component update");
//     }

//     updateUI() {
//         this.setState({
//             name: "Mukul"
//         })
//     }

//     componentWillUnmount() {
//         console.log("component unmounted from UI");
//     }

//     render() {
//         return(
//             <div className="wrapper">
//                 <h1>About Page</h1>
//                 <h4> 🚀 Welcome to About Page 🚀 </h4>
//                 <h3>{this.state.name} is learning class components</h3>
//                 <br />
//                 <br />
//                 <button className="btn" onClick={() => this.updateUI()}>
//                     Text change
//                 </button>
//             </div>
//         )
//     }
// }
