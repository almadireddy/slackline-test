import { useSelector } from "react-redux";
import DataWidgetContainer from "../DataWidgetContainer/DataWidgetContainer";
import ProductDetails from "../ProductDetails/ProductDetails";
import styles from './ProductOverview.module.scss'
import { ProductState } from "../../store/productStore";
import Graph from "../Graph/Graph";
import Table from "../Table/Table";
import { Product } from "../../data/products";

const ProductOverview = () => {
  const productData: Product = useSelector((state: ProductState) => state.data.data[0]);  
  
  if (productData === null || productData === undefined) {
    return (
      <p>Loading displays</p>
    )
  }

  return (
    <div className={styles.productOverview}>
      <div className={styles.sidebar}>
        <ProductDetails></ProductDetails>
      </div>

      <div className={styles.content}>
        <DataWidgetContainer 
          title="Product Sales Graph" 
          className={styles.graphContainer}>
          <Graph sales={productData.sales}></Graph>
        </DataWidgetContainer>
        <DataWidgetContainer title="Product Sales Table">
          <Table sales={productData.sales}></Table>
        </DataWidgetContainer>
      </div>
    </div>
  )
}

export default ProductOverview;