import React, { Component } from 'react'

export default class view extends Component {
    render() {
        let { data } = this.props
        return (
            <div className="foodsShopBox">
                {
                    data.length>0 ? data.map((v,i)=>{
                        return(
                            <div className="shopBox" key={i}>
                                <div className="shopInfo">
                                    <div className="shopImg">
                                        <img src={v.img} alt=""/>
                                    </div>
                                    <div className="shopMsg">
                                        <p className="name">{v.name}</p>
                                        <div className="msgShop">
                                            <div> <img src={ v.start==5? "img/s2.jpg" : "img/s1.jpg" } alt=""/> ¥{v.price}/人</div>
                                            <div>{v.address}</div>
                                        </div>
                                        <p>{v.tit}</p>
                                        <p style={{color:"#19b99d"}}>{v.out}</p>
                                    </div>
                                </div>
                                <div className="saleBox">
                                    <img src="img/t1.jpg" alt=""/>&nbsp;&nbsp;93代100元
                                </div>
                            </div>
                        )
                    })  :null
                }
            </div>
        )
    }
}
