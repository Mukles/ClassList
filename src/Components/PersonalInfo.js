import React, { Component } from "react";
import { Consumer } from "./Context";
import { Link } from 'react-router-dom';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      fullname: {}
    }
  }

  componentDidMount() {
    this.setState({ fullname: this.props.match.params.fullname });
  }
  render(){
    console.log(this.props.match.params.fullname );
    return(
      <section id='personal-data' className='align-items-center d-flex' style={{height: '100vh'}}>
        <div className='col-md-6 mx-auto'>
        <div className='container'>
        <div className='row'>
        <Consumer>
          {value =>{
            const{ contacts } = value;
            const matchData = contacts.find( contact => contact.fullname === this.state.fullname);
            if(!matchData){
             return (
               <div className='no-data text-center mx-auto'>
                <h1>No Data Found</h1>
                <Link to='/' className='btn btn-warning'>Back Home</Link>
               </div>
             )
            }
            const { fullname, cell, dob:{ age }, email, gender, location: {city, country}, picture: {large, medium, thumbnail} } = matchData;
            return(
              <>
              <div className='col-md-6 d-flex align-items-center justify-content-center' style={{borderRight: '1px solid #ddd'}}>
                <img className='img-fluid border-left' src={large} alt={fullname} style={{width: '150px', height: '150px', borderRadius:'50%'}}/>
              </div>
              <div className='col-md-6'>
                <ul style={{listStyle: 'none'}}>
                  <li className='my-2 h6'>Name: {fullname} </li>
                  <li className='my-2 h6'>Email: {email} </li>
                  <li className='my-2 h6'>Gender: {gender}</li>
                  <li className='my-2 h6'>City: {city} </li>
                  <li className='my-2 h6'>City: {city} </li>
                  <li className='my-2 h6'>country: {country}</li>
                  <li className='my-2 h6'>Age: {age}</li>
                </ul>
              </div>
              </>
            )
          }}
        </Consumer>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default PersonalInfo
