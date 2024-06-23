import styles from './ShadowBox.module.scss'

type ShadowBoxProps = {
  children: React.ReactNode;
  className?: string;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({children, className: moreClasses}) => {
  return <div className={styles.shadowbox + ` ${moreClasses}`}>{children}</div>
}

export default ShadowBox;