import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            contactInfo: {
                fullName: '',
                email: '',
                phone: '',
                businessGoal: ''
            },
            submitted: false
        }    
    }
    _handleChange = (e) => {
        const attributeName = e.target.name;;
        const attributeValue = e.target.value;
        const contactInfo = {...this.state.contactInfo};
        contactInfo[attributeName] = attributeValue;
        this.setState({ contactInfo })
    }
    _handleSubmit = (e) => {
        // e.preventDefault();
        const payload = this.state;
        axios.post(`/sayHello`, payload)
        .then((res) => {
            console.log("Thanks!");
            const submitted = !this.state.submitted
            this.setState({submitted})
        }).catch(err => console.log(err));
        
    }
    render() {
        if (this.state.submitted) {
            return <div><p>Thanks! We'll be in touch shortly</p></div>
        }
        return <div>
        <div className="contactForm" id="contact">
            <h4>Send me an email</h4>
            <form onSubmit={this._handleSubmit}>
              <div>
                <div className="label">
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <div>
                    <input 
                    type="text" 
                    onChange={this._handleChange} 
                    value={this.state.contactInfo.fullName} 
                    name="fullName"
                    placeholder="Full Name"
                    required
                    />
                </div>
              </div>
              <div>
                <div className="label">
                  <label htmlFor="email">Email Address</label>
                </div>
                <div>
                <input 
                type="text" 
                onChange={this._handleChange} 
                value={this.state.contactInfo.email} 
                name="email"
                placeholder="Email Address"
                required
                />
                </div>
              </div>
              <div>
                <div className="label">
                  <label htmlFor="phone">Phone</label>
                </div>
                <div>
                <input 
                    type="text" 
                    onChange={this._handleChange} 
                    value={this.state.contactInfo.phone} 
                    name="phone"
                    placeholder="Phone Number"
                />
                </div>
              </div>
              <div>
                <button className="button button-primary">Get In Touch!</button>
              </div>
            </form>
          </div>
          </div>
    }
}

export default ContactForm;