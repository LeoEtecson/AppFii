import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii1.png')} />
          <Text style={styles.price}>Cotação: R$ 97,99</Text>
          <Text style={styles.pvp}>PVP: N/A</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii2.png')} />
          <Text style={styles.price}>Cotação: R$ 7,60</Text>
          <Text style={styles.pvp}>PVP: 0,88</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii3.png')} />
          <Text style={styles.price}>Cotação: R$ 65,54</Text>
          <Text style={styles.pvp}>PVP: 0,65</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii4.png')} />
          <Text style={styles.price}>Cotação: R$ 96,76</Text>
          <Text style={styles.pvp}>PVP: 1,02</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii5.png')} />
          <Text style={styles.price}>Cotação: R$ 53,46</Text>
          <Text style={styles.pvp}>PVP: 0,63</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii6.png')} />
          <Text style={styles.price}>Cotação: R$ 96,00</Text>
          <Text style={styles.pvp}>PVP: N/A</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii7.png')} />
          <Text style={styles.price}>Cotação: R$ 7,65</Text>
          <Text style={styles.pvp}>PVP: 0,92</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii8.png')} />
          <Text style={styles.price}>Cotação: R$ 108,27</Text>
          <Text style={styles.pvp}>PVP: 1,02</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii9.png')} />
          <Text style={styles.price}>Cotação: R$ 9,46</Text>
          <Text style={styles.pvp}>PVP: 0,94</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('../App2/assets/fii10.png')} />
          <Text style={styles.price}>Cotação: R$ 99,97</Text>
          <Text style={styles.pvp}>PVP: 1,05</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  scrollView: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3, 
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 440, 
    height: 100,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 5,
  },
  pvp: {
    fontSize: 16,
    color: '#555', 
  },
});

