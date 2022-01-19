import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Add } from "../../../redux/actions/actionOperation";
import { getData } from "../../../redux/actions/actionLogin";

function Btn_Modal({ op, hidden }) {
  const treatment = useSelector((state) => state.dataOperations.data);
  const body = useSelector((state) => state.employees.data);
  const FK = useSelector((state) => state.employees.dataFK);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [show, setShow] = useState(false);

  // 1

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    dispatch(Add("Treatments", { body: body, FK: FK }));
    setShow(false);
    nav("/");
  };

  // 2
  const onsubmit = (data) => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "T" +
        today.getHours() +
        ":" +
        today.getMinutes();

    var B = {
      startTreatment: treatment.startTreatment,
      treatmentEnd: date,
      description_Treatment: data.description_Treatment,
    };
    dispatch(getData({ user: B }));
  };

  return (
    <div>
      <Button hidden={hidden} id="comments" onClick={handleShow}>
        <BsChevronDoubleRight color="black" />
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <strong>insert your Description</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onChange={handleSubmit(onsubmit)}>
            <textarea
              className="form-control "
              name="description_Treatment"
              rows="5"
              {...register("description_Treatment", {
                required: true,
              })}
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Btn_Modal;
// id="btn_Op"
/*
switch (click) {
            case "Company":{
              access  ? nav('/company') :nav('/operations')
              
              break ;
            }
            case "Complaints":{
               access  ? nav('/complain') :nav('/operations')
                
               break ;
            }
            case "Treatments":{
                access ? nav('/treatment') :nav('/operations')
                 
                break ;
             }
             case "Days Worked":{
                access ? nav('/daysWorked') :nav('/operations')
                 
                break ;
             }
             case "Machine":{
                access ? nav('/machine') :nav('/operations')
                 
                break ;
             }
             case "Piece":{
                access ? nav('/piece') :nav('/operations')
                
                break ;
             }
            
        }
         */
