import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './dishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from './../shared/promotions';
import {COMMENTS} from './../shared/comments';
import {LEADERS} from './../shared/leaders';
import {Switch, Route, Redirect} from 'react-router-dom';



class Main extends React.Component {

  constructor(props){
    console.log('constructor')
    super(props);
    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    })
  }

  static getDerivedStateFromProps(){
    console.log('derived state')

  }
  render(){
    const HomePage =()=>{
        return(
            <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                  leader = {this.state.leaders.filter((lea) => lea.featured)[0]}
                  promotion = {this.state.promotions.filter((pro) => pro.featured)[0]}
            />
        )
    }

    const DishWithId = ({match})=>{
      console.log(match)
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === (match.params.dishId))[0]}
                    comments={this.state.comments.filter((comment)=> comment.dishId == (match.params.dishId))}/>
      )
    }

    return(  
        <div>
          <Header/>
          {/* <Menu dishes={this.state.dishes}
                 onClick={(dishId) => this.onDishSelect(dishId)}/> */}
          {/* <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish )[0] }/> */}
          <Switch>
              <Route path="/home"component={HomePage}/>
              <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/home"/>
          </Switch>
          <Footer/>
        </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount')
  }
}

export default Main;
