import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={event => props.handleSubmit(event)}>
      <label>
        Name:
        <input
          type="text"
          value={props.user.name}
          name="name"
          onChange={event => props.handleChange(event)} />
      </label>

      <label>
        Email:
        <input
          type="text"
          value={props.user.email}
          name="email"
          onChange={event => props.handleChange(event)} />
      </label>

      <button>Submit</button>
    </form>

  );
};

export default Form;
