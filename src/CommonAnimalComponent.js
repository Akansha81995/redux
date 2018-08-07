import React from 'react';
import { connect } from 'react-redux'
import { myActionCreator } from './actions'


class CommonAnimalComponent extends React.Component {

    render() {
        return (
            <b>Hello {this.props.match.params.animalName}</b>

        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapActionsToProps = {
    onActionAkku: myActionCreator
}

export default connect(mapStateToProps, mapActionsToProps)(CommonAnimalComponent)
