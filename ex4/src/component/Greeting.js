// import React from "react";
// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: window.localStorage.getItem('classFirstName') || '',
//             lastName: window.localStorage.getItem('classLasName') || '',
//         };
//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         this.handleLastNameChange = this.handleLastNameChange.bind(this);
//     }
//
//     handleFirstNameChange = (e) => this.setState({firstName: e.target.value});
//     handleLastNameChange = (e) => this.setState({lastName: e.target.value});
//
//     componentDidUpdate(prevProps, prevState) {
//             window.localStorage.setItem('classFirstName', this.state.firstName);
//
//
//             window.localStorage.setItem('classLastName', this.state.lastName);
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 <input
//                     value={this.state.firstName}
//                     onChange={this.handleFirstNameChange}
//                 />
//                 <br/>
//                 <input
//                     value={this.state.lastName}
//                     onChange={this.handleLastNameChange}
//                 />
//                 <p>
//                     Hello,{' '}
//                     <span>
//                         {this.state.firstName} {this.state.lastName}
//                     </span>
//                 </p>
//             </>
//         );
//     }
//
// }
// export default Greeting;