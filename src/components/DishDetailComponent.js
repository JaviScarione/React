import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, Container } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
        return (
            <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        )
    }

    renderComments(comments){
        if (comments != null){
            const commentsList = comments.map((comment) => {
                return (
                    <ListGroup key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </ListGroup>
                )
            })

            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {commentsList}
                    </ListGroup>
                </div>
            )
        }else{
            return (<div></div>)
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null)
            return(
                <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                  </div>
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;