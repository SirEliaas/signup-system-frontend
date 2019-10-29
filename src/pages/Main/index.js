import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {

    state = {
        user: [],
    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        const token = await localStorage.getItem('session-token')
        const response = await api.get('/api/user/getUser', { headers: { Authorization: token } })
        
        if (!response.data.user) {
            this.props.history.push('/login')
        } else {
            this.setState({
                user: response.data.user
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Hello, <span style={{color: 'crimson'}}>{ this.state.user.username }</span>.</h1>
            </div>
        )
    }
}