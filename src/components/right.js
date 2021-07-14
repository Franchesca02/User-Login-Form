import React from 'react';

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


class Right extends React.Component {
    state = {

        disabled: false
    }
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
      password: ""
        }
        this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
        // this.state = { value: '' }
    }

    handleChange(event) {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
    
        return;
      }
      handleSubmit(event) {
        event.preventDefault();
        let formFields = [
          "emailAddress",
          "password"
        ];
        let isValid = true;
        formFields.forEach(field => {
          isValid = this.validateField(field) && isValid;
        });
    
        if (isValid) this.setState({ isFormSubmitted: true });
        else this.setState({ isFormSubmitted: false });
    
        return this.state.isFormSubmitted;
      }    
      validateField(name) {
        let isValid = false;
    
    if (name === "emailAddress") isValid = this.validateEmailAddress();
        else if (name === "password") isValid = this.validatePassword();
        return isValid;
      }

      validateEmailAddress() {
        let emailAddressError = "";
        const value = this.state.emailAddress;
        if (value.trim === "") emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
          emailAddressError = "Email is not valid";
    
        this.setState({
          emailAddressError
        });
        return emailAddressError === "";
      }
    
      validatePassword() {
        let passwordError = "";
        const value = this.state.password;
        if (value.trim === "") passwordError = "Password is required";
        else if (!passwordValidator.test(value))
          passwordError =
            "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    
        this.setState({
          passwordError
        });
        return passwordError === "";
      }

    handleChange = (e) => {
        if(e.target.value.length >=8) 
        this.setState({
            disabled: false
            // [this.state.target.value]
        });
        else if(e.target.value >=$){
            this.setState({
                disabled: true
            });
        }
    }
   
    render() {
        return (
            <div className="right">
                <div className="sign-up">
                    
                        <form>
                            <h5 className="account">Sign in to continue to your account</h5>
                        <div className="email">
                            <label className="passwd">Email Address</label>
                            <input type="text" placeholder="Email address" onChange={this.handleChange} />
                            </div>
                            <br />

                        <div className="password">
                            <label className="passwd"> Password
                                <input type="password" placeholder="Enter strong password" onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="btn">
                            <button disabled={this.state.disabled} >Sign in</button>
                        </div>

                        </form>
                </div>
            </div>
        )
    }
}
export default Right;