import Toast from 'react-native-simple-toast';
import { LIKE_PROFILE, DISLIKE_PROFILE } from './actions';
import Profiles from '../utils/profile';

export const addItemToLike = (profile) => dispatch => {
  
  var index = Profiles.findIndex(x => x.id === profile.id) + 1;
  if (index < Profiles.length) {
    dispatch({
      type: LIKE_PROFILE,
      profile: Profiles[index]
    });
  } else {
    Toast.show('No more Profile found!', Toast.SHORT);
  }
};


export const addItemToDisLike = profile => dispatch => {

  var index = Profiles.findIndex(x => x.id === profile.id) - 1;
  if (index >= 0) {
    dispatch({
      type: DISLIKE_PROFILE,
      profile: Profiles[index]
    });
  } else {
    Toast.show('No more Profile found!', Toast.SHORT);
  }
};