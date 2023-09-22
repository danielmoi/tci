
function ButtonSecondary (props: any) {
  return (
    <button
      type="button"
      class="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      data-te-ripple-init>
        {props.children}
    </button>

  )
}

export default ButtonSecondary
