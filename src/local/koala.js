import { FACES, MOOD_LABELS } from '../constant';

export const cute_koala = {
  id: 1,
  name: FACES.cute_koala.name,
  face_acronym: FACES.cute_koala.face_acronym,
  icon: require('../assets/images/koala/koala.png'),
  moods: [
    {
      icon: require('../assets/images/koala/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/koala/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/koala/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/koala/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/koala/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/koala/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/koala/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/koala/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
