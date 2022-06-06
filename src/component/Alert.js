import React from "react";

export default function Alert({ AlertNotif }) {
  return (
    <div>
      {AlertNotif.status === 201 ? (
        <div className="flex justify-center items-center w-[350px] bg-green-500 h-12 rounded-md">
          <div className="text-white ">{AlertNotif.message}</div>
        </div>
      ) : AlertNotif.status === 500 ? (
        <div className="flex justify-center items-center w-[350px] bg-red-500 h-12 rounded-md">
          <div className="text-white ">{AlertNotif.message}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
