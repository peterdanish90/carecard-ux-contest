import { FACES, MOOD_LABELS } from '../constant';

export const raccoon = {
  id: 1,
  name: FACES.raccoon.name,
  face_acronym: FACES.raccoon.face_acronym,
  icon: require('../assets/images/raccoon/raccoon.png'),
  moods: [
    {
      icon: require('../assets/images/raccoon/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/raccoon/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/raccoon/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/raccoon/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/raccoon/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/raccoon/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/raccoon/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/raccoon/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
