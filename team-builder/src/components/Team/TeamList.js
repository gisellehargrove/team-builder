import React from 'react';

const TeamList = (props) => {
  console.log(props, 'TeamList')
  if(!props.team) return <div>Loading...</div>
  return (
    <div className="team-list">
      {props.team.map((user, key) =>
        <div key={key} className="userContainer">
          <div className="name">{user.name}</div>
          <div className="email">{user.email}</div>
        </div>
      )}
    </div>
  );
};

export default TeamList;
