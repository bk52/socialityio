import BrandImage from "../../../assets/Sociality-logo.png"
import styles from "./index.module.css"

const BrandPanel = () => {
  return (
    <div className={styles.brandPanel}>
      <img src={BrandImage} />
    </div>
  )
}

export default BrandPanel
