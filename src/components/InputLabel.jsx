const InputLabel = (props) => {
  return (
    <lable htmlFor="time" className="text-sm font-semibold text-[#35383E]" {...props}>
      {props.children}
    </lable>
  );
};

export default InputLabel;
