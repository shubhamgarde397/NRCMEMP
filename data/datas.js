import {AsyncStorage} from 'react-native';


_storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:key',
        'I like to save it.',
      );
    } catch (error) {
      // Error saving data
    }
  };