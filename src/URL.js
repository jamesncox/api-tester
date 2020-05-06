import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SET_URL_INPUT } from './actionTypes'
import { getJSON } from './actions/API'

class URL extends Component {

    state = {
        url: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setURL(this.state.url)
        this.props.getJSON()
    }

    handleClearURL = () => {
        this.setState({
            url: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className="api-url"
                        type="text"
                        placeholder="API URL"
                        name="url" value={this.state.url}
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        className="generate-button"
                        type="submit"
                        value="Test URL"
                    />
                </form>
                <button onClick={this.handleClearURL}>Clear URL</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setURL: (url) => dispatch({ type: SET_URL_INPUT, payload: url }),
    getJSON: () => dispatch(getJSON())
})

export default connect(null, mapDispatchToProps)(URL)