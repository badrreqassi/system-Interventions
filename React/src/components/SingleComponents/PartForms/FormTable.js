import React, { useEffect, useState } from "react";
import $ from "jquery";
import TableRow from "./TableRow";
import { useNavigate } from "react-router-dom";
import { FcRefresh } from "react-icons/fc";
import { useSelector } from "react-redux";

const handleChange = (e) => {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
};

function FormTable({ title, data, id }) {
  const typeuser = useSelector((state) => state.employees.typeuser);
  const [Access, setAccess] = useState(true);
  useEffect(() => {
    if (typeuser == false && data.title == "EmployeeCompany") {
      setAccess(false);
      console.log(Access);
    }
  }, [Access]);
  const [thead, setThead] = useState([]);
  const [tbody, setTbody] = useState([]);
  const [Ids, setIds] = useState([]);
  const [cin, setCin] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    var res = [];
    var res2 = [];
    var res3 = [];
    var res4 = [];

    for (let index = 0; index < data.length; index++) {
      Object.keys(data[index]).map((key, i) => {
        if (key !== id) {
          res2.push(data[index][key]);
          if (index == 0) {
            res.push(key);
          }
        }

        if (key === id) {
          res3.push(data[index][key]);
        }
        if (key === "cin") {
          res4.push(data[index][key]);
        }
      });
    }

    console.log(res4);
    setThead(res);
    setTbody(res2);
    setIds(res3);
    setCin(res4);
  }, []);

  const splitIntoChunks = (array, size) => {
    let result = [];

    for (var i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }

    return result;
  };
  const splitedBody = splitIntoChunks(tbody, thead.length);

  const Handle = (data, ids, cin) => {
    var element = [];
    for (let index = 0; index < data.length; index++) {
      element.push(data[index], ids[index], cin[index]);
    }

    return splitIntoChunks(element, 3);
  };

  const test = Handle(splitedBody, Ids, cin);
  console.log(test);
  return (
    <div className="container text-center">
      <h2 className="text-danger"> {title}</h2>
      <p>Type something in the input field to search the table : </p>
      <input
        className="form-control"
        id="myInput"
        type="text"
        placeholder="Search.."
        onChange={handleChange}
      />
      <br />
      <button
        id="btnRefresh"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="For refresh data"
        onClick={() => {
          nav("/break");
        }}
      >
        <FcRefresh size={"30px"} /> Refresh
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {thead.map((input, key) => {
              return <th key={key}>{input}</th>;
            })}
            <td colSpan={"2"}>
              <strong>Actions</strong>
            </td>

            <td hidden={Access}>
              <strong>Access</strong>
            </td>
          </tr>
        </thead>
        <tbody id="myTable">
          {test.map((row) => (
            <TableRow row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormTable;
