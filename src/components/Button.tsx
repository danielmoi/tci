import { JSX, ParentComponent, ParentProps } from "solid-js";
import { onMount } from "solid-js";
import { Button, initTE } from 'tw-elements';

interface ButtonProps {
  onClick: (event: MouseEvent) => void
}


const Component: ParentComponent<ButtonProps> = (props) => {
  onMount(() => {
    initTE({ Button });
  });
  return (
    <button
  onClick={props.onClick}
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-lg font-medium leading-normal hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
    {props.children}
</button>
  )
}

export default Component;
