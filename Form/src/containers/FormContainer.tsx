import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";


class FormContainer extends Component<any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
     
        name: "",
        age: "",
        gender: "",
        hobbies: [],
        password:"",
        department:"",
        confirm_password:"",
        errors:{
        nameError:'',
        pwdError:'',
        ageError:'',
        deptError:'',
        genderError:'',
        hobbiesError:'',
        cnfPwdError:'',
        submitError:'',
        },
      genderOptions: ["Male", "Female"],
      departmentOptions: ["Development", "Testing", "Business","Human Resource"],
      hobbiesOptions: ["Playing", "Music", "Traveling", "Reading"]
    };

    this. handleNameChange = this. handleNameChange.bind(this);
    this. handlePassword = this. handlePassword.bind(this);
    this. handleConfirmPassword = this. handleConfirmPassword.bind(this);
    this. handleAge = this. handleAge.bind(this);
    this. handleDepartment = this. handleDepartment.bind(this);
    this. handleHobbies = this. handleHobbies.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

    
  }

  //name

  handleNameChange = (event:any) => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };

  validateName = () => {
    const { name } = this.state;
    this.setState({
      nameError:
        (name.length >3 ? null : 'Name should be more than 3 characters')
        ||(name.match(/^[a-zA-Z]+$/)?null:'You can use only letters')
    });
  }


//password
handlePassword=(event:any)=>
{
  this.setState({password:event.target.value},()=>
  {
    this.validatePassword();
  })
}
validatePassword=()=>{
  const {password}=this.state;
  this.setState({
    pwdError:
    (password.length> 8 ?null:'password length should be more Than 8')
    
  })
}
//confirm password
handleConfirmPassword=(event:any)=>
{
  this.setState({confirm_password:event.target.value},()=>
  {
    this.validateConfirmPassword();
  })
}
validateConfirmPassword=()=>{
  const {confirm_password}=this.state;
  this.setState({
    cnfPwdError:
    confirm_password.match(this.state.password)?null:'password is not matched'
  })
}

//Age
handleAge=(event:any)=>
{
  this.setState({age:event.target.value},()=>
  {
    this.validateAge();
  })
}
validateAge=()=>{
  const {age}=this.state;
  this.setState({
    ageError:
    age> 18?null:'please enter age above 18 yrs'
  })
}
//Department
handleDepartment=(event:any)=>
{
  this.setState({department:event.target.value},()=>
  {
    this.validateDepartment();
  })
}
validateDepartment=()=>{
  const {department}=this.state;
  this.setState({
    deptError:
    department==={department}?'please select any option':null
  })
}

//Gender
handleGender=(event:any)=>
{
  this.setState({gender:event.target.value},()=>
  {
    this.validateGender();
  })
}
validateGender=()=>{
  const {gender}=this.state;
  this.setState({
    genderError:
    gender!=="undefined"?null:'please select any option'
  })
}

//CheckBox
handleHobbies=(event:any)=>
{
  this.setState({hobbies:event.target.value},()=>
  {
    this.validateHobbies();
  })
}
validateHobbies=()=>{
  const {hobbies}=this.state;
  this.setState({
    hobbiesError:
    hobbies!=="undefined"?null:'please select any option'
  })
}
handleFormSubmit=(event:any)=>
{
this.validateSubmit();
alert(this.state.submitError)

}
validateSubmit=()=>{

  this.setState({
    submitError:
    ((this.state.nameError===null)&&(this.state.pwdError===null)&&(this.state.cnfPwdError===null)
    &&(this.state.ageError===null)&&(this.state.deptError===null)&&(this.state.genderError===null)
    &&(this.state.hobbiesError===null)?'form is successfully filled':'fill all input field before submit')
})
}
 //Reset
  handleClearForm(e:any) {
    alert("Hey do you really want to Reset");
    this.setState({
        name: "",
        age: "",
        gender: "",
        hobbies: [],
        password:"",
        confirmPassword:"",
        department:""
      
    });
  }


  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       {/* Name of the user */}
 
     {this.state.nameError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <Input
          className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
          id='name'
          inputType={"text"}
          title={" Name"}
          name={"name"}
          value={this.state.name}
          placeholder={"Enter your name"}
          handleChange1={this. handleNameChange}
          onBlur1={this.validateName}
      
        />
        <div style={{color: "red"}}>{this.state.nameError}</div>
      
        
         {/* password */}
        {this.state.pwdError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <Input
          inputType={"password"}
          title={" Password"}
          name={"password"}
          value={this.state.password}
          placeholder={"Enter your password"}
          handleChange1={this. handlePassword}
          onBlur1={this.validatePassword}
        />
         <div style={{color: "red"}}>{this.state.pwdError}</div>
        
        {/* Confirm Password */}
        {this.state.cnfPwdError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <Input
          inputType={"password"}
          title={" Confirm Password"}
          name={"confirm_password"}
          value={this.state.confirm_password}
          placeholder={"Confirm password"}
          handleChange1={this. handleConfirmPassword}
          onBlur1={this.validateConfirmPassword}
        />
        <div style={{color: "red"}}>{this.state.cnfPwdError}</div>
       {/* Age */}
       {this.state.ageError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <Input
          inputType={"number"}
          name={"age"}
          title={"Age"}
          value={this.state.age}
          placeholder={"Enter your age"}
          handleChange1={this.handleAge}
          onBlur1={this.validateAge}
        />
         <div style={{color: "red"}}>{this.state.ageError}</div>
          {/* Department */}
          {this.state.deptError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
          <Select
          title={"Department"}
          name={"department"}
          options={this.state.departmentOptions}
          value={this.state.department}
          placeholder={"Select Department"}
          handleChange1={this. handleDepartment}
          onBlur1={this.validateDepartment}
        />
         <div style={{color: "red"}}>{this.state.deptError}</div>

        {/* Gender */}
        {this.state.genderError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <RadioButton
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.gender}
          selectedOptions={this.state.gender}
          handleChange1={this. handleGender}
       
         
        />
           <div style={{color: "red"}}>{this.state.genderError}</div>

        {/* Hobbies */}
        {this.state.hobbiesError===null? <span style={{color:"green"}}>&#x2714;</span>:<span style={{color:"red"}}>&#42;</span>}
        <CheckBox
          title={"Hobbies"}
          name={"hobbies"}
          options={this.state.hobbiesOptions}
          selectedOptions={this.state.hobbies}
          handleChange1={this. handleHobbies}
        
        />
           <div style={{color: "red"}}>{this.state.hobbiesError}</div>
    
      {/*Submit */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}  
        />
         {/* Clear the form */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Reset"}
          style={buttonStyle}
        />
     
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};


export default FormContainer;
