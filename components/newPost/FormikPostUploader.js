import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Yup from 'yup'


const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = () => {
  return (
    <Text>FormikPostUploader</Text>
  )
}

export default FormikPostUploader