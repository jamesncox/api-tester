import React from 'react'
import { connect } from 'react-redux'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

function Json(props) {
    return (
        <div className="json">
            <JSONPretty id="json-pretty" data={props.json}></JSONPretty>
        </div>
    )
}

const mapStateToProps = (state) => ({
    json: state.json.json
})

export default connect(mapStateToProps)(Json)