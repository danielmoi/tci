import { JSX, ParentComponent, ParentProps } from "solid-js";



const Component: ParentComponent = (props) => {
  return (
    <span class="font-bold text-green-600">
    {props.children}
  </span>
  )
}

export default Component;
