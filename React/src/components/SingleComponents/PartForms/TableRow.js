import React, { useEffect, useLayoutEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AiFillLock } from "react-icons/ai";
import {
  Add_Access,
  Delete_Access,
  get_Tables_Name,
} from "../../../redux/actions/actionAccessTables";
import { dataIn, Delete } from "../../../redux/actions/actionOperation";

function TableRow({ row }) {
  const nav = useNavigate();

  const data = useSelector((state) => state.dataOperations.data);
  const employees = useSelector((state) => state.employees.employees);
  const typeuser = useSelector((state) => state.employees.typeuser);
  const tablesName = useSelector((state) => state.accessTables.tablesName);
  const In = useSelector((state) => state.dataOperations.dataIn_AC);
  const [Access, setAccess] = useState(true);
  const [show, setshow] = useState(false);
  const [takeId, setTakeId] = useState("");
  const [color, setColor] = useState("warning");

  const dispatch = useDispatch();
  const { register, handleSubmit, getValues, setValue } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };
  useLayoutEffect(() => {
    dispatch(get_Tables_Name());
  }, []);
  useEffect(() => {
    if (takeId) {
      dispatch(get_Tables_Name(takeId));
    }

    if (typeuser == false && data.title == "EmployeeCompany") {
      setAccess(false);
    }
  }, [Access, takeId, show]);

  const handleDelete = (id) => {
    switch (data.title) {
      case "Company": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");

        break;
      }
      case "Complaints": {
        console.log("in");
        dispatch(Delete(data.title, id, employees.cin));
        dispatch(dataIn(true));
        nav("/message/success");

        break;
      }
      case "Treatments": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
      case "DaysWorked": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
      case "Machine": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
      case "Piece": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
      case "EmployeeCompany": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
      case "EmployeeState": {
        console.log("in");
        dispatch(Delete(data.title, id));
        dispatch(dataIn(true));
        nav("/message/success");
        break;
      }
    }
  };

  const handleAjouter = (id) => {
    if (id) {
      dispatch(get_Tables_Name());
      var v = { cinUser: id };
      dispatch(Add_Access(getValues("table"), v));
      dispatch(get_Tables_Name(id));

      setshow(false);
    }
  };
  const handleAccess = (id) => {
    console.log(id);
    console.log(show);

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <strong> Voulez-vous lui donner accès aux Table </strong>
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setshow(false);
            }}
          >
            {" "}
          </button>
        </Modal.Header>
        <Modal.Body>
          <select
            name={"table"}
            onClick={handleSubmit(onsubmit)}
            {...register("table")}
            className="form-select"
          >
            {tablesName.map((tables) => {
              return (
                <option key={tables.idTable} value={tables.idTable}>
                  {tables.nameTable}
                </option>
              );
            })}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleAjouter(id);
            }}
            variant="success"
          >
            Oui
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(Delete_Access(id));
              setshow(false);
            }}
          >
            Vide
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <tr style={{ width: "60px" }}>
      {row[0].map((val, key) => (
        <td key={key}>{val}</td>
      ))}
      <td id="td_btn">
        <button
          id="btn"
          onClick={() => handleDelete(row[1])}
          className="btn btn-danger"
        >
          {" "}
          Delete{" "}
        </button>
        <button
          onClick={() => {
            nav("/modifier" + data.title + "/" + row[1]);
          }}
          id="btn"
          className="btn btn-primary"
        >
          {" "}
          Edit{" "}
        </button>
      </td>
      <td>
        <button
          hidden={Access}
          onClick={() => {
            setTakeId(row[2]);
            setshow(true);
          }}
          id="btn"
          className={"btn btn-" + color}
        >
          <AiFillLock />
        </button>
      </td>

      {In ? handleAccess(row[2]) : <> </>}
    </tr>
  );
}

export default TableRow;
