import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import FIcon from 'react-native-vector-icons/Feather'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import style from './style';

const CardButtons = props => {
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        style={[style.cardButton, style.topLeft]}
        activeOpacity={(props.isShowTL || props.isShowFAIcon) ? 0 : 1}
        disabled={(props.isShowTL || props.isShowFAIcon) ? false : true}
        onPress={() => props.onPressTLC()}
      >
        {
          props.isShowTL &&
          <MCIcon
            name={props.icon}
            size={18}
            style={style.buttonIconTopleft}
            color={props.buttons.bottomRight.disabled ? '#9da4b4' : '#383b42'}
          />
        }
        {
          props.isShowFAIcon &&
          <FAIcon
            name={props.icon}
            size={18}
            style={style.buttonIconTopleft}
            color={props.buttons.bottomRight.disabled ? '#9da4b4' : '#383b42'}
          />
        }
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onPressTRC()}
        style={[style.cardButton, style.topRight]}
      >
        <FIcon
          name="info"
          size={18}
          style={style.buttonIconTopRight}
          color={props.buttons.topRight.disabled ? '#9da4b4' : '#383b42'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onPressBLC()}
        style={[style.cardButton, style.bottomLeft]}
      >
        <FIcon
          name="link-2"
          size={18}
          style={style.buttonIconBottomleft}
          color={props.buttons.bottomLeft.disabled ? '#9da4b4' : '#383b42'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onPressBRC()}
        style={[style.cardButton, style.bottomRight]}
      >
        <MCIcon
          name="chart-line-variant"
          size={18}
          style={style.buttonIconBottomRight}
          color={props.buttons.bottomRight.disabled ? '#9da4b4' : '#383b42'}
        />
      </TouchableOpacity>
    </View>
  )
}

CardButtons.defaultProps = {
  buttons: {
    topLeft: {
      disabled: false,
      action: null
    },
    topRight: {
      disabled: false,
      action: null
    },
    bottomLeft: {
      disabled: false,
      action: null
    },
    bottomRight: {
      disabled: false,
      action: null
    },
  },
  onPressTLC: () => {},
  onPressTRC: () => {},
  onPressBRC: () => {},
  onPressBLC: () => {},
  isShowTL: false,
  isShowFAIcon: false,
};

CardButtons.propTypes = {
  onPressTLC: PropTypes.func,
  onPressTRC: PropTypes.func,
  onPressBRC: PropTypes.func,
  onPressBLC: PropTypes.func,
  isShowTL: PropTypes.bool,
  isShowFAIcon: PropTypes.bool,
  buttons: PropTypes.shape({
    topLeft: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    topRight: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    bottomLeft: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    bottomRight: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    })
  })
};

export default CardButtons;
