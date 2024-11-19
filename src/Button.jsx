const Button = (props) => {
  return (
    <>
      <button disabled={props.disabled} onClick={props.click}>
        {props.children}
      </button>
    </>
  );
};
export default Button;
