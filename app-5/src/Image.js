import React from 'react'

class Image extends React.Component{
   render(){
      return(
         <div>
            <img src = {this.props.url} />
            <div>Error 409</div>
         </div>
      )
   }
}

export default Image;