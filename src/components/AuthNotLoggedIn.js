import React, { PureComponent } from 'react'

class AuthNotLoggedIn extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Not Logdin</h1>
            </div>
        )
    }
}

export default AuthNotLoggedIn