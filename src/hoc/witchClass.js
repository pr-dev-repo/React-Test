import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
// State less
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// statefull
const withClass = (WrappedComponent, className) => {

    return class extends Component {

        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

// never manipulate wrapped component
export default withClass