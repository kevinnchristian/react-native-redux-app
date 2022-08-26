import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cartStateData } from '../../store/modules/cart/reducer';
import { removeCartItem } from '../../store/modules/cart/reducer';

import { AntDesign } from '@expo/vector-icons';
import styles from './style';

const Cart = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(cartStateData);

  const removeCardItemShop = (itemIndex) => {
    dispatch(removeCartItem(itemIndex));
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={showCartModal}
        onRequestClose={() => setShowCartModal(!showCartModal)}
      >
        <TouchableOpacity onPress={() => setShowCartModal(!showCartModal)}>
          <AntDesign
            name='close'
            size={28}
            color='red'
          />
        </TouchableOpacity>

        <View>{cart.length > 0 ? (
          <View>{cart.map((item, index) => (
            <View key={index}>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => removeCardItemShop(index)}>
                <AntDesign
                  name='delete'
                  size={28}
                  color='red'
                />
              </TouchableOpacity>

            </View>
          ))}</View>
        ) : (
          <View>
            <Text>Added item necessary.</Text>
          </View>
        )
        }</View>
      </Modal>

      <Text style={styles.title}>VR Store</Text>
      <View style={styles.containerCart}>
        <TouchableOpacity
          style={styles.touchableCart}
          onPress={() => setShowCartModal(!showCartModal)}
        >
          <AntDesign
            name='shoppingcart'
            size={28}
            color='#E5EAEF'
          />
        </TouchableOpacity>

        <View style={styles.numberContentCart}>
          <Text style={styles.numberItems}>
            {cart.length}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Cart;