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
            <button onClick={handleClear}>Clear JSON</button>
            <Json />
        </div>
    )
}

export default connect(null, { getJSON, clearJSON })(Container)