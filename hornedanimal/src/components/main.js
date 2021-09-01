import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeates from './SelectedBeast';
// import Form from 'react-bootstrap/Form'

import array from './../assets/data.json';

import HorneForm from './HorneForm'


class Main extends React.Component {

  

    constructor(props) {
        super(props);
        this.state = {
            chooseType: []
        }
    }

    typechoosing = (horns) => {
        array.filter(value => {
            if (value.horns == horns) {
                this.setState({ chooseType: value })
            }

        })


    }

    render() {
        return (


            <main>

                <HorneForm
                    typechoosing={this.typechoosing} 
                
                    />


                {array.map((value, index) => {
                    return (
                      



                        <HornedBeasts

                            title={value.title}
                            detales={value.description}
                            imgUrl={value.image_url}
                            horneNum={value.horns}
                            update={this.props.update}
                            filterFunction={this.props.filterFunction}
                        typechoosing={this.typechoosing}
                        />



                    )
                })
                }









            </main>

        )

    }
}


export default Main