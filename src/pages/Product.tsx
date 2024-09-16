import { useEffect, useState } from "react";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import { useParams } from "react-router-dom";
import Recommended from "../components/Recommended/Recommended";
// import YouMayAlsoLike from "../components/Recommended/YouMayAlsoLike";

export default function Product() {
  const { productId } = useParams(); // used For Get Data ID From URL
  const [ useParamId , setUseParamId] = useState<string >("");
  const [randomNumber , setRandomNumber] = useState(0);

  const randomNumberInRange = Math.floor(Math.random() * 5) + 1;

useEffect(()=>{
  if (productId) {
    setUseParamId(productId);
    setRandomNumber(randomNumberInRange)
  }
},[randomNumberInRange , productId])


  return (
    <div>
      <ProductPreview/>
      <Recommended id_neq={useParamId} page={randomNumber} perPage={4} title={"You may also like"} />
      <Recommended id_neq={useParamId} page={randomNumber + 1} perPage={4} title={"Recommended products"} />
    </div>
  );
}
