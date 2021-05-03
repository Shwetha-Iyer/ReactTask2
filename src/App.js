import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from "./card";
import {useState} from  "react";
export default function App(){
  var img ="https://place-hold.it/900x350&text=900%20x%20350";
  var i=-1;
  var [time,setTime] = useState([]);
  var [total,setTotal] = useState(0);
  //var [state,setState] = useState(false);
  
  let additem = (item)=> {
    setTime([...time,item]);
    setTotal(total+item.product_price);
    let selectedindex=productdata.findIndex((obj)=> {
      return obj.id===item.id;
    });
   // setProductdata()
   productdata[selectedindex].state = true;
   setProductdata([...productdata]);
  }
  let removeitem = (item)=>{
    setTime(time.filter(obj => obj.id !== item.id))


    setTotal(total-item.product_price);
    let selectedindex=productdata.findIndex((obj)=> {
      return obj.id===item.id;
    });
    productdata[selectedindex].state = false;
    setProductdata([...productdata]);

  }
  var data = [
    {
      id: 1,
      product_name: "Tasty Granite Towels",
      product_price: 143.00,
      product_description: "This is actually a different type of Pants",
      rating: 4,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    },
    {
      id: 2,
      product_name: "Licensed Steel Chicken",
      product_price: 716.00,
      product_description: "This is actually a different type of Bacon",
      rating: 5,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    },
    {
      id: 3,
      product_name: "Generic Steel Hat",
      product_price: 449.00,
      product_description: "This is actually a different type ofComputer",
      rating: 3,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    },
    {
      id: 4,
      product_name: "Handmade Fresh Mouse",
      product_price: 426.00,
      product_description: "This is actually a different type of Soap",
      rating: 2,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    },
    {
      id: 5,
      product_name: "Licensed Granite Chips",
      product_price: 512.00,
      product_description: "This is actually a different type of Chair",
      rating: 4,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    },
    {
      id: 6,
      product_name: "Intelligent Wooden Keyboard",
      product_price: 731.00,
      product_description: "This is actually a different type of Table",
      rating: 4,
      img: "https://place-hold.it/700x400&text=900%20x%20350",
      state: false
    }];
    let [productdata,setProductdata] = useState(data); 
    
  return <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Start BootStrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br/> <br/>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 my-4">
            <div>
              <h1 className="text-center"> Your Cart</h1>
            </div>
            <div>
            <ul className="list-group">
              {
                
                time.map((carts)=>{
                 return <li className="list-group-item">{carts.product_name} <br/> ${carts.product_price}
                 <button className="btn btn-dark right" onClick={() =>{removeitem(carts)}}><i className="fa fa-times right"></i></button></li>
                })
                    
              }  
              <li className="list-group-item">Total: ${total}</li>
            </ul>
            
            </div>
          </div>
          <div className="col-lg-9 my-4">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100"/>
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100"/>
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <br/>
          <div className="row">
            {
              productdata.map((obj)=>{
                return <Card item={obj} add={additem}></Card>
              })
            }
          </div>
          </div>
        </div>
      </div>
  </>
}
