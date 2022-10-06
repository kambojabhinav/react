import React from 'react'

export default function Alert(props) {
  return (
    <div>
      
     props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
   
      {props.alert.type} <strong> :{props.alert.msg}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

