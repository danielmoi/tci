import type { Component } from 'solid-js';
import Eleveld from './Eleveld';

import logo from './logo.svg';
import styles from './App.module.css';
import References from './References';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Eleveld />
      </header>
      <References />
    </div>
  );
};

export default App;
