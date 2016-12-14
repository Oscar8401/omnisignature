import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import Frame from 'react-frame-component';
import {Panel} from 'react-bootstrap';

import Logo from '../../public/logo.jpg';

const keyStyle = {
  display: 'inline-block',
  width: '60px'
};

const Address = (lines) => {
  return  lines.split('|').map((line) => (<div key={line}>{line}</div>))
};


const SignaturePreview = ({formValues}) => {

  const {
    fullName,
    title,
    email,
    officePhone,
    mobilePhone,
    location
  } = formValues;

  return (
    <Panel bsStyle="primary" header="Signature" style={{height: '540px'}}>
      <div style={ { width: "100%" } }>
        <Frame style={ { width: "100%", height: 280 } }>
          <div style={ { fontSize: 'small' } }>
            <div>
              <b>{ fullName }</b>
            </div>
            <div>
              <i>{ title }</i>
            </div>
            <img src={ Logo } alt='Logo' />
            <div>
              { Address(location) }
            </div>
            <br />
            <div>
              <div>
                <span style={ keyStyle }>Email</span>
                <a style={ { width: 40 } } href={ `mailto:${email}` }>
                  { email }
                </a>
              </div>
              <div>
                <span style={ keyStyle }>Office</span>
                <a href={ `tel:${officePhone}` }>
                  { officePhone }
                </a>
              </div>
              <div>
                <span style={ keyStyle }>Mobile</span>
                <a href={ `tel:${mobilePhone}` }>
                  { mobilePhone }
                </a>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </Panel>
    );
};

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues('userForm')(state)
  };
};

export default connect(mapStateToProps)(SignaturePreview);
