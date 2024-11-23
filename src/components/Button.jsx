function Button(props) {
  return (
    <div className="bg-slate-400 text-white p-2 rounded-md" {...props}>
      {props.children}
    </div>
  );
}

export default Button;
