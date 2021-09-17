import styles from './app.module.css';
import { Button } from '@test/shared/components';

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>Sample Text</div>
      <Button label="Sample Lib Component" />
    </div>
  );
}

export default App;
