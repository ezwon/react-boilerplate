/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: '1',
      description: 'aaa',
    },
    {
      name: '2',
      description: 'bbb',
    },
    {
      name: '3',
      description: 'ccc',
    },
  ],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
