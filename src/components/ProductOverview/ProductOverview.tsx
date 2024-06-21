import GraphContainer from "../GraphContainer/GraphContainer";
import ProductDetails from "../ProductDetails/ProductDetails";
import TableContainer from "../TableContainer/TableContainer";
import styles from './ProductOverview.module.scss'

const ProductOverview = () => {
  return (
    <div className={styles.productOverview}>
      <div className={styles.sidebar}>
        <ProductDetails></ProductDetails>
      </div>

      <div className={styles.content}>
        <GraphContainer></GraphContainer>
        <TableContainer></TableContainer>
      </div>
    </div>
  )
}

export default ProductOverview;