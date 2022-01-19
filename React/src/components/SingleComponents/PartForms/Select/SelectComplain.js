import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SelectComplain({ data, putOn, name, handledata, disabled }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [id, setId] = useState(0);
  useEffect(() => {
    if (putOn) {
      Object.keys(putOn.complaints).map((key, i) => {
        setValue(key, putOn.complaints[key]);
        if (key == name) {
          setId(putOn.complaints[key]);
        }
      });
    }
  }, []);

  const onComplain = (data) => {
    console.log(getValues(name));
    setId(getValues(name));
  };
  return (
    <select
      onAnimationStart={handledata(id)}
      disabled={disabled}
      className="form-select"
      name={name}
      onClick={handleSubmit(onComplain)}
      {...register(name)}
    >
      {data.map((M) => {
        return (
          <option key={M.complain_id} value={M.complain_id}>
            {"From :  " +
              M.employeeState +
              "   To => " +
              M.technicaine +
              " At : " +
              M.dateComplain}
          </option>
        );
      })}
    </select>
  );
}

export default SelectComplain;
