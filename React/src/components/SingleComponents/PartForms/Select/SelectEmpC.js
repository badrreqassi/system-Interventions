import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SelectEmpC({ data, putOn, name, handledata, disabled }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [id, setId] = useState(0);
  useEffect(() => {
    if (putOn) {
      console.log(putOn.employee_company);
      Object.keys(putOn.employee_company).map((key, i) => {
        setValue(key, putOn.employee_company[key]);
        if (key == name) {
          setId(putOn.employee_company[key]);
        }
      });
    }
  }, []);
  const onEmpC = (data) => {
    console.log(getValues(name));
    setId(getValues(name));
  };

  return (
    <select
      onCompositionStart={handledata(id)}
      disabled={disabled}
      name={name}
      onClick={handleSubmit(onEmpC)}
      {...register(name)}
      className="form-select"
    >
      {data.map((M) => {
        return (
          <option key={M.emp} value={M.emp}>
            {M.lastName + " " + M.firstName}
          </option>
        );
      })}
    </select>
  );
}

export default SelectEmpC;
