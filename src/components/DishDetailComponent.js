import React from "react"
import {Card,CardImg,CardTitle,CardText,CardBody} from "reactstrap"

    
    function RenderDish({dish}){
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
        function RenderComment({comments})
        {
          if(comments!=null)
          { 
            const commentcomp=comments.map(comment=>{
            return(<li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}
                    <br></br>
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                     </li>)
          })
          return(<div>{commentcomp}</div>)
        }
           
            
           
        }
        const DishDetail=(props)=>{
          //const dish=props.dish;
        if(props.dish==null){
          return(<div></div>)
        }
        return(
          <div className="col-12 col-md-5 m-1">
             <RenderDish dish={props.dish}/>
             <RenderComment comments={props.dish.comments}/>
          </div>
        )
        }
export default DishDetail;
