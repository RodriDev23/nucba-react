import { useState } from "react";
import { Link } from "react-router-dom";

const CardShopping = ({ product, buyQuantity }) => {
  const [newProducts, setNewAllProducts] = useState({
    product: null,
    buyQuantity: null,
  });

  const handleAllproducts = () => {
    setNewAllProducts({
      product: product,
      buyQuantity: buyQuantity,
    });

    console.log('quantity', buyQuantity);
    console.log('product',  pro)
  };

  const myData = {
    product: product,
    quantity: buyQuantity
    
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5 border border-black rounded-md pb-5 pt-5 text-black'>
      <img
        className='w-[30%] h-[30%] rounded-md'
        src={product.image}
        alt={product.name}
      />
      <p className="text-black text-center">{product.name}</p>
      <p>{product.price}</p>
      <p>Quantity: {buyQuantity}</p>
      <Link
        to='/productsFinishToBuy' state={myData}
      >
        <button
          onClick={handleAllproducts}
          className="px-5 py-3 rounded-md border border-black hover:bg-black hover:text-white"
        >
          Buy
        </button>
      </Link>
    </div>
  );
};

export default CardShopping;