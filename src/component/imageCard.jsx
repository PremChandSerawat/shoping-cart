import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class ImageCard extends React.Component {
  render(){
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={this.props.path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.price}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
}

export default ImageCard;
