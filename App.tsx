import { ActivityIndicator, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import AppStartup from './src';

const App = () => {
  const [fontsLoaded] = useFonts({
    'metavers': require('./src/assets/fonts/metavers.regular.ttf')
  });

  return (
    <>
      {
        fontsLoaded ?
          <AppStartup />
          :
          <ActivityIndicator
            color="#d2d3d2"
            size="large"
            style={{ paddingTop: Dimensions.get('window').height / 2 }}
          />
      }
    </>
  );
}

export default App;