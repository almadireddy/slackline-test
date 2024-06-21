import { useSelector } from "react-redux";
import { ProductState } from "../../store/productStore";
import { Product } from "../../data/products";
import ShadowBox from "../ShadowBox/ShadowBox";
import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
  const status = useSelector((state: ProductState) => state.data.status);
  const data: Product[] = useSelector((state: ProductState) => state.data.data); // refactor into selecting specific index

  const product = data.length > 0 ? data[0] : null;

  if (product === null) {
    return <p>Failed to load product</p>
  } 

  return (
    <ShadowBox>
      <div className={styles.productDetails}>
        <img src={product.image}></img>
        <p>{product.title}</p>
      </div>
    </ShadowBox>
  )
}

export default ProductDetails;