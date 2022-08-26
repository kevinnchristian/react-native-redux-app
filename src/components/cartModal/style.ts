import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  modalBody: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#E5EAEF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 5,
  },
  contentCloseButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  lineItemAdded: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 340,
    borderBottomWidth: 2.5,
    borderColor: '#010c4018',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    marginBottom: 8,
  },
  textItemAdded: {
    justifyContent: 'center',
    color: '#010B40',
    fontSize: 16,
    fontWeight: '500',
  },
  contentSubtotal: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  textSubtotal: {
    color: '#010B40',
    fontSize: 18,
    fontWeight: '700',
  },
  textIsEmpty: {
    color: '#010B40',
    fontSize: 22,
    fontWeight: '700',
  }
});