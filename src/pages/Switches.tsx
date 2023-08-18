// No check can be removed once file is in typescript
import React from 'react'
import Protein from './Protein';


function Switches(): JSX.Element {

  return (
    <div>
      <div className='pb-3'>Choose from 1 of the below proteins:</div>
      <Protein/>
    </div>
  );
}

export default Switches