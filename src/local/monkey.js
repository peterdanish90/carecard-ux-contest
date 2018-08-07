import { FACES, MOOD_LABELS } from '../constant';

export const monkey = {
  id: 1,
  name: FACES.monkey.name,
  face_acronym: FACES.monkey.face_acronym,
  icon: require('../assets/images/monkey/monkey.png'),
  moods: [
    {
      icon: require('../assets/images/monkey/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/monkey/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/monkey/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/monkey/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/monkey/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/monkey/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/monkey/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/monkey/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
