import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

   
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.comments}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    render() {
        if (this.props.selectedDish != null)
            return (
            <div className="container">
                <div className="row">
                    {this.props.selectedDish.name}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
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