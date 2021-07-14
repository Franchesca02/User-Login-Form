import React from 'react';
import Icon from '../files/Atomic.jpg';


class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        // this.handleChange = this.handleChange(this)
        // this.submitChange = this.submitChange(this)
    }
    render() {


        return (
            <div className="left">
                {/* <div className="inner"> */}

                <div className="texts">
                    <h2 className="welcome">Welcome to star war the clone war</h2>
                    <div className="atomic">
                        <img src={Icon} alt="Star wars atomic car" />
                    </div>

                </div>
            
            
            <div className="black">
                    <p>Hidden texts</p>
                </div> 
            </div>
        );
    }
}
export default Left;