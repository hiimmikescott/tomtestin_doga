import { StyleSheet, TextInput, Pressable, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.TextStyle}>testtömegindex számító</Text>
      </View>

      <View style={styles.middleContent}>
        <View style={styles.inputtext}>
          <Text style={styles.TextStyle}>tömeg</Text>
          <TextInput style={styles.inputfield} />
        </View>
        <View style={styles.inputtext}>
          <Text style={styles.TextStyle}>magasság</Text>
          
          <TextInput style={styles.inputfield} />
        </View>
        <Pressable style={styles.button} onPress={() => console.log('Button Pressed')}>
          <Text style={styles.buttonText}>számit</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.TextStyle}>készítette: Szekeres Miklós 2024.02.28</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
  },
  header: {
    backgroundColor: 'coral',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center', 
  },
  inputtext: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputfield: {
    height: 40,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16, 
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'skyblue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  TextStyle: {
    fontSize: 25,
  },

});
