import { Provider } from "react-redux"
import { store } from "./redux/store"
import styles from "./App.module.css"
import Navigation from "./components/Navigation"
import FeedPage from "./pages/publish/feed"

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <Navigation />
        <div className={styles.page}>
          <FeedPage />
        </div>
      </div>
    </Provider>
  )
}

export default App
