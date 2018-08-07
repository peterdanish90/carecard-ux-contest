import { FACES, MOOD_LABELS } from '../constant';

export const dog = {
  id: 1,
  name: FACES.dog.name,
  face_acronym: FACES.dog.face_acronym,
  icon: require('../assets/images/dog/dog.png'),
  moods: [
    {
      icon: require('../assets/images/dog/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/dog/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/dog/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/dog/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/dog/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/dog/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/dog/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/dog/lonely.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
