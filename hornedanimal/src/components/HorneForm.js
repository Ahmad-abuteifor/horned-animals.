import React from 'react'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';





class HorneForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            horne:'jjj',
        }
    }

  

    


    horenType=((e)=>{

this.setState({horne:e.target.value})
console.log(this.state.horne);
this.props.typechoosing(this.state.horne)
console.log(e.target.value);

    })






    render() {
        return (
                    <Form.Select aria-label="Default select example"   onChange={this.horenType}>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Hundred</option>
                    </Form.Select>
            
        )

    }



}

export default HorneForm