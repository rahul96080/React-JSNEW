import React, { useState } from 'react'

const ShowHide = () => {

const [isShown, setIsShown] = useState(true);

  function setShow() {
    setIsShown(true)
  }
  function setHide() {
    setIsShown(false)
  }
  
  return (
    <div className='container'>
       <div style={{ padding: '20px' }}>
<button className="btn btn-success" type="button" onClick={() => setShow()}>
  Show Text
</button>
</div>
{ isShown && (
<div >
  <h3> Hello React</h3>
</div>
)}


<div style={{ padding: '20px' }}>
<button className="btn btn-danger" type="button" onClick={() => setHide()}>
  Hide Text
</button>
</div>
    </div>
  )
}

export default ShowHide