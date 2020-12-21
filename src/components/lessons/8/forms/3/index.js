import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: true,
      email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email
    const agreeCheckbox = this.state.isTrue;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };
  render() {
    console.log(this.state.isTrue)
    console.log(this.state.email)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="isTrue"
          type="checkbox"
          checked={this.state.isTrue}
          onChange={this.handleInputChange} />
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleInputChange} />

      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
{/*      <UncontrolledForm />*/}
      <ControlledForm />
    </div>
  );
};

export default Task;
