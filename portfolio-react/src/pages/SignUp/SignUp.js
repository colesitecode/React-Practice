import React from 'react';
import { InfoSection } from '../../components';
import { homeObjThree,homeObjFour } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default SignUp;
