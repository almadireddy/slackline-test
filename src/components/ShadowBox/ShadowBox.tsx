import styles from './ShadowBox.module.scss'

type ShadowBoxProps = {
  children: React.ReactNode;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({children}) => {
  return <div className={styles.shadowbox}>{children}</div>
}

export default ShadowBox;