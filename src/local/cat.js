import { FACES, MOOD_LABELS } from '../constant';

export const cat = {
  id: 1,
  name: FACES.cat.name,
  face_acronym: FACES.cat.face_acronym,
  icon: require('../assets/images/cat/cat.png'),
  moods: [
    {
      icon: require('../assets/images/cat/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/cat/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/cat/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/cat/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/cat/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/cat/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/cat/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/cat/lonely.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
