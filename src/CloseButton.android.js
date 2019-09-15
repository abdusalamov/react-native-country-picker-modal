// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import { Image, TouchableNativeFeedback, View, Platform, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const CloseButton = props => {
  let closeImage = require('./android-close.png')

  if (props.image) closeImage = props.image

  return (
    <TouchableOpacity onPress={props.onPress} style={[props.styles[0], { width: 60, marginLeft: 15 }]}>
      <Text style={{ color: '#FFCD00', fontSize: 16 }}>Отмена</Text>
    </TouchableOpacity>
  )
}

CloseButton.propTypes = {
  styles: PropTypes.array,
  onPress: PropTypes.func,
  image: PropTypes.any
}

export default CloseButton
