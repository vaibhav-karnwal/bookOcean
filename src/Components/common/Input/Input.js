import React from "react";

const Input = ({ ...prop }) => {

  const handler = (e) =>{
    prop.setUser(...prop.user,e.target.name = e.target.value);
  }
  return (
    <>
      <div className={"d-flex flex-row"}>
        <label className={`${prop.className} w-50 d-flex mx-2 p-2 justify-content-start`}>{prop.title} :</label>
        <input
          type={prop.type}
          id={prop.id}
          value={prop.user.value}
          onChange={()=>handler}
          className={`${prop.className} d-flex mx-2 px-2 justify-content-end input-group rounded form-control`}
          name={prop.name}
          placeholder={prop.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
