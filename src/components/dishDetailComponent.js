import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class Comment extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props)
//     }
//     static getDerivedStateFromProps() {
//         return null
//     }

//     comments(dish) {
//         if (dish) {
//             const it = dish.comment.map((comm) => {
//                 return (

//                         <div>
//                            <p>{comm.author}</p> 
//                            <p>{comm.rating}</p> 
//                            <p>{comm.comment}</p> 
//                         </div>
//                 )
//             })
//             return (
//                 <div className="row">
//                     <Card className="col-12 col-sm-5 m-1">
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />

//                     </Card>
//                     <Card className="col-12 col-sm-5 m-1">
//                           {this.it}
//                     </Card>
//                     {it}
//                 </div>

//             )


//         } else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     renderDish(dish) {
//         if (dish != null) {
//             return (
//                 <Card className="col-12 col-sm-5 m-1" >
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>


//             )

//         } else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     componentDidMount() {
//         console.log('componentDidMount Comment')
//     }
//     render() {


//         return (
//             <div>
//                 {/* {this.renderDish(this.props.dish)} */}
//                 {this.comments(this.props.dish)}
//             </div>
//         )

//     }

// }

// export default Comment;





function Comment(props) {
   console.log('nnnnnnnnnnnn', props)
   const comments = (dish, comment) => {
        if (dish) {
            const it = comment.map((comm) => {
                return (
                    <div>
                        <p>{comm.author}</p>
                        <p>{comm.rating}</p>
                        <p>{comm.comment}</p>
                    </div>
                )
            })
            return (
                <div className="row">
                    <Card className="col-12 col-sm-5 m-1">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                    </Card>
                    <Card className="col-12 col-sm-5 m-1">
                        {it}
                    </Card>
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }
    return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                          <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Dish detil
                        </BreadcrumbItem>
                    </Breadcrumb>
            </div>
            <div>
               {comments(props.dish, props.comments)}
            </div>
        </div>
       
    )
}

export default Comment;
