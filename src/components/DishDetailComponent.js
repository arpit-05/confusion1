import React,{Component} from "react"
import {Card,CardImg,CardTitle,CardText,CardBody} from "reactstrap"
class DishDetail extends Component{
    
    renderDish(dish){
          if(dish!=null)
            return(
              <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
    
              </Card>
            );
          
          else
            return(<div></div>)
          
        }
    render(){
        const dish=this.props.selectedDish;
        return(
            <div className="col-12 col-md-5 m-1">
               {this.renderDish(dish)}


            </div>
            



        )
    }
}
export default DishDetail;
