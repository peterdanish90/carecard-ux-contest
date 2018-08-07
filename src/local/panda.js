import { FACES, MOOD_LABELS } from '../constant';

export const panda = {
  id: 1,
  name: FACES.panda.name,
  face_acronym: FACES.panda.face_acronym,
  icon: require('../assets/images/panda/panda.png'),
  moods: [
    {
      icon: require('../assets/images/panda/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/panda/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/panda/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/panda/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/panda/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/panda/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/panda/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/panda/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
