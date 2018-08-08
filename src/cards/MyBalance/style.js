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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -10,
  },
  balanceTypeIcon: {
    fontSize: 24,
    color: Colors.primaryColor,
    fontWeight: '600',
    textAlignVertical: 'center',
  },
  balanceTypeText: {
    fontSize: 16,
    color: Colors.blackColor,
    textAlignVertical: 'center',
  },
})

export default style
