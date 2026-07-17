import LikeButton from "../../components/Like/Likebutton";

export default async function Cart() {

  const product = {
    name: `I Phone 📱`,
    
    price: "82,999",
    title: " A premium smartphone doing gretest thing that you can think"
  }

  return (
    <div className="products">
      
      <p> {product.name }</p>
      
      <p> {product.price}</p>
      <p> {product.title}</p>

      <LikeButton />
    </div>
    

  )



}