import { register } from 'tsconfig-paths';
import * as path from 'path';

register({
  baseUrl: path.resolve(__dirname, '..'),
  paths: {
    'src/*': ['./src/*'],
  },
});
