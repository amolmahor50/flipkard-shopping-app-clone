import './App.css';
import Header from './Component/Header/Header';
import Productdetails from './Component/ProductDeteils/Productdetails';
import product from "./Component/shoping.json";

function App() {
  return (
    <div>
      <Header/>
     <div className="main">
     {
        product.map((ele, index) => {
         return(
          <Productdetails 
            key= {index}
            title= {ele.title}
            discount= {ele.discountPercentage}
            rating= {ele.rating}
            stock= {ele.stock}
            brand= {ele.brand}
            mainImg= {ele.thumbnail}
            price= {ele.price}
            category= {ele.category}
            smallImg1= {ele.images[0]}
            smallImg2= {ele.images[1]}
            smallImg3= {ele.images[2]}
            smallImg4= {ele.images[3]}
            smallImg5= {ele.images[4]}
            description= {ele.description}
          />
         )
        })
      } 
     </div>
    </div>
  );
}

export default App;
