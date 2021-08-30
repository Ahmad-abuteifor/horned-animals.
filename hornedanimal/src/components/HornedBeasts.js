import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





class HornedBeasts extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            votes: 0,
          }
        }

        addvotes = () => {
        
            this.setState({
                votes: this.state.votes + 1
            });
        
        
          }
        

        

    render(){
return(
    // <div>
    // <h2>{this.props.title}</h2>
    // <p>
    // {this.props.detales}
    // </p>
    // <img src={this.props.imgUrl} alt={this.props.title}/>


    // </div>







<div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgUrl} />
  <Card.Body>
    <Card.Title> {this.props.title}</Card.Title>
    <Card.Text>
    {this.props.detales} ,<br></br>

    number of votes    {this.state.votes}
    </Card.Text>
    <Button onClick={this.addvotes}> vote to  {this.props.title} </Button>
  </Card.Body>
</Card>
</div>
)

    }
} 


export default HornedBeasts