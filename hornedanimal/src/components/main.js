import React from 'react';

import HornedBeasts from './HornedBeasts';
import SelectedBeates from './SelectedBeast';
import array from './../assets/data.json';

// let dataArray = array.map(
//     (elemnt) => {
//         return <HornedBeasts

//             title={elemnt.title}
//             detales={elemnt.description}
//             imgUrl={elemnt.image_url}

//             handleClose={elemnt.props.handleClose}



//         />
//     }



// )

class Main extends React.Component {

   
    render() {
        return (

           
            <main>
                

                 
                { array.map((value,index) => {
                    return(
                 <HornedBeasts
        
                    title={value.title}
                    detales={value.description}
                    imgUrl={value.image_url}
                    update={this.props.update}
                    filterFunction={this.props.filterFunction}
                    />
                    )
                })
        
            } 


        
                
        




            </main>

        )

    }
}


export default Main