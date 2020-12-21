
import React from 'react';

const friends = [
  { id: 893, name: 'Mikenzi' },
  { id: 871, name: 'Cash' },
  { id: 982, name: 'Steven' },
  { id: 161, name: 'Kimmy' },
  { id: 117, name: 'Doug' },
];

const List = (props) => {
  // Render a list using the "friends" being passed in.
  // prettier-ignore
  return (
    <li>
      {props.name}
    </li>
  );
};

const Task = () => {
  return (

    <ul>
      {
        friends.map((e) =>
          <List key={e.id} name={e.name} />
        )
      }
    </ul>
    //  <List friends={friends} />

  );
};

export default Task;
