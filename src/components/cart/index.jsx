import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartModal from '../cartModal';

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
      <Text style={styles.title}>VR Store</Text>

      <View>{cart.length > 0 ? (
        <CartModal
          hasItemSelected={true}
          showCartModal={showCartModal}
          itemsSelectedCart={cart}
          callbackShowCartModal={modalShow => setShowCartModal(modalShow)}
          callbackRemoveItemShop={itemRemove => removeCardItemShop(itemRemove)}
        />

      ) : (
        <CartModal
          hasItemSelected={false}
          showCartModal={showCartModal}
          callbackShowCartModal={modalShow => setShowCartModal(modalShow)}
        />
      )
      }</View>

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