import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavOp from "../Operation/CadrOperation/NavBarOperations/NavOp";

function AccessEmpC() {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const params = useParams();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const tablesName = useSelector((state) => state.accessTables.tablesName);
  const [show, setshow] = useState();
  console.log(tablesName);

  const onsubmit = (data) => {
    console.log(data);
  };
  const handleClose = () => {
    nav(-1);
  };
  return (
    <div className="text-center">
      <NavOp table={data.title} />
      {params.idEmpC}
      <form onClick={handleSubmit(onsubmit)}>
        {tablesName.map((tables) => {
          return (
            <div
              key={tables.idTable}
              className="custom-control custom-checkbox mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                name={tables.nameTable}
                {...register(tables.nameTable)}
              ></input>
              <label className="custom-control-label" for="customCheck">
                {" "}
                {tables.nameTable}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default AccessEmpC;
