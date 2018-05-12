import React, { Component } from 'react';

class Card extends Component{
    render(){
        let data = this.props.cardData.data;
        return(
            <div className="card">
                <img src={data.avatar} alt="avatar" height="60" width="60" />
                <p>Welcome {data.first_name} {data.last_name}</p>
            </div>
        )
    }
}

export default Card;