import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Subha'
        }
        console.log('LifecycleB constructor')
    }

     static getDerivedStateFromProps(props, state){
         console.log('LifecycleB getDerivedStateFromProps')
         return null
     }
     shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
       console.log('LifecycleA getSnapshotBeforeUpdate')
       return null
   }
   componentDidUpdate(){
       console.log('LifecycleA componentDidUpdate')
   }

     componentDidMount(){
         console.log('LifecycleB componentDidMount')
     }
    render() {
        console.log('Lifecycle B render')
        return <div>Lifecycle B</div>
    }
}

export default LifecycleB