import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        return this.state.isLoggedIn && <div>Welcome you</div>

        {/*let message
        if (this.state.isLoggedIn) {
            <div>Welcome you</div>
        }else{
            message = <div>Welcome radha</div>
        }

        return <div>{message}</div>*/}



        {/*if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome you
                </div>
            )
        }else{
            return(
                <div>
                    Welcome radha
                </div>
            )
        }*/}
        {/*//return (
        //    <div>
        //        <div>Welcome you!</div>
        //        <div>Welcome radha</div>
        //    </div>
        //)*/}
    }
}

export default UserGreeting
