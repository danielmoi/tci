import { createSignal } from "solid-js";
import ButtonSecondary from "./components/Button-Secondary";
import Button from "./components/Button";
// import { Button,initTE } from "tw-elements";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}

function Eleveld() {
  // initTE({ Button }, { allowReinits: true });
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count() + 1);

  const [age, setAge] = createSignal('30');
  const handleInput = (e: HTMLElementEvent<HTMLInputElement>) => {
    const val = (e.target.value);
    setAge(val);
  }
  const getBIS60 = () => {
    return (2.2 - (Number(age()) * 0.01)).toFixed(1);
  }
  const getBIS46 = () => {
    return (4.0 - (Number(age()) * 0.02)).toFixed(1);
  }

  const handleReset = () => setAge('30')

  return (
    <div>
      <h1 class="mb-10">Eleveld Cet calculator</h1>
      <div class="mb-10">
        Enter age:
        <input class="text-black ml-4 pl-4 w-24" type="number" onInput={handleInput} value={age()} size="5"/>
      </div>
      <div>BIS 60: {getBIS60()}</div>
      <div>BIS 46: {getBIS46()}</div>

      <div class="mt-10">
        <button type="button" class="text-lg bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Eleveld;


/*

BIS 46: Cet = 4-(age x 0.02) ie 4 - 0.2 per decade age

BIS 60: Cet = 2.2-(age x 0.01) ie 2.2 - 0.1 per decade age

*/
