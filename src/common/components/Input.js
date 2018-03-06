import React from 'react';
const Input = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <div className="form-group">     
      <input value={value} onChange={onChange} type="text" className="form-control"  placeholder="添加用户" />
      <button className="btn btn-primary"> Add </button>
    </div>
  </form>
)
export default Input;