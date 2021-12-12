import React from "react";
// import PropTypes from "prop-types";
import Info from "./Info";

const InfoList = ({ infos, onDeleteClick, onEditClick }) => {
  return infos.map((info) => (
    <Info
      key={info?.id}
      counter={info?.id}
      name={info?.name}
      number={info?.number}
      post={info?.post}
      nationality={info?.nationality}
      onDelete={onDeleteClick}
      onEdit={onEditClick}
      isEditing={info?.isEditing}
    />
  ));
};

export default InfoList;
