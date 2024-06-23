import { useSelector } from "react-redux";
import { ProductState } from "../../store/productStore";
import { Product } from "../../data/products";
import ShadowBox from "../ShadowBox/ShadowBox";
import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
  const product: Product = useSelector((state: ProductState) => state.data.data[0]);

  if (product === null || product === undefined) {
    return <p>Failed to load product</p>
  } 

  return (
    <ShadowBox className={styles.shadowbox}>
      <div className={styles.productDetails}>
        <div className={styles.detailSection}>
          <img className={styles.productImage} src={product.image}></img>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.subtitle}>{product.subtitle}</p>
        </div>

        <div className={styles.detailSection}>
          <div className={styles.tagContainer}>
            {product.tags.map((tag) => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </ShadowBox>
  )
}

export default ProductDetails;