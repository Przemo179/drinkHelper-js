/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import '../../images/svg/minus.svg'
import '../../styles/main.scss';

function TdAmountOf ({id, amountOf}) {
  const [volume, setVolume] = useState(amountOf);

  const changeValue = (e) => {
    if (e > 0 && e < 1000) setVolume(e);
    else {
      document.querySelector('#volumeInput').classList.add('border', 'border-danger');
    }
  }
  return (
    <td>
      <div className="d-flex align-items-center" id="change-volume">
        <input
          id="volumeInput"
          disabled
          className="mx-1"
          min={0}
          max={1000}
          type="number" 
          name="quantity"
          value={volume}
          onChange={(e) => changeValue(e.target.value)}
        />
        <span className="ms--20">lb</span>

        <div className="d-flex ms-4">
          <button className="btn btn-primary mx-2" id="changeBtn"
            onClick={() => {
              document.querySelector('#volumeInput').removeAttribute("disabled");
              document.querySelector('#changeBtn').classList.add("d-none");
              document.querySelector('#confirmBtn').classList.remove("d-none");

            }}>
            Change
          </button>
          <button className="btn d-none btn-primary mx-2" id="confirmBtn"
            onClick={() => {
              document.querySelector('#volumeInput').setAttribute("disabled", "");
              document.querySelector('#changeBtn').classList.remove("d-none");
              document.querySelector('#confirmBtn').classList.add("d-none");
            }}>
            Confirm
          </button>
          <button className="btn btn-warning"
            onClick={() => {
              document.querySelector('#volumeInput').setAttribute("disabled", "");
              document.querySelector('#changeBtn').classList.remove("d-none");
              document.querySelector('#confirmBtn').classList.add("d-none");
            }}>
            Reject
          </button>
        </div>
      </div>
    </td>
  );
}

export default TdAmountOf;