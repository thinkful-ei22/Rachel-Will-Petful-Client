import React from 'react';
import Pet from './components/Pet';
import './App.css';
import { fetchCat } from './actions';
import { connect } from 'react-redux';
//import { Component } from 'react';

export  class Dashboard extends React.Component {
   

  
    componentDidMount() {
        console.log('Component Did Mount Fired');
        this.props.dispatch(fetchCat());
    }


    
    render(){  
        
    // const { dogToAdopt } = props;
    // const { catToAdopt } = props;
       return (
        <div className="container">
           <Pet animalToAdopt={this.props.dogData} />

            <Pet animalToAdopt={this.props.catData} />
     </div>


       );
    }
   } 
   export const mapStateToProps = state => ({
       catData: state.cat.data,
       dogData: state.dog.data
   })

   export default connect(mapStateToProps)(Dashboard);
