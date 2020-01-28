import React from "react";
import iconModify from "./icons/modify.png";
import iconValidate from "./icons/validate.png";
import iconDelete from "./icons/delete.png";

function ListItem(props: $TSFixMe) {
  const { element, onDelete } = props;
  const { title, description } = element;

  return (
    <tr id={title}>
      <td className="checkbox">
        <input type="checkbox" />
      </td>
      <td className="title"> {title}</td>
      <td className="description"> {description}</td>
      <td className="dueDate">
        <input type="date" />
      </td>
      <td>
        <img
          src={iconModify}
          alt="modify"
          onClick={() => {}}
          className="action"
        ></img>
        <img
          src={iconValidate}
          alt="validate"
          onClick={() => {}}
          className="action"
        ></img>
        <img
          src={iconDelete}
          alt="delete"
          onClick={onDelete}
          className="action"
        ></img>
      </td>
    </tr>
  );
}

export default ListItem;
