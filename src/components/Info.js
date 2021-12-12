import React from "react";
// import PropTypes from "prop-types";

const Info = ({
  counter,
  name,
  number,
  post,
  nationality,
  onDelete,
  onEdit,
  isEditing,
}) => {
  if (isEditing === true) {
    return (
      <tr className="tbl_head_small_row">
        <td className="width-10">
          <p className="tbl_data"> {counter}</p>
        </td>
        <td className="width-10"></td>
        <td className="width-10">
          <input
            className="success"
            type="button"
            value="ثبت"
            onClick={() =>
              onEdit(
                counter,
                document.getElementById("na" + counter).value,
                document.getElementById("nu" + counter).value,
                document.getElementById("po" + counter).value,
                document.getElementById("nat" + counter).value
              )
            }
          />
        </td>
        <td className="width-10">
          <input
            id={"na" + counter}
            type="text"
            className="effect-19 tbl_data"
            defaultValue={name}
          />
        </td>
        <td className="width-10">
          <input
            id={"nu" + counter}
            type="text"
            className="effect-19 tbl_data"
            defaultValue={number}
          />
        </td>
        <td className="width-10">
          <input
            id={"po" + counter}
            type="text"
            className="effect-19 tbl_data"
            defaultValue={post}
          />
        </td>
        <td className="width-10">
          <input
            id={"nat" + counter}
            type="text"
            className="effect-19 tbl_data"
            defaultValue={nationality}
          />
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="tbl_head_small_row">
        <td className="width-10">
          <p className="tbl_data">{counter}</p>
        </td>
        <td className="width-10">
          <input
            className="danger"
            type="button"
            value="حذف"
            onClick={() => onDelete(counter)}
          />
        </td>
        <td className="width-10">
          <input
            className="warning"
            type="button"
            value="ویرایش"
            onClick={() => onEdit(counter, "", -1, "", "", true)}
          />
        </td>
        <td className="width-10">
          <p className="tbl_data">{name}</p>
        </td>
        <td className="width-10">
          <p className="tbl_data">{number}</p>
        </td>
        <td className="width-10">
          <p className="tbl_data">{post}</p>
        </td>
        <td className="width-10">
          <p className="tbl_data">{nationality}</p>
        </td>
      </tr>
    );
  }
};

export default Info;
