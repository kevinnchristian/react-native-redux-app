import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import Shop from './screens/shop';

const AppStartup = () => {
  return (
    <>
      <Provider
        store={store}
      >
        <StatusBar
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaView
          style={{ backgroundColor: '#010B40' }}
        >
          <Shop />
        </SafeAreaView>
      </Provider>
    </>
  );
}

export default AppStartup;