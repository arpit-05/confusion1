import  React,{Component} from "react"
//import {Media} from 'reactstrap'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from "reactstrap"
import Menu from "./MenuComponent"
import DishDetail from "./DishDetailComponent"
import {DISHES} from "../shared/dishes"
class Main extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
            
        };
    };
    onDishSelect(dish){
      this.setState({selectedDish:dish,comment:dish.comments});
    }
    
    
    render(){
       
        return (
            <div className="container">
              <div className="row">
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>
                    
              </div>
             
              <DishDetail dish={this.state.dishes.filter((dish) => dish.id===this.state.selectedDish)[0]} />
              
            </div>
          );
      }
}
export default Main;