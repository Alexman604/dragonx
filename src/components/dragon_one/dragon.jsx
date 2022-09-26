import { Component } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import DragonService from "../../services/fetchdata";

class DragonPage extends Component {
    constructor (props) {
        super(props) 
        
    }
    state = {
        name: null,
        description: null,
        images: null,
        wikipedia: null,
        dry_mass_kg: null,
        heat_shield: null,
        height_w_trunk: null,
        thrusters: null,
    }

    getDragonInfo = new DragonService();

    componentDidMount () {
        this.updateChar()
    }

    updateChar = () => {
        const url = "https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f";
        const url1 = "https://api.spacexdata.com/v4/dragons";
        this.getDragonInfo.getResource(url)
            .then(data =>{
                console.log("all data =", data);
                this.setLocalStorage(data);
                this.setState({
                    name: data.name,
                    description: data.description,
                    image1: data.flickr_images,
                    image2: data.flickr_images[1],
                    image3: data.flickr_images[2],
                    image4: data.flickr_images[3],
                    wikipedia: data.wikipedia,
                    dry_mass_kg: data.dry_mass_kg,
                    heat_shield: data.heat_shield,
                    height_w_trunk: data.height_w_trunk,
                    thrusters: data.thrusters,
                })


            })
            
        }

        setLocalStorage (data) {
            localStorage.setItem('data', JSON.stringify(data))
        }

        render() {
    console.log(this.state.flickr_images);

    

    
    return (
<div> hello </div>
    )

    
}



}




export default DragonPage