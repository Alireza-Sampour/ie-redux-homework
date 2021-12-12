import React from "react";
import AddInfo from "../containers/AddInfo";
import InfoList from "../containers/InfoList";

let inputs = {
  user_name: "نام بازیکن",
  number: "شماره",
  post: "پست",
  nationality: "ملیت",
};

function focus_input(e) {
  var input;
  if (e.target !== undefined) {
    input = e.target;
  } else {
    input = e;
  }
  if (input.value !== "") {
    input.classList.add("has-content");
  } else {
    input.classList.remove("has-content");
  }
}

const App = () => (
  <div className="main_dash">
    <div className="main_dash_left">
      <div className="content_main">
        <div className="card_main">
          <div className="card_main_head">
            <h2>ثبت‌نام بازیکنان</h2>
          </div>
          <AddInfo inputs={inputs} focus_input={focus_input} />
          <div className="tbl_main">
            <table className="width-100">
              <thead className="text-center">
                <tr>
                  <th className="width-10">ردیف</th>
                  <th className="width-10">حذف</th>
                  <th className="width-10">ویرایش</th>
                  {Object.values(inputs).map((value) => (
                    <th key={value} className="width-10">
                      {value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-center" id="tbody_tbl">
                <InfoList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
