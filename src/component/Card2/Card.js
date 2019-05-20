import React from 'react';
import axios from 'axios';
import "./Card.css";
export default class Card2 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cardData:[]
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
    return(
       <div className="row">
      {
        this.state.cardData.map(card=>{
          return(
            <div className="col-sm-4" style={{margin:0}}>
           <div className="card">
                <img src={card.image}  />
               <div className="CardContainer">
                 <h4><b>{card.service}</b></h4>
                 <p>{card.assistoId}</p>
               </div>
           </div>
          </div>
);
})

}
</div>
  )
  }
}
