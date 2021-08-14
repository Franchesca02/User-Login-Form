import React from 'react';




class Right extends React.Component {
    state = {

        disabled: false
    }
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = (e) => {
        if(e.target.value.length >=8) 
        this.setState({
            disabled: false
            // [this.state.target.value]
        });
        else {
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