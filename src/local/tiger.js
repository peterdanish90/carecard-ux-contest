import { FACES, MOOD_LABELS } from '../constant';

export const cute_tiger = {
  id: 1,
  name: FACES.cute_tiger.name,
  face_acronym: FACES.cute_tiger.face_acronym,
  icon: require('../assets/images/tiger/tiger.png'),
  moods: [
    {
      icon: require('../assets/images/tiger/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/tiger/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/tiger/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/tiger/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/tiger/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/tiger/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/tiger/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/tiger/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
