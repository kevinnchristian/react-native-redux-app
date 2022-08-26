import {
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: StatusBar.currentHeight + 2,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 290,
    width: Dimensions.get('window').width - 30,
    marginBottom: 50,
    position: 'relative',
  },
  image: {
    height: 160,
    width: 220,
    position: 'absolute',
    zIndex: 99,
  },
  infoBox: {
    position: 'absolute',
    top: 125,
  },
  gradient: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 160,
    width: 270,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 20,
  },
  productName: {
    color: '#E5EAEF',
    fontSize: 18,
    fontWeight: '500',
  },
  brandName: {
    color: '#E5EAEF',
    fontSize: 14,
  },
  price: {
    color: '#E5EAEF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonAddToCart: {
    backgroundColor: '#EF44F2',
    borderRadius: 4,
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  textButtonAdd: {
    color: '#E5EAEF',
    fontSize: 16,
    fontWeight: '500',
  }
});