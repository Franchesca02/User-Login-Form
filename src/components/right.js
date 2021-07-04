import React from 'react';


class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    render() {


        return (
            <div className="right">
                <div className="sign-up">
                    
                        <form>
                            <h5 className="account">Sign in to continue to your account</h5>
                        <div className="email">
                            <label className="passwd">Email Address</label>
                            <input type="text" placeholder="email address" value={this.state.email} />
                            </div>
                            <br />

                        <div className="password">
                            <label className="passwd"> Password
                                <input type="password" placeholder="enter strong password" value={this.state.password} />
                            </label>
                        </div>
                        <div className="btn"><button onClick={('')}>Sign in</button>
                        </div>

                        </form>
                </div>
            </div>
        )
    }
}
export default Right;