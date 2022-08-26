import {
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import 'intl';
import "intl/locale-data/jsonp/en-US";

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style';

type Props = {
  hasItemSelected: boolean,
  showCartModal: boolean,
  itemsSelectedCart?: any,
  callbackShowCartModal: any,
  callbackRemoveItemShop?: any,
}

const CartModal = ({
  hasItemSelected,
  showCartModal,
  itemsSelectedCart,
  callbackShowCartModal,
  callbackRemoveItemShop,
}: Props) => {
  return (
    <Modal
      animationType='slide'
      visible={showCartModal}
      transparent={true}
      onRequestClose={() => callbackShowCartModal(!showCartModal)}
    >
      <View style={styles.modalBody}>
        <TouchableOpacity
          style={styles.contentCloseButton}
          onPress={() => callbackShowCartModal(!showCartModal)}
        >
          <AntDesign
            name='closesquare'
            size={32}
            color='#F20574'
          />
        </TouchableOpacity>


        <View>{hasItemSelected ? (
          <View>
            <View>{itemsSelectedCart.map((item, index) => (
              <View
                key={index}
                style={styles.lineItemAdded}
              >
                <Text
                  style={styles.textItemAdded}
                >{item.name}
                </Text>

                <TouchableOpacity onPress={() => callbackRemoveItemShop(index)}>
                  <FontAwesome5
                    name='trash'
                    size={20}
                    color='#0554F2'
                  />
                </TouchableOpacity>
              </View>

            ))}</View>

            <View style={styles.contentSubtotal}>
              <Text
                style={styles.textSubtotal}
              >
                Subtotal ({itemsSelectedCart.length}): {
                  Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(itemsSelectedCart?.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.price;
                  }, 0))
                }
              </Text>
            </View>
          </View>

        ) : (

          <View>
            <Text
              style={styles.textIsEmpty}
            >Cart is empty</Text>
          </View>

        )}</View>

      </View>
    </Modal>
  );
}

export default CartModal;