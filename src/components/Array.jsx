import React, { useState } from 'react'
import './style.css';

function Array() {
    const [image]=useState([
        { img: "./asserts/img/img1.jpg", id:1 },
        { img: "./asserts/img/img2.jpg", id:2 },
        { img: "./asserts/img/img3.jpg", id:3 },
        { img: "./asserts/img/img4.jpg", id:4 },
        { img: "./asserts/img/img5.jpg", id:5 },
        { img: "./asserts/img/img6.jpg", id:6 },
        { img: "./asserts/img/img7.jpg", id:7 },
        { img: "./asserts/img/img8.jpg", id:8 },
        { img: "./asserts/img/img9.jpg", id:9 },
        { img: "./asserts/img/img10.jpg", id:10 },
        { img: "./asserts/img/img11.jpg", id:11 },
        { img: "./asserts/img/img12.jpg", id:12 },
        { img: "./asserts/img/img13.jpg", id:13 },
        { img: "./asserts/img/img14.jpg", id:14 },
        { img: "./asserts/img/img15.jpg", id:15 },
        { img: "./asserts/img/img16.jpg", id:16 },
        { img: "./asserts/img/img17.jpg", id:17 },
        { img: "./asserts/img/img18.jpg", id:18 }
    ])
    var [status,setStatus]= useState(false);
    const click1=()=>{
        setStatus(false)
    }
    const click2=()=>{
      setStatus(true)
  }
  return (
    <div>
      <div className='mb-5'>
        <h1 className='float-top'>Images rotate animation</h1>
        <ul type='none' className='d-flex'>
          <li>
            {
              status===true
              ?(<button className="btn btn-outline-primary fw-bold mx-2" onClick={click1}>3D-View</button>)
              :(<button className="btn btn-primary fw-bold mx-2">3D-View</button>)
            }
            
          </li>
          <li>
          {
              status===false
              ?(<button className="btn btn-outline-info fw-bold mx-2" onClick={click2}>2D-View</button>)
              :(<button className="btn btn-info fw-bold mx-2">2D-View</button>)
            }
            
          </li>
        </ul>
      </div>
      
      <div  className='body' >
        {
          image && image.map((item,index)=>{
            return <div>
              {
                status===false
                ?<div><div className="slider"><span style={{"--i":`${item.id}`}} key={index+1}>
                <img src={item.img} alt=""/></span></div></div>
                :""
              }
            </div>
          })
        }
      </div>
      <div className=' d-flex flex-wrap'>
        {
          image && image.map((item,index)=>{
            return <div>
              {
                status===true
                ?<div className='mx-2 my-3'>
                <img src={item.img} alt="" width="500px" height="400px"/></div>
                :""
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Array
