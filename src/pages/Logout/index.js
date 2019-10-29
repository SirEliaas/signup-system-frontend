import { Component } from 'react'

export default class Logout extends Component {

    logout = async () => {
        const token = await localStorage.getItem('session-token')
        if (!token) {
            this.props.history.push('/login')
        } 

        await localStorage.removeItem('session-token')
        this.props.history.push('/login')
    }

    componentDidMount() {
        this.logout()
    }

    render() {
        return null
    }
}