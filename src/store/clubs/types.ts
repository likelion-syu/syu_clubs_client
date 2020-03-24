import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

import { IClub } from './interfaces';
import { AsyncState } from '../lib/reducerUtils';

export type ClubsAction = ActionType<typeof actions>;

export type ClubsListState = {
    list : AsyncState<IClub[], Error>
}

// NOTICE : 새로운 기능이 추가될 경우 이쪽에 state 내용을 추가로 선언할 것