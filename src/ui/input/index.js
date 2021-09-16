export function Input(props) {
  const { type, placeholder } = props;

  return (
    <input
      type={type}
      className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none"
      placeholder={placeholder}
    />
  );
}
