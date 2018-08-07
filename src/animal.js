import React from 'react';
import { connect } from 'react-redux'
import { myActionCreator } from './actions'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CommonAnimalComponent from './CommonAnimalComponent'

class Animal extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <ol>
                {
                    this.props.animalNames.map((eachAnimal, i) => {
                        return <li key={i}><Link to={`${this.props.match.url}/${eachAnimal}`}>{eachAnimal}</Link></li>
                    })
                }
                <div>
                    <Route path={`${this.props.match.url}/:animalName`} component={CommonAnimalComponent} />
                </div>

            </ol>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapActionsToProps = {
    onActionAkku: myActionCreator
}

export default connect(mapStateToProps, mapActionsToProps)(Animal)
