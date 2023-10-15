import React, { Component } from 'react'

export default class About extends Component {
    state={
        fullName:"saber khorchfi",
        bio:"20 ans",
        imgsrc:"",
        profesion:"etudiant",
        show:true
    }
    change=()=>{
        this.setState({show:!this.state.show})
        
    }

        
        

    
  render() {
    return (
      <div>
        {this.state.show?<>{this.state.fullName}{this.state.bio}{this.state.imgsrc}{this.state.profesion}
</>:null}
        <br></br>
        <button onClick={this.change}>show</button>
        
      </div>
    )
  }
}
