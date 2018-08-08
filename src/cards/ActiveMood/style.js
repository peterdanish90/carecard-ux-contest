import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

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
  icon: {
    width: 101,
    height: 101,
    resizeMode: 'contain',
  },
  imageCaption: {
    fontSize: 16,
    color: Colors.lightgreyColor,
    paddingTop: 0,
    paddingBottom: 10,
  },
  messageContainer: {
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
  },
  message: {
    fontSize: 16,
    color: Colors.blackColor,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 80,
  },
})

export default style
