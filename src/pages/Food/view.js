import React, { Component } from 'react'
import FoodsInfo from './FoodsInfo'
import { NavLink } from 'react-router-dom'
export default class view extends Component {
    state={
        newdata:[{
            id:0,name:"火锅",img:"img/11.png"
        },{
            id:1,name:"甜点饮品",img:"img/12.png"
        },{
            id:2,name:"自助餐",img:"img/13.png"
        },{
            id:3,name:"小吃快餐",img:"img/14.png"
        },{
            id:4,name:"西餐",img:"img/15.png"
        },{
            id:5,name:"烧烤烤肉",img:"img/16.png"
        },{
            id:6,name:"香锅烤鱼",img:"img/17.png"
        },{
            id:7,name:"海鲜",img:"img/18.png"
        }],
        info:[]
    }
    click = (val)=>{
        this.setState({
            info:val.child
        })
    }
    scroll = (e)=>{
        var head = document.getElementsByClassName("foodHeader")[0]
        var scrollTop = document.getElementsByClassName("foodSction")[0].scrollTop
        var left = document.getElementsByClassName("returnBox")[0]
        var right = document.getElementsByClassName("personBox")[0]
        var btn = document.getElementsByClassName("posBtn")[0]
        if(scrollTop>150){
            head.style.background = "white"
            head.style.height= "0.7rem"
            left.style.color = "#19b99d"
            right.style.color = "#19b99d"
            btn.style.display = "flex"
        }else{
            // head.style.background = "url('/img/background.jpg')no-repeat"
            // // head.style.height= "2rem"
            // head.style.backgroundSize = "100% 100%"
            // left.style.color = "white"
            // right.style.color = "white"
        }
        // console.log(scrollTop)
    }
    returnTop = ()=>{
        console.log(1)
        var box = document.getElementsByClassName("foodSction")[0]
        box.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"
        })
    }
    componentDidMount(){
        this.props.fetchFoods()
    }
    render() {
        let { newdata,info } = this.state
        let { data } = this.props
        return (
            <div className="food">
            <div className="posBtn" onClick={this.returnTop}>
                <i className="iconfont icon-xiangshang"></i>
            </div>
                <div className="foodHeader">
                    <div className="returnBox">
                        <NavLink to="/Home">
                        <i className="iconfont icon-fanhui"></i>
                        </NavLink>
                    </div>
                    <div className="findBox">
                        <p className="findIcon">
                            <i className="iconfont icon-iconset0157"></i>
                        </p>
                        <input type="text" className="findInput" placeholder="输入商家,品类或商圈"/>
                    </div>
                    <div className="personBox">
                        <i className="iconfont icon-yonghu"></i>
                    </div>
                </div>
                <div className="foodSction" onScroll={(e)=>{this.scroll(e)}}>
                    <div className="foodNav">
                        {
                            newdata.length>0? newdata.map((v,i)=>{
                                return(
                                    <div className="foodNavBox" key={i}>
                                        <img src={v.img} alt=""/>
                                        {v.name}
                                    </div>
                                )
                            }) :null
                        }
                    </div>
                    <div className="foodMsgBox">
                        <ul className="foodMsgList">
                            {
                                data.length>0? data.map((v,i)=>{
                                    return(
                                        <li key={i} onClick={()=>{this.click(v)}}>
                                            {v.name}  <i className="iconfont icon-xiangxia"></i>
                                        </li>
                                    )
                                })  :null
                            }
                        </ul>
                        <FoodsInfo data={ info }/>
                    </div>
                </div>
            </div>
        )
    }
}
