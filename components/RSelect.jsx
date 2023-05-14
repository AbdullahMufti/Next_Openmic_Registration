"use client";
import Select from "react-select";
import { ErrorMessage } from "formik";
export default function RSelect({ options, name, Course, setCourse, C, setC }) {
  const handleChange = (selected) => {
    const selectedData = selected.map((select) => select.value);
    setCourse(selected);
    setC(selectedData);
  };

  return (
    <>
      <Select
        isMulti={true}
        options={options}
        name={name}
        onChange={handleChange}
        value={Course}
        required
      />
      <ErrorMessage name="courses" />
    </>
  );
}
