import React from 'react';
import {shallow, mount} from 'enzyme';
import {store, history} from '../../../store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import {CreateCustomer} from '../CreateCustomer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

describe('Test Create Customer Component', () => {

    it('should render title', () => {
      const createCustomer = shallow(

            <CreateCustomer/>
        
      );
      //console.log(createCustomer);
      expect(createCustomer.find('Create').length).toBe(1);
    });
});
