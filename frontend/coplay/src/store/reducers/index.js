// store/reducers/index.js

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import account from './account';
import game from './game';
import join from './join';
import club from './club';
import sport from './sport';
import playground from './playground';

const rootReducer = (history) => (
  combineReducers({
    router: connectRouter(history),
    account,
    game,
    join,
    club,
    sport,
    playground,

  })
);

export default rootReducer;
