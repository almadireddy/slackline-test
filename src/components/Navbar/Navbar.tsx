import stacklineLogo from '../../assets/stackline_logo.svg'
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={stacklineLogo}></img>
    </div>
  )
}

export default Navbar;