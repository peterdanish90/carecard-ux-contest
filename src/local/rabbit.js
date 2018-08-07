import { FACES, MOOD_LABELS } from '../constant';

export const rabbit = {
  id: 1,
  name: FACES.rabbit.name,
  face_acronym: FACES.rabbit.face_acronym,
  icon: require('../assets/images/rabbit/rabbit.png'),
  moods: [
    {
      icon: require('../assets/images/rabbit/happy.png'),
      ...MOOD_LABELS.happy,
    },
    {
      icon: require('../assets/images/rabbit/sad.png'),
      ...MOOD_LABELS.sad,
    },
    {
      icon: require('../assets/images/rabbit/stressed.png'),
      ...MOOD_LABELS.stressed,
    },
    {
      icon: require('../assets/images/rabbit/depressed.png'),
      ...MOOD_LABELS.depressed,
    },
    {
      icon: require('../assets/images/rabbit/angry.png'),
      ...MOOD_LABELS.angry,
    },
    {
      icon: require('../assets/images/rabbit/afraid.png'),
      ...MOOD_LABELS.afraid,
    },
    {
      icon: require('../assets/images/rabbit/lonely.png'),
      ...MOOD_LABELS.lonely,
    },
    {
      icon: require('../assets/images/rabbit/loved.png'),
      ...MOOD_LABELS.loved,
    },
  ]
};
