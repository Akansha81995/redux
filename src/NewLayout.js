import React from 'react'
import { connect } from 'react-redux'
import { myActionCreator } from './actions'

class NewLayout extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        this.myActionCaller = this.myActionCaller.bind(this)
        this.updateValue = this.updateValue.bind(this)
    }
    updateValue(event) {
        this.setState({
            name: event.target.value
        })
    }
    myActionCaller() {
        this.props.onActionAkku(this.state.name)
    }
    componentDidMount() {
        console.log('In layout props => ', this.props)
    }
    render() {
        return (
            <div>
                {this.props.name}
                <input onChange={this.updateValue}/>
                <button onClick={this.myActionCaller}>My Button</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
const mapActionsToProps = {
    onActionAkku: myActionCreator
}

export default connect(mapStateToProps, mapActionsToProps)(NewLayout)