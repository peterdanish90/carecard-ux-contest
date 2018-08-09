import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Header';
import { Colors } from '../../theme';

const BackCard = (props) => {
 return(
    <View style={{ alignSelf: 'stretch' }}>
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: 10 }}
        onPress={props.onClose}
      >
        <MCIcon
          name={"close"}
          size={26}
          color={Colors.primaryColor}
        />
      </TouchableOpacity>
      <Header
        title={props.title}
        style={{ height: 100, justifyContent: 'center' }}
      />
      <Text
        style={{
          color: Colors.lightgreyColor,
          fontSize: 16,
          paddingHorizontal: 20,
          textAlign: 'center',
        }}
      >{props.desc}
      </Text>
  </View>
 );
}

export default BackCard;