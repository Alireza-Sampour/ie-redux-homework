import { connect } from "react-redux";
import { editInfo, delInfo } from "../actions/index";
import InfoList from "../components/InfoList";

const getInfos = (infos) => {
  return infos;
};

const mapStateToProps = (state) => {
  return {
    infos: getInfos(state.infos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(delInfo(id));
    },
    onEditClick: (id, name, number, post, nationality, edit = false) => {
      dispatch(editInfo(id, name, number, post, nationality, edit));
    },
  };
};

const VInfoList = connect(mapStateToProps, mapDispatchToProps)(InfoList);

export default VInfoList;
