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
  messageContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.lightgreyColor,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 80,
  },
  earnPointContainer: {
    borderWidth: 5,
    borderColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: -10,
  },
  pointText: {
    fontSize: 32,
    color: Colors.blackColor,
    fontWeight: '600',
    textAlignVertical: 'center',
  },
  maxPointText: {
    fontSize: 28,
    color: Colors.blackColor,
    textAlignVertical: 'center',
  },
})

export default style
