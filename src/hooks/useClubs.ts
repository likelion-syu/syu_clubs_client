import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { getClubsListThunk } from "../store/clubs";
import { getEventsThunk } from "../store/events";

export default function useClubs() {
    const clubs = {...useSelector((state: RootState) => state.clubs.get.list)};
    const events = {...useSelector((state: RootState) => state.events.get.list)};
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClubsListThunk());
        dispatch(getEventsThunk());
    }, [dispatch]);
    const state = {
        clubs,
        events
    }
    return state
}