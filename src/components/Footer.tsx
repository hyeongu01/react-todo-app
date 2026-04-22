import { type JSX } from 'react';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <p>총 5개 중 2개 완료</p>
      <button className={styles.clear}>완료 항목 삭제</button>
    </div>
  );
}
export default Footer;
