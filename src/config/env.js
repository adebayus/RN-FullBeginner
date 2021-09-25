import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvirontmentVariable = {
  DEV_BACKEND_URL,
};

const prodEnvirontmentVariable = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvirontmentVariable : prodEnvirontmentVariable;
