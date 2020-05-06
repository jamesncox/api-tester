import React from 'react'
import { connect } from 'react-redux'
import { getJSON, clearJSON } from './actions/API'
import Json from './Json'
import URL from './URL'

function Container(props) {

    const handleClear = () => {
        props.clearJSON()
    }

    return (
        <div>
            <URL />
            <Json />
            <button onClick={handleClear}>Clear JSON</button>
        </div>
    )
}

export default connect(null, { getJSON, clearJSON })(Container)