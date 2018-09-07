import React from 'react';
import Pet from './components/Pet';
import './App.css';
import { fetchCat, fetchDog, adoptCat, adoptDog } from './actions';

import { connect } from 'react-redux';
//import { Component } from 'react';

export  class Dashboard extends React.Component {
   

  
    componentDidMount() {
        console.log('Component Did Mount Fired');
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }


    
    render(){  
        console.log(this.props);
        if(!this.props.catData || !this.props.dogData ){
            return <h2>Loading</h2>
        } else {

        
        
    // const { dogToAdopt } = props;
    // const { catToAdopt } = props;
       return (
        <div className="container">
           <Pet 
           animalToAdopt={this.props.dogData}
           onAdoptPet={() => this.props.dispatch(adoptDog())} />

            <Pet 
            animalToAdopt={this.props.catData}
            onAdoptPet={() => this.props.dispatch(adoptCat())}  />
     </div>


       );
    }
    }
   } 
   export const mapStateToProps = state => ({
       catData: state.cat.data,
       dogData: state.dog.data
   })

   export default connect(mapStateToProps)(Dashboard);
