import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { products } from '../../constants';
import { IProduct } from '../../types';

import { addNewItem } from '../../store/modules/cart/reducer';

import Cart from '../../components/cart';
import styles from './style';

const Shop = () => {
  const dispatch = useDispatch();

  const addCardItemShop = (item: IProduct) => {
    dispatch(addNewItem(item));
  }

  return (
    <View style={styles.container}>
      <Cart />

      <ScrollView style={{ paddingTop: 24 }}>
        {products?.map(item => (
          <View
            key={item.id}
            style={styles.card}
          >
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />

            <View style={styles.infoBox}>
              <LinearGradient
                style={styles.gradient}
                colors={['#010c406c', '#0554f2b5', '#0554f2']}
              >
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.brandName}>{item.brand}</Text>
                <Text style={styles.price}>{
                  Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(item.price)
                }</Text>

                <TouchableOpacity
                  style={styles.buttonAddToCart}
                  onPress={() => addCardItemShop(item)}
                >
                  <Text style={styles.textButtonAdd}>Add to Cart</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Shop;