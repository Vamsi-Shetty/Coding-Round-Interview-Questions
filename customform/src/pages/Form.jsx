import React, {useState} from 'react'
import './form.css'

const Form = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log("email")
  }
  return (
    <div className='form-container'>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
         type='email'
          />
        <br />
        <label>Password</label>
        <input
         type='password'
          />
        <br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Form