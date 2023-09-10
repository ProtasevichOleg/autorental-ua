import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Loader = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default Loader;
