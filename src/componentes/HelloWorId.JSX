import React from 'react'

class HelloworId extends React.Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div>
                <p>Salve {this.props.name}!</p>
            </div>
        )
    }

}
export default HelloworId