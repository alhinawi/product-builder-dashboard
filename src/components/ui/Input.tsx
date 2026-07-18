interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ ...rest }: Props) => {
  return (
    <input
      {...rest}
      className={
        rest.className ||
        "border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-md shadow-md "
      }
    />
  );
};

export default Input;
