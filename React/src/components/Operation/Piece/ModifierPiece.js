import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectMachine from "../../SingleComponents/PartForms/Select/SelectMachine";
import { useParams } from "react-router-dom";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { get_One_Piece } from "../../../redux/actions/actionPiece";

function ModifierPiece() {
  const params = useParams();

  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const onePiece = useSelector((state) => state.piece.onePiece);

  const machine = useSelector((state) => state.machine.machines);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [machine_id, setMachine_id] = useState([]);
  const [inputs, setInputs] = useState({});

  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    dispatch(get_One_Piece(params.idPiece));
  }, []);

  useEffect(() => {
    if (onePiece) {
      setTimeout(() => {
        setLoading(true);
      }, 1);
    }

    dispatch(getDataFK({ machine_id }));
    dispatch(getData({ user: inputs }));
  }, [inputs, machine_id, onePiece]);

  const handleAjouter = () => {
    dispatch(Update(data.title, { id: params.idPiece, body: body, FK: FK }));
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };

  const handleMachine = (data) => {
    setMachine_id(data);
  };
  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div className="text-center">
      <NavOp table={"Piece"} />
      {loading ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <label>
            <strong> Machine</strong>
          </label>
          <br />
          <SelectMachine
            putOn={onePiece}
            data={machine}
            name={"machine_id"}
            handledata={handleMachine}
          />
          <br />
          <FormInputs
            putOn={onePiece.piece}
            data={data.content.inputs}
            handledata={handleInput}
          />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "10%", width: "20%" }}
            onClick={handleAjouter}
          >
            Modifier
          </button>
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "10%", width: "20%" }}
            onClick={handleCancle}
          >
            Cancle
          </button>
        </div>
      ) : (
        <div> Your data Not Found </div>
      )}
    </div>
  );
}

export default ModifierPiece;
