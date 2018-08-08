import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5,
    zIndex: 5
  },
  body: {
    flex: 1,
    marginBottom: 40,
  },
  innerBody: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: (width / 2) - 20,
    marginBottom: 10,
  },
  icon: {
    width: 93,
    height: 93,
    resizeMode: 'contain',
  },
  iconCaption: {
    fontSize: 16,
    color: Colors.lightgreyColor,
    paddingTop: 0,
    paddingBottom: 10,
  },
})

export default style
