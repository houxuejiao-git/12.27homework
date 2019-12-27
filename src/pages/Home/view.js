import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Info from './Info'
export default class view extends Component {
    state={
        data:[{
            id:0,name:"美食",img:"img/19.jpg",path:"/Food"
        },{
            id:1,name:"猫眼电影",img:"img/20.jpg",path:"/Food"
        },{
            id:2,name:"酒店",img:"img/21.jpg",path:"/Food"
        },{
            id:3,name:"休闲娱乐",img:"img/22.jpg",path:"/Food"
        },{
            id:4,name:"外卖",img:"img/23.jpg",path:"/Food"
        },{
            id:5,name:"KTV",img:"img/24.jpg",path:"/Food"
        },{
            id:6,name:"周边游",img:"img/25.jpg",path:"/Food"
        },{
            id:7,name:"丽人",img:"img/26.jpg",path:"/Food"
        },{
            id:8,name:"小吃快餐",img:"img/27.jpg",path:"/Food"
        },{
            id:9,name:"生活服务",img:"img/28.jpg",path:"/Food"
        }]
    }
    render() {
        let { data } = this.state
        return (
            <div className="home">
                <header>
                    <div className="headerLeft">北京<i className="iconfont icon-xiangxia"></i></div>
                    <div className="headerInput">
                    <p className="inputIcon">
                        <i className="iconfont icon-iconset0157"></i>
                    </p>
                        <input type="text" className="search" placeholder="请输入商家名"/>
                    </div>
                    <div className="headerCustomer">
                        <i className="iconfont icon-yonghu"></i>
                    </div>
                </header>
                <section>
                    <div className="banner">
                        <div className="bannerLeft">美团</div>
                        <div className="bannerFont">
                            <p style={{fontWeight:"600"}}>省钱利器 购物超划算</p>
                            <p>吃喝玩乐尽在美团</p>
                        </div>
                        <div className="bannerRight">去APP</div>
                    </div>
                    <nav>
                        <ul className="navList">
                            {
                                data.length>0 ? data.map((v,i)=>{
                                    return(
                                        <li key={i}>
                                            <NavLink to={v.path}>
                                                <img src={v.img} alt=""/>
                                                {v.name}
                                            </NavLink>
                                        </li>
                                    )
                                }) : null
                            }
                            
                        </ul>
                    </nav>
                    <div className="infoBox">
                        <p className="tit">猜你喜欢</p>
                            <Info/>
                    </div>
                </section>
                
            </div>
        )
    }
}
