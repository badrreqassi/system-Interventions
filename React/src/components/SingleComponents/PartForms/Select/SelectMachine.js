import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SelectMachine({ data, putOn, name, handledata }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [id, setId] = useState(0);
  useEffect(() => {
    if (putOn) {
      console.log(putOn.machine);
      Object.keys(putOn.machine).map((key, i) => {
        setValue(key, putOn.machine[key]);
        if (key == name) {
          setId(putOn.machine[key]);
        }
      });
    }
  }, []);
  const onsubmit = (data) => {
    console.log(getValues(name));
    setId(getValues(name));
  };
  return (
    <select
      onCompositionStart={handledata(id)}
      name={name}
      onClick={handleSubmit(onsubmit)}
      {...register(name)}
      className="form-select"
    >
      {data.map((M) => {
        return (
          <option key={M.machine_id} value={M.machine_id}>
            {M.machineName}
          </option>
        );
      })}
    </select>
  );
}

export default SelectMachine;
