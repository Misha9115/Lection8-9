import React from 'react';

const buttons = ['first', 'nano', 'bob', 'tomato'];

class Index extends React.Component {
  state = { activeButtonName: '' };

  clickHandler = (name) => {
    this.setState({ activeButtonName: name });
  };

  render() {
    const { activeButtonName } = this.state;
    return (
      <div>
        {buttons.map((i, index) => (
          <Button clickHandler={this.clickHandler} activeButtonName={activeButtonName} key={index} name={i} />
        ))}
        <Details name={activeButtonName} />
      </div>
    );
  }
}

class Button extends React.Component {
  state = { active: false };

  clickHandler = () => {
   // this.setState(({ active }) => ({ active: !active }));
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { name } = this.props;

    return (
      <button
        onClick={this.clickHandler}
        style={{ color: name===this.props.activeButtonName ? 'red' : 'blue' }}
      >
        {name}
      </button>
    );
  }
}

function Details({ name }) {
  return <div>{name}</div>;
}

const Task = () => {
  return <Index />;
};

export default Task;
