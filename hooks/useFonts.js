import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf')
  });