import React from 'react';
import styles from './index.less';

const App = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.face}>正面</div>
        <p className={styles.back}>背面</p>
      </div>
    </>
  );
};

export default App;