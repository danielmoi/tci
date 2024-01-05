import type { Component } from 'solid-js';

import Eleveld from './Eleveld';
import { onMount } from "solid-js";

import logo from './logo.svg';
import styles from './App.module.css';
import References from './References';

const Sticky = () => {
  return (
    <div class="absolute bottom-3">
      <div class="text-lg">(more info)</div>
      <div>⬇</div>
    </div>
  )
}

const App: Component = () => {

  return (
    <div class="text-center relative">
      <header class={styles.header}>
        <Eleveld />
        <Sticky />
      </header>
      <References />
    </div>
  );
};

export default App;
