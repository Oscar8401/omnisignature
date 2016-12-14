import React from 'react';
import {
  Panel,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';


const Option = (props) => {
  const {placeholder, type, input, name, label, componentClass, locations} = props;
  const {value, onChange} = input;


  const options = Object.keys(locations).map((k) => {
    return <option key={ k } value={ locations[k] }> { k } </option>;
  });

  return (
    <FormGroup controlId={ name }>
      <ControlLabel>
        { label }
      </ControlLabel>
      <FormControl placeholder={ placeholder }
        type={ type }
        value={ value }
        componentClass={ componentClass }
        onChange={ onChange }>
        { options }
      </FormControl>
    </FormGroup>
    );
};

const FieldGroup = (props) => {
  const {placeholder, type, input, name, label, componentClass} = props;
  const {value, onChange} = input;

  return (
    <FormGroup controlId={ name }>
      <ControlLabel>
        { label }
      </ControlLabel>
      <FormControl placeholder={ placeholder }
        type={ type }
        value={ value }
        componentClass={ componentClass }
        onChange={ onChange }>
      </FormControl>
    </FormGroup>
    );
};

const SignatureForm = (state) => {

  return (
    <Panel bsStyle="primary" header="Enter your details and we will create your signature" style={{height: '540px'}}>
    <form>
      <Field name="fullName"
        type="text"
        placeholder='Duncan Crocker'
        label="Your Name"
        component={ FieldGroup } />
      <Field name="email"
        type="text"
        placeholder="dcrocker@dotlink.com"
        label="Email"
        component={ FieldGroup } />
      <Field name="location"
        type="select"
        label="Location"
        componentClass="select"
        locations={ state.formValues ? state.formValues.locations : state.initialValues.locations }
        component={ Option } />
      <Field name="title"
        type="text"
        placeholder="President"
        label="Title"
        component={ FieldGroup } />
      <Field name="officePhone"
        type="text"
        placeholder="123 456 7890"
        label="Office Phone"
        component={ FieldGroup } />
      <Field name="mobilePhone"
        type="text"
        placeholder="123 456 7890"
        label="Mobile Phone"
        component={ FieldGroup } />
    </form>
    </Panel>
    );
};

const initialValues = {
  fullName: 'Duncan Crocker',
  title: 'Sales Engineer',
  email: 'dcrocker@dotlink.com',
  officePhone: '123 456 7890',
  mobilePhone: '123 555 7890',
  locations: {
      'California': '2161 San Joaquin Hills Road | Newport Beach, CA 92660 ',
      'Grand Cayman': '3-110 Governors Square|Seven Mile Beach|Grand Cayman, Cayman Islands|1361GT KY1-1108'
  },
  location: '2161 San Joaquin Hills Road | Newport Beach, CA 92660 '
};


const mapStateToProps = (state) => {
  return {
    formValues: getFormValues('userForm')(state)
  };
};

const SignatureForm_ = reduxForm({
  form: 'userForm',
  initialValues: initialValues,
  enableReinitialize: true
})(SignatureForm);

const ConnectedSignatureForm = connect(mapStateToProps)(SignatureForm_);

export default ConnectedSignatureForm;



