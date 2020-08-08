import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Education from './components/Education'
import Work from './components/Work'
import Project from './components/Project'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      page : "home"
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  
  handlePageChange(e){
    this.setState({
      page : e.target.value
    })
    //console.log("Button pressed")
    //console.log(this.state.page)
  }

  componentDidMount(){
    console.log(this.state.page)
  }

  render(){
    return(
      <div>
            <Header onChange={this.handlePageChange}/>
            {this.state.page ==="home" && <Home/>}
            {this.state.page ==="education" && <Education/> }
            {this.state.page === "work" && <Work/>}
            {this.state.page === "project" && <Project/>}
            <Footer/>
      </div>
    )
    }
}

export default App