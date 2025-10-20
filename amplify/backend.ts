import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource'
import { data } from '/home/umanathnayak1/profilesapp/amplify/data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
});
