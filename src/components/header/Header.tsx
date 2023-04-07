import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <Link to={'/projects'}>Project</Link>
      <Link to={'/users'}>Users</Link>
    </div>
  );
}
