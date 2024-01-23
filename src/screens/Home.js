import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>My App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 60,
    alignSelf: 'center',
  },
  buttonStyle: {
    padding: 10,
  },
  inputText: {
    height: 50,
    width: 100,
    borderWidth: 1,
    fontSize: 24,
    padding: 10,
    marginRight: 10,
  },
  inputView: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
export default Home;
