import { createSignal } from "solid-js";
import Button from "./components/Button";

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
      <h1 class="mb-10 text-4xl">Eleveld Cet calculator</h1>
      <div class="mb-10">
        Enter age:
        <input class="text-black ml-4 pl-4 w-24" type="number" onInput={handleInput} value={age()} size="5"/>
      </div>
      <div class="mt-20 mb-8">BIS 46: <span class="font-bold text-green-500">{getBIS46()}</span> μg/mL</div>
      <div class="mb-20">BIS 60: <span class="font-bold text-orange-500">{getBIS60()}</span> μg/mL</div>

      <div class="mt-10">
        <Button onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Eleveld;


/*

BIS 46: Cet = 4-(age x 0.02) ie 4 - 0.2 per decade age

BIS 60: Cet = 2.2-(age x 0.01) ie 2.2 - 0.1 per decade age

*/
