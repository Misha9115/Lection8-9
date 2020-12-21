import React, { Component } from 'react';

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = 'Email sending request in process.\nEmail params:\n';
  alertText += Object.keys(params)
    .map((i) => `${i}: ${params[i]}`)
    .join('\n');
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    this.massegeRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  // this.mailRef.current.value
   sendEmail(this.nameRef.current.value,this.mailRef.current.value,this.massegeRef.current.value)
    
   

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* change code below this line */}
        <div>
    <label for="name">Name:</label>
    <input type="text" id="name"ref={this.nameRef}/>
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" ref={this.mailRef}/>
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message" ref={this.massegeRef}></textarea>
  </div>
  <button  type='submit'>Submit!</button>
        {/* change code above this line */}
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
