import React, { Component } from 'react';
import api from '../../services/api'

import './style.css';

export default class Signup extends Component {

    state = {
        email: '',
        password: '',

        error: ''
    }

    componentDidMount() {
        if (localStorage.getItem('session-token')) {
            this.props.history.push('/')
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: "Fill in all the fields." })
        } else {
            await api.post("/api/user/login", { email, password }).then(res => {
                if (res.data.error) {
                    this.setState({ error: res.data.error })
                } else {
                    localStorage.setItem('session-token', res.data.token)
                    this.props.history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

  render() {
    return (
        <div className="container">
            <form onSubmit={ e => this.handleSubmit(e) }>
                <h1 className="title">LOGIN</h1>
                { this.state.error && <p className="err">{ this.state.error }</p> }
                <input type="email" name="email" placeholder="Your email" onChange={ e => this.handleInput(e) } />
                <input type="password" name="password" placeholder="Your password" onChange={ e => this.handleInput(e) } />
                <div className="btns">
                    <a href="/signup" className="link">Não sou cadastrado</a>
                    <button type="submit" className="btn-crismon">Entrar</button>
                </div>
            </form>
        </div>
    );
  }
}
