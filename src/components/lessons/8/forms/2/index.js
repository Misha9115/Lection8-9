import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      
      input: event.target.value,
    });
  }
  handleSubmit(event) {
  //  const sub = this.state.input
    this.setState({
      
      submit: this.state.input
    });
       event.preventDefault();
  }
  
  render() {
   // console.log(this.state.submit)
    return (
      <div>
        <form >
     
<input type='text' value = {this.state.input} onChange={this.handleChange}/>
         
          <button onClick={this.handleSubmit} >Submit!</button>
        </form>
         <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ControlledForm />
    </div>
  );
};

export default Task;
