import { useOutlet } from 'react-router-dom';
import Header from '../components/header/Header';
import styles from './Root.module.css';

export default function Root() {
  const outlet = useOutlet();
  return (
    <div className={styles.mainContainer}>
      <Header />
      {outlet || <h1>Welcome to the App</h1>}
    </div>
  );
}
