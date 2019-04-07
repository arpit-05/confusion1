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
        renderComment(commments)
        {
          if(commments!=null)
          { 
            const commentcomp=commments.map(comment=>{
            return(<li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}</p>
                     </li>)
          })
          return(<div>{commentcomp}</div>)
        }
           
            
           
        }
    render(){
        const dish=this.props.selectedDish;
       
        return(
            <div className="col-12 col-md-5 m-1">
               {this.renderDish(dish)}
               {this.renderComment(dish.comments)}
               
            </div>
            



        )
    }
}
export default DishDetail;
