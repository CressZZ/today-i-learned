import React from 'react';
import Contact from './Contact';

class App extends React.Component {
    constructor(props){
      super(props)
        this.state={
            name: ""
        }
      }

    render() {
        return (
                <div>

                  <button onClick={()=>{this.setState({name: 'Cress'})}}>click me</button>
                  <h1>Hello ssssddssssssssssjjjkkknklbRsas {this.state.name}</h1>
                  <p>hiseesss</p>
                  <Contact/>
                </div>
        );
    }
}
export default App;
// module.export = App
