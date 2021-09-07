import React from "react";

import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      fullName:"",
      emailId:"",
      gender:"female",
      roleAppliedFor:"mern",
      coverLetter:"",
      termAndConds:true,
      errors:{
        fullName:"",
        emailId:"",
        coverLetter:"",
        termAndConds:"",
      },
    }; 
  }

  handleChange = ({target: { name, value, type,checked }}) => {
  if(type === "checkbox") value = checked;

  const errors = this.state.errors;

  const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


  switch(name) {
    case "fullName": {
      if(value.length <= 5) {
        errors.fullName="Full name should be atleast 6 characters";
      } else errors.fullName="";
      break;
    }
    case "emailId": {
      if(value.length <=5) {
        errors.emailId = "Email should be atleast 6 characters";
      } else if(!validateEmail.test(value)) {
          errors.emailId ="Email is Invalid";
      } else errors.emailId = "";
      break;
    }
    case "coverLetter": {
      if(value.length <=9) {
        errors.coverLetter="There should be atleast 10 characters";
      } else errors.coverLetter="";
      break;
    }
    case "termAndConds": {
      if(!value) {
        errors.termAndConds="Terms should be accepted";
      } else errors.termAndConds="";
      break;
    }
  }
  console.log(errors);

    this.setState({[name]:value, errors})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <>
      <div className="container">
      <p>Job Application Form</p>
      <form onSubmit={this.handleSubmit} action="/">
        <div>
          <label>Full Name : </label>
          <input
          name="fullName"
          type="text" value={this.state.fullName} 
          onChange={this.handleChange} />
          <span>{this.state.errors.fullName}</span>
        </div>
        <br/>
        <div>
        <label>Email ID : </label>
        <input 
        name="emailId"
        type="email" value={this.state.emailId}
        onChange={this.handleChange} />
        <span>{this.state.errors.emailId}</span>
        </div>
        <br/>
        <div>
        <label>Gender : </label>
        <input 
        name="gender"
        type="radio"
        value="male"
        checked={this.state.gender === "male"}
        onChange={this.handleChange} />
        <label>Male</label>
        <input 
        name="gender"
        type="radio"
        value="Female"
        checked={this.state.gender === "female"}
        onChange={this.handleChange} />
        <label>Female</label>
        <input 
        name="gender"
        type="radio"
        value="other"
        checked={this.state.gender === "other"}
        onChange={this.handleChange} />
        <label>Other</label>
        </div>
        <br/>
        <div>
          <label>Role Applied For : </label>
          <select 
          name="roleAppliedFor"
          value={this.state.roleAppliedFor}
          onChange={this.handleChange}>
            <option value="react">React Developer</option>
            <option value="node">Node Developer</option>
            <option value="mern">MERN Developer</option>
          </select>
        </div>
        <br/>
        <div>
          <label>Cover Letter : </label>
          <textarea 
          name="coverLetter"
          value={this.state.coverLetter}
          onChange={this.handleChange}></textarea>
          <span>{this.state.errors.coverLetter}</span>
        </div>
        <br/>
        <div>
          <input 
          name="termAndConds"
          type="checkbox" checked={this.state.termAndConds}
          onChange={this.handleChange}/>
          <label> I agree T&C</label>
          <span>{this.state.errors.termAndConds}</span>
        </div>
        <br/>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      </>
    )
  }
}

export default App;