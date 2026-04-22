import { type JSX } from 'react';
import styles from './Filter.module.css';

function Filter(): JSX.Element {
  return (
    <div className={styles.filters}>
      <button className={styles.active}>전체</button>
      <button>미완료</button>
      <button>완료</button>
    </div>
  );
}
export default Filter;
