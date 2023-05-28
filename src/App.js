import './scss/app.scss';
import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Features from './components/Main/Features';
import Boost from './components/Main/Boost';
import Knowledge from './components/Main/Knowledge';
import Users from './components/Main/Users';
import Work from './components/Main/Work';
import Team from './components/Main/Team';
import Footer from './components/Footer.js/Footer';
import Loader from './components/Loader';

class  App extends Component {
  constructor(props){
    super(props);

    this.state= {
      isLoading : true  , 
      isLoaded : false 
    };
  }

  componentDidMount(){
    setTimeout(() => {
      document.querySelector('.loader').classList.add('fade-out');
    }, 100);
    
    setTimeout(() => {
      
      this.setState({
        isLoading : false
      });
    }, 1000);


   setTimeout(() => {
    this.setState({
      isLoaded : true 
    })
   }, 1000);
  }
  render(){
    
    const { isLoading , isLoaded }= this.state ; 


    return (
      <React.Fragment>
       
        {isLoading && <Loader isLoading={isLoading} isLoaded={isLoaded} /> }
        
        {isLoaded && (
           <Fragment>
            <Header />
              <main>
                <Features />
                <Boost />
                <Knowledge />
                <Users />
                <Work />
                <Team />
              </main>
              <Footer />
           </Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default App;
