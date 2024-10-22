import React, { useState } from "react";
import Wrapper from "../Wrapper";
import Button from "../../components/Button";

const UpdateValues = (props) => {
  const [editState, setEditState] = useState({
    minInvestment: false,
    directPercent: false,
    withdrawFee: false,
    owner: false,
    minWithdraw: false,
    maxWithdraw: false,
  });


  const [localValues, setLocalValues] = useState({
    minimum_investment: props.minimum_investment || 0,
    directPercent: 7,
    withdrawFee: 6,
    owner: props.owner || "",
    minWithdraw: props.minWithdraw || 0,
    maxWithdraw: props.maxWithdraw || 0,
  });

  const handleInputChange = (field, value) => {
    setLocalValues({ ...localValues, [field]: value });
  };


  const toggleEditState = (field) => {
    setEditState((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };


  return (
    <Wrapper title="Update Value">
      <section className="sm:w-[80%] w-full mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 gap-12">
          {/* Minimum Investment */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px]">
                Min Investment
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.minInvestment ? (
                <input
                  type="number"
                  value={localValues.minimum_investment}
                  onChange={(e) =>
                    handleInputChange("minimum_investment", e.target.value)
                  }
                  className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.minimum_investment
                    ? Number(localValues.minimum_investment) / 10 ** 6
                    : 0}
                </h4>
              )}
              <Button
                label={editState.minInvestment ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("minInvestment")}
              />
            </div>
          </div>

          {/* Direct Percent */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px]">
                Direct percent
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.directPercent ? (
                <input
                  type="number"
                  value={localValues.directPercent}
                  onChange={(e) =>
                    handleInputChange("directPercent", e.target.value)
                  }
                className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.directPercent}%
                </h4>
              )}
              <Button
                label={editState.directPercent ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("directPercent")}
              />
            </div>
          </div>

          {/* Withdraw Fee */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px] pt-4">
                Withdraw Fee
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.withdrawFee ? (
                <input
                  type="number"
                  value={localValues.withdrawFee}
                  onChange={(e) =>
                    handleInputChange("withdrawFee", e.target.value)
                  }
                  className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.withdrawFee}%
                </h4>
              )}
              <Button
                label={editState.withdrawFee ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("withdrawFee")}
              />
            </div>
          </div>

          {/* Owner */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px] pt-4">
                Owner
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.owner ? (
                <input
                  type="text"
                  value={localValues.owner}
                  onChange={(e) =>
                    handleInputChange("owner", e.target.value)
                  }
                   className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.owner ? localValues.owner.slice(0, 5) : "7"}
                </h4>
              )}
              <Button
                label={editState.owner ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("owner")}
              />
            </div>
          </div>

          {/* Min Withdraw */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px] pt-4">
                Min. Withdraw
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.minWithdraw ? (
                <input
                  type="number"
                  value={localValues.minWithdraw}
                  onChange={(e) =>
                    handleInputChange("minWithdraw", e.target.value)
                  }
                   className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.minWithdraw
                    ? Number(localValues.minWithdraw) / 10 ** 18
                    : 0}
                </h4>
              )}
              <Button
                label={editState.minWithdraw ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("minWithdraw")}
              />
            </div>
          </div>

          {/* Max Withdraw */}
          <div className="p-4 border-2 border-[#FFE247] mx-auto w-[237px] rounded-2xl">
            <div>
              <h2 className="text-white font-semibold text-[25px] pt-4">
                Max. Withdraw
              </h2>
            </div>
            <div className="flex justify-between items-center pt-3">
              {editState.maxWithdraw ? (
                <input
                  type="number"
                  value={localValues.maxWithdraw}
                  onChange={(e) =>
                    handleInputChange("maxWithdraw", e.target.value)
                  }
                   className="text-black text-[20px] h-10 pl-1    border rounded-lg outline-none w-20  font-medium"
                />
              ) : (
                <h4 className="text-white text-[25px] font-medium">
                  {localValues.maxWithdraw
                    ? Number(localValues.maxWithdraw) / 10 ** 18
                    : 0}
                </h4>
              )}
              <Button
                label={editState.maxWithdraw ? "Update" : "Edit"}
                className={"px-6 bg-button-gradient text-black"}
                onClick={() => toggleEditState("maxWithdraw")}
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default UpdateValues;
