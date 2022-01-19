import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getData } from "../../../../redux/actions/actionLogin";

function FormInputs({ data, putOn, handledata }) {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [dataRe, setDataRe] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (putOn) {
      console.log(putOn);
      Object.keys(putOn).map((key, i) => {
        setValue(key, putOn[key]);
      });
    }
    setDataRe(getValues());
  }, []);

  const onsubmit = (data) => {
    setDataRe(data);
  };
  return (
    <form onChange={handleSubmit(onsubmit)}>
      {data.map((input, key) => {
        return (
          <div key={key}>
            <label>
              <strong>{input.label}</strong>
            </label>
            <br />
            <input
              onCompositionStart={handledata(dataRe)}
              disabled={input.disabled}
              className="form-control"
              type={input.type}
              name={input.name}
              {...register(input.name)}
            />
          </div>
        );
      })}
    </form>
  );
}

export default FormInputs;
/*

 { data.content.inputs.map((input,key)=>{
              return <div key={key}>
                  <label>
                      <strong>
                          {input.label}
                      </strong>
                  </label>
                  <br/>
                  <input
                  className="form-control"
                  type={input.type}
                  name={input.name}
                  {...register(input.name)}
                  />
              </div>
          })

*/
