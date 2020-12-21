import React from 'react';

function Users({ users, online }) {
  const status = online ? 'Online' : 'Offline';
  const usersToRender =online; // change code here
  const usersItems =  users; // change code here
  
  return (
    <div>
      <h1>Current {usersToRender} Users:</h1>
      <ul>{usersItems}</ul>
    </div>
  );
}

const users = [
  {
    username: 'Jeff',
    online: true,
  },
  {
    username: 'Alan',
    online: false,
  },
  {
    username: 'Mary',
    online: true,
  },
  {
    username: 'Jim',
    online: false,
  },
  {
    username: 'Sara',
    online: true,
  },
  {
    username: 'Laura',
    online: true,
  },
];

const Task = () => {
  const people = users.filter(e => e.online);
  const listItems = people.map((e) => <Users users={e.username}online={e.online} />);
  return (
    <div>
    {listItems}
    </div>
  );
};

export default Task;
