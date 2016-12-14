import { combineReducers } from 'redux';


const initialState = {
  name: 'Duncan Crocker',
  title: 'Sales Engineer',
  email: 'dcrocker@dotlink.com',
  officePhone: '123 456 7890',
  mobilePhone: '123 555 7890',
  location: 'Calfornia'
};

export const userDetails = (state = initialState, action) => {
  switch (action.type) {
  default: {
    return state;
  }
  }
};

export default userDetails;
