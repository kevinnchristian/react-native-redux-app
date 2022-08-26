import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingVertical: 8,
    position: 'relative',
  },
  containerCart: {
    flexDirection: 'row',
    elevation: 10,
    position: 'absolute',
    top: 2,
    right: 15,
  },
  title: {
    color: '#F4F9FF',
    fontFamily: 'metavers',
    fontSize: 40,
  },
  touchableCart: {
    position: 'relative',
    top: 8,
    left: -4,
  },
  numberContentCart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0554F2',
    borderRadius: 3,
    elevation: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  numberItems: {
    color: '#E5EAEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
