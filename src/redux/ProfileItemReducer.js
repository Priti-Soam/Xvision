import Profiles from '../utils/profile';
import {LIKE_PROFILE, DISLIKE_PROFILE} from './actions';

const initialState = {
    profile: Profiles[0]
}
const ProfileItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_PROFILE:
        case DISLIKE_PROFILE:
            return {
                ...state,
                profile: action.profile,
              };
        default:
           return state;
    }}

export default ProfileItemReducer