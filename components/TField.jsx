import { Field, ErrorMessage } from "formik";

export default function TField({
  name,
  inputlabel,
  CName,
  type,
  placeholder,
  ...props
}) {
  return (
    <div className={CName}>
      <label htmlFor={name} className="flex h-10 w-full items-end">
        {inputlabel}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
      <ErrorMessage name={name}  component="div"/>
    </div>
  );
}
