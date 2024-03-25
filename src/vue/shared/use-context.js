import { inject } from 'vue';

export const useContext = () => {
  return inject('KonstaContext');
};
