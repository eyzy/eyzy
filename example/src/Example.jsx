import React from "react";

export default React.memo(function (props) {
  return (
    <div className='exmpl'>
      <div className="exmpl-label">{props.label}</div>
      <div className="exmpl-ctrl">{props.children}</div>
    </div> 
  )
})