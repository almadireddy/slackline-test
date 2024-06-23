import { useSelector } from "react-redux";
import { ProductState } from "../../store/productStore";
import { Product } from "../../data/products";
import ShadowBox from "../ShadowBox/ShadowBox";
import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
  const data: Product[] = useSelector((state: ProductState) => state.data.data); // refactor into selecting specific index

  const product = data.length > 0 ? data[0] : null;

  if (product === null) {
    return <p>Failed to load product</p>
  } 

  return (
    <ShadowBox className={styles.shadowbox}>
      <div className={styles.productDetails}>
        <div className={styles.detailSection}>
          <img src={product.image}></img>
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

        <div className={styles.spacer}>
          
        </div>
      </div>
    </ShadowBox>
  )
}

export default ProductDetails;