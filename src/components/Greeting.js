import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveMessage } from '../redux/message/message';

const Greeting = () => {
  const sms = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveMessage());
  }, []);

  return <h1>{sms.greeting}</h1>;
};

export default Greeting;
