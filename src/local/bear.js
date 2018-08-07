import { FACES, MOOD_LABELS } from '../constant';

export const bear = {
  id: 1,
  name: FACES.bear.name,
  face_acronym: FACES.bear.face_acronym,
  icon: require('../assets/images/bear/bear.png'),
  moods: [
    {
      icon: require('../assets/images/bear/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/bear/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/bear/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/bear/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/bear/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/bear/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/bear/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/bear/lonely.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
