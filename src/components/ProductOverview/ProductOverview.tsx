import GraphContainer from "../GraphContainer/GraphContainer";
import TableContainer from "../TableContainer/TableContainer";
import styles from './ProductOverview.module.scss'

const ProductOverview = () => {
  return (
    <div className={styles.productOverview}>
      <div className={styles.productDetails}></div>

      <div>
        <GraphContainer></GraphContainer>
        <TableContainer></TableContainer>
      </div>
    </div>
  )
}

export default ProductOverview;