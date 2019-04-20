import  React,{Component} from "react"
//import {Media} from 'reactstrap'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from "reactstrap"
import Menu from "./MenuComponent"
import DishDetail from "./DishDetailComponent"
import {DISHES} from "../shared/dishes"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Home from "./HomeComponent"
import {Switch,Route,Redirect} from "react-router-dom"
class Main extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
            
        };
    };
   
    
    
    render(){
      const HomePage=(props)=>{
        return(
          <Home/>
        )
      }
       
        return (
            <div className="container">
              <div className="row">
              <Header/>
                  <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
                    <Redirect to="/home"/>
                    </Switch>               
              </div>
             
              
              <Footer/>
              
            </div>
          );
      }
}
export default Main;