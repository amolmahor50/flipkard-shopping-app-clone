import "./Productdetails.css";
import { useState } from "react";

const Productdetails = (props) => {

  const [count, setCount] = useState(1);
  const [Img, setImg] =useState(props.mainImg)

  //Decrement
  function Decrement(){
    if(count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }
  }
   //Increment
  function Increment(){
    setCount(count+1);
  }
  
  function ShowImg1(){
    setImg(props.smallImg1)
  }
  function ShowImg2(){
    setImg(props.smallImg2)
  }
  function ShowImg3(){
    setImg(props.smallImg3)
  }
  function ShowImg4(){
    setImg(props.smallImg4)
  }
  function ShowImg5(){
    setImg(props.smallImg5)
  }
  return (
    <div className="container-product">
      <div className="wrapper">
        <div className="product-box">
          <div className="all-images">
            <div className="small-images">
              <img src={props.smallImg1} onMouseOver={ShowImg1}></img>
              <img src= {props.smallImg2} onMouseOver={ShowImg2}></img>
              <img src= {props.smallImg3} onMouseOver={ShowImg3}></img>
              <img src= {props.smallImg4} onMouseOver={ShowImg4}></img>
              <img src= {props.smallImg5} onMouseOver={ShowImg5}></img>
            </div>
            <div className="main-images">
              <img src={Img}></img>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="content">
            <p className="brand">Brand : {props.brand}</p>
            <h2>{props.title}</h2>
            <div className="desc">
              <h4>{props.description}</h4>
            </div>
            <div className="review">
              <span>({props.rating})</span>
              <span className="fa-solid fa-star"></span>
            </div>
            <div className="price-box">
              <p className="price">&#8377; {props.price}</p>
              <strike>&#8377; {props.price + props.discount}</strike>
              <span className="offer">{props.discount}% Off</span>
            </div>
            <h5>Availbale Stock: ({props.stock})</h5>
            <div className="qty-box">
              <h3>Quantity</h3>
              <span className="fa fa-minus" onClick={Decrement}></span>
              <span className="qty">{count}</span>
              <span className="fa fa-plus" onClick={Increment}></span>
            </div>
            <div className="btn">
              <button className="button">
                <span className="fa fa-shopping-cart"></span>
                ADD TO CART
              </button>
              <button className="buy button">
                <span className="fa fa-shopping-cart"></span>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
