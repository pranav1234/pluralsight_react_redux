import React ,{ Component} from 'react';
import {Link} from 'react-router';

class HomePage extends  Component{
  render(){
    return(
      <div className="jumbotron">
          <h1>
      Pluralsigt Administration
            </h1>
       <Link to="about" className="btn btn-primary" >Learn More</Link>
          
      </div>
    )
  }
}

export default HomePage;