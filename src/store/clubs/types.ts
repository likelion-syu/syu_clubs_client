import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Clubs } from '../../api';

export type ClubsAction = ActionType<typeof actions>;

export type ClubsState = {
    clubData: {
        loading: boolean;
        error: Error | null;
        data: Clubs[] | null;
    };
};