import React,{Component} from 'react';
import {CardList} from './component/card-list/card-list.jsx'
import './App.css';
import {SearchBox} from'./component/search-box/search-box.jsx'
class App extends Component {

  constructor()
  {
    super()
    this.state = {
      projects:[ 
        {
          name:'The Recruiter',
          id:'Recruiter',
          link:'https://github.com/yanmeng26/The-Recruiter'
        },
       {
         name:'Chat Room',
         id:'Chat',
         link:'https://meng-chat-room-app.herokuapp.com/'
       },
       {
        name:'Weather App',
        id:'Weather',
        link:'https://meng-weather-app.herokuapp.com/'
      },
      {
        name:'E-Commerce ',
        id:'Commerce',
        link:'https://meng-e-commerce-app.herokuapp.com/'
      },
      {
        name:'Resume',
        id:'Resume',
        link:'https://meng-resume-app.herokuapp.com/'
      },
      {
        name:'Other App',
        id:'Other',
        link:'https://meng-other-app.herokuapp.com/'
      }
      ],
      searchField:""
    }
  }

  render()
  {
    const{projects, searchField } = this.state;
    const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(searchField.toLowerCase()))
      return(
        <div className = 'App'>
          <h1> Meng's Projects</h1>
          <SearchBox
              placeholder = 'search project'
              handleChange = {e=>this.setState ({searchField:e.target.value })}
              />

         
        <CardList projects ={filteredProjects}>
        
          </CardList>
          
        </div>
      )
  }
  
}

export default App;

