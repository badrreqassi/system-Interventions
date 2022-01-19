import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function SelectEmpS({ data, putOn, name, handledata }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [Id, setId] = useState(0);

  useEffect(() => {
    if (putOn) {
      console.log(putOn);
      Object.keys(putOn.employee_state).map((key, i) => {
        setValue(key, putOn.employee_state[key]);
        if (key == name) {
          setId(putOn.employee_state[key]);
        }
      });
    }
  }, []);
  const onEmpS = (data) => {
    console.log(getValues(name));
    setId(getValues(name));
  };

  return (
    <select
      onCompositionStart={handledata(Id)}
      name={name}
      onClick={handleSubmit(onEmpS)}
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

export default SelectEmpS;
/*

*/
