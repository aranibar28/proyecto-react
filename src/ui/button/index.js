export function Button(props) {
  const { children, cb = () => {}, type = "button" } = props;
  return (
    <button
      type={type}
      className="p-4 px-10 rounded bg-red-600 text-white"
      onClick={() => cb()}
    >
      {children}
    </button>
  );
}
