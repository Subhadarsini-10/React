import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionClick from './Component/FunctionClick'
import ClassClick from './Component/ClassClick'
import EventBind from './Component/EventBind'
import ParentComponent from './Component/ParentComponent'
import UserGreeting from './Component/UserGreeting'
import NAmeList from './Component/NameList'
import Stylesheet from './Component/Stylesheet'
import Inline from './Component/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}>Success</h1>
        {/*<Inline />*/}
        {/*<Stylesheet primary = {true}/>*/}
        {/*<NAmeList />*/}
        {/*<UserGreeting />*/}
        {/*<ParentComponent />*/}
        {/*<EventBind />*/}
        {/*<FunctionClick />*/}
        {/*<ClassClick />*/}
        {/*<Counter/>*/}
        {/*<Message/ >*/}
        {/*<Greet name = "Subha" heroName = "SuperWomen">
          <p>This is children props</p>
        </Greet>*/}
        {/*<Greet name = "Megha" heroName = "BatWomen">
          <button>Action</button>
        </Greet>*/}
        {/*<Greet name = "Angela" heroName = "WonderWomen"/>*/}
        {/*<Welcome name = "Subha" heroName = "SuperWomen"/>*/}
       {/* <Hello /> */}
      </div>
    );
  }
  
}

export default App;
