import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
// import TextForm from './Components/TextForm';
import React, { useState } from "react";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 100000,
      name: "Iphone 12 pro",
      quantity: 0,
    },
    {
      price: 20000,
      name: "Air Pods",
      quantity: 0,
    },
    {
      price: 230000,
      name: "Apple Watch",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [productList2, setProductList2] = useState(products);
  let [totalAmount, setTotalAmount]=useState(0)
  // increment in quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    newProductList[index].quantity++;
    newTotalAmount+= newProductList[index].price;

    setProductList(newProductList);
    setTotalAmount(newTotalAmount)

    //products[index].quantity=++products[index].quantity
  };
  //decrement in quantity
  const decrementQuantity = (index) => {
    let newProductList2 = [...productList2];
    let newTotalAmount=totalAmount;
   // newProductList2[index].quantity > 0 ? newProductList2[index].quantity-- : newProductList2[index].quantity=0;
    if( newProductList2[index].quantity > 0)
    {

      newProductList2[index].quantity--;
      newTotalAmount-= newProductList2[index].price;

    }
    else{
      newProductList2[index].quantity=0;
    }
    setProductList2(newProductList2);
    setTotalAmount(newTotalAmount)
    //products[index].quantity=++products[index].quantity
  };
  
//reset quantity
const resetQuantity = ()=>{
  let newProductList = [...productList];
  newProductList.map((product)=>{

    product.quantity=0
  })
  setProductList(newProductList)
  setTotalAmount(0)
}
//remove item from list
const removeItem = (index)=>{
  let newProductList = [...productList];
  let newTotalAmount=totalAmount;

  newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
  newProductList.splice(index, 1)
console.log(newProductList);
 setProductList(newProductList)
 setTotalAmount(newTotalAmount)
}
//add item in list
const addItem=(name, price)=>{
  let newProductList = [...productList];
  newProductList.push({
    price :price,
    name : name,
    quantity:0

  })
  setProductList(newProductList)

}
  // const heading ="Enter Text To Analyze"
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          productList2={productList2}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem} 
        />
        {/* <TextForm heading={heading} /> */}
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}  />
    </>
  );
}

export default App;
