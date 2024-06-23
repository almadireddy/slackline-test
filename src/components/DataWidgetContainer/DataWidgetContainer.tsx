import { useSelector } from "react-redux";
import ShadowBox from "../ShadowBox/ShadowBox";
import { ProductState } from "../../store/productStore";
import styles from './DataWidgetContainer.module.scss'

interface DataWidgetContainer {
  children: React.ReactNode;
  title: string,
  className?: string;
} 
const DataWidgetContainer: React.FC<DataWidgetContainer> = ({ children, title, className: moreClasses }) => {
  const productData = useSelector((state: ProductState) => state.data.data);  
  
  if (productData === undefined) {
    return (
      <p>Loading graph</p>
    )
  }
  
  return (
    <ShadowBox className={styles.shadowbox + ` ${moreClasses}`}>
      <h3>{title}</h3>
      <div className={styles.graphWrapper}>
        {children}
      </div>
    </ShadowBox>
  )
}

export default DataWidgetContainer