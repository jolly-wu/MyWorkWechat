// ImageView.js

import PropTypes from 'prop-types'
import { requireNativeComponent, View } from 'react-native'

var iface = {
  name: 'CrazyButton',
  propTypes: {
    title: PropTypes.string,
    onClick: PropTypes.func,
    ...View.propTypes
  }
}

module.exports = requireNativeComponent('CrazyButton', iface)
