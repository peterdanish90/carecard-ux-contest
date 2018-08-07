import { FACES, MOOD_LABELS } from '../constant';

export const chick = {
  id: 1,
  name: FACES.chick.name,
  face_acronym: FACES.chick.face_acronym,
  icon: require('../assets/images/chick/chick.png'),
  moods: [
    {
      icon: require('../assets/images/chick/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/chick/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/chick/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/chick/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/chick/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/chick/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/chick/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/chick/lonely.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
