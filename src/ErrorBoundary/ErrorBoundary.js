import React, {Component} from 'react';

class ErrorBoundary extends Component{

state = {
    hasError: false,
    errorMessage:''
}

componentDidCatch = (error, info) =>{
this.setState({hasError:true, errorMessage: error});
}

    render(){
        if (this.setState.hasError){
            return <h1>OOPS, Something went wrong :( </h1>
        }else{
            return this.props.children;
        }
     
    }
}
export default (ErrorBoundary);