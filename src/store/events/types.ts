import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

import { IEvent } from './interfaces';
import { AsyncState } from '../lib/reducerUtils';

export type EventsAction = ActionType<typeof actions>;

export type EventsState = {
    list: AsyncState<IEvent[], Error>;
};

// NOTICE : 새로운 기능이 추가될 경우 이쪽에 state 내용을 추가로 선언할 것
