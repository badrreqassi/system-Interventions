import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";

function SelectCompany({ data, putOn, name, handledata }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [Id, setId] = useState(0);

  useEffect(() => {
    if (putOn) {
      console.log(putOn);
      console.log(data);
      Object.keys(putOn).map((key, i) => {
        setValue(key, putOn[key]);
        if (key == name) {
          setId(putOn[key]);
        }
      });
    }
  }, []);

  const onCompany = (data) => {
    setId(getValues(name));
  };
  return (
    <select
      onAnimationStart={handledata(Id)}
      className="form-select"
      name={name}
      onClick={handleSubmit(onCompany)}
      {...register(name)}
    >
      {data.map((M) => {
        return (
          <option key={M.numCompany} value={M.numCompany}>
            {M.nameCompany}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCompany;
