export const InputField = ({
  label,
  id,
  value,
  className,
  ...others
}: {
  [key: string]: any;
  className?: string;
  placeholder: string;
  value: string;
  label: string;
  id: string;
}) => (
  <div className={className}>
    <label className="inline-block mb-1 text-gray-600" htmlFor={id}>
      {label}
    </label>
    <input value={value} className="input" type="text" id={id} {...others} />
  </div>
);
