import React from 'react';

const Form = (props) => {
  console.log(props)
  return (
    <form onSubmit={event => props.handleSubmit(event)}>
      <label>
        Name:
        <input
          type="text"
          value={props.user.name}
          name="name"
          onChange={event => props.onChange(event)} />
      </label>

      <label>
        Email:
        <input
          type="text"
          value={props.user.email}
          name="email"
          onChange={event => props.onChange(event)} />
      </label>
    </form>

  );
};

export default Form;
