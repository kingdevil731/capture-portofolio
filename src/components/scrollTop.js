import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollTop = () => {
  const { pathname } = useLocation();
};
export default scrollTop;
