import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { get_dataSelect } from "../../../../redux/actions/actionOperation";

function NormalSelect({ data, putOn, handledata }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [dataRe, setDataRe] = useState([]);
  useEffect(() => {
    if (putOn) {
      console.log(putOn);
      Object.keys(putOn).map((key, i) => {
        setValue(key, putOn[key]);
      });
      setDataRe(getValues());
    }
  }, []);

  const onsubmit = (data) => {
    setDataRe(data);
  };

  return (
    <form onChange={handleSubmit(onsubmit)}>
      {data.map((select, key) => {
        return (
          <div key={key}>
            <label>
              <strong>{select.label}</strong>
            </label>
            <br />
            <select
              onCompositionStart={handledata(dataRe)}
              name={select.name}
              className="form-select"
              {...register(select.name)}
            >
              {select.ValueSelect.map((val, key) => {
                return <option key={key}>{val.value}</option>;
              })}
            </select>
          </div>
        );
      })}
    </form>
  );
}

export default NormalSelect;
