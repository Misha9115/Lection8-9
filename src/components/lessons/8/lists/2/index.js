import React from 'react';

const friends = ['Mikenzi', 'Cash', 'Steven', 'Kimmy', 'Doug'];

const List = (props) => {
  // Render a list using the "friends" being passed in.
  // prettier-ignore
  
  return (
    <ul>
 <ol>
   {props.data}
 </ol>
    </ul>
  );
};

const Task = () => {
  const listItems = friends.map((friend) => <List data={friend}key={friend.toString()} />);
  return (
    <div>
     {listItems}
    </div>
  );
};

export default Task;
