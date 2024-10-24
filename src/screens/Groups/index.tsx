import { StyleSheet, Text, View } from 'react-native'

export function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groups Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fafafa',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
