import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
    <FormikPostUploader />
  </View>
)

const Header = () => (
  <View style={styles.headerContainer}>
  <TouchableOpacity>
    <Image
      source={{ uri: 'https://img.icons8.com/nolan/64/circled-left--v1.png' }}
      style={{ width: 30, height: 30}}
    />
  </TouchableOpacity>
  <Text style={ styles.headerText }> New Post </Text>
  {/*a hack, adding empty text to center the text above, parent component has space between style */}
  <Text></Text>
</View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  }
})

export default AddNewPost