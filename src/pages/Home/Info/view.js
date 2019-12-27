import React, { Component } from 'react'

export default class view extends Component {
    componentDidMount(){
        this.props.fetchGoods()
    }
    render() {
        console.log(this.props)
        let { data } = this.props
        return (
            <div className="info">
                {
                    data.length>0? data.map((v,i)=>{
                        return(
                            <div className="infoInfo" key={i}>
                                <div className="infoImg">
                                    <img src={v.img} alt=""/>
                                </div>
                                <div className="msgInfo">
                                    <div>
                                        <p className="name">{v.name}</p>
                                        <p className="msg">
                                            {v.address}{v.taocan}
                                        </p>
                                    </div>
                                    <div className="priceBox">
                                    <p>
                                        <span className="price">{v.price}元</span>
                                        <span>门市价:{v.homePrice}元</span>
                                    </p>
                                    <p>
                                        <span>已售{v.saleOut}</span>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :null
                }
            </div>
        )
    }
}
