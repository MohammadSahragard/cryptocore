import { configureStore } from '@reduxjs/toolkit';
// reducers
import optionsSlice from '../features/global-options/optionsSlice';


const store = configureStore({
  reducer: {
    options: optionsSlice
  },
});


export default store;