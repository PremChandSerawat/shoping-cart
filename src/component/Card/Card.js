import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
export default class CardRender extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cardData : []
  };
}
componentDidMount() {
  console.log("menu items form menu bar");
  axios.get("http://localhost:5000/data2")
    .then((res) => {
      console.log("resquest are ",res);
      const cardData=res.data;
      console.log("request data ",res.data);
      this.setState({cardData})
    })
}

render(){
  console.log("cardState",this.state.cardData);
return(
  <div className="row row-no-padding">
  {
    this.state.cardData.map(card=>{
      return(
<div className="col-sm-3">
  <Card className="cardStyle">
    <Card.Img variant="top" src={card.image}/>
    <Card.Body>
      <Card.Title>{card.service}</Card.Title>
      <Card.Text>
     {card.assistoId}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
)
})
}
</div>
);

}
}
