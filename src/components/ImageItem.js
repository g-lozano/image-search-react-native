import React from 'react';
import { Text, View, Image } from 'react-native';

import { Card, CardSection, Button } from './';


const ImageItem = ({image}) => {

  const { title, media } = image;

  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection style={{ flex: 1, alignItems: 'stretch'}}>
        <Image 
          style={imageStyle}
          source={{uri: media.m}}
          resizeMode='contain'
        />
      </CardSection>
    </Card>   
  );
};

const styles = {
  headerContentStyle : {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 18,
    color: 'white'
  },
  imageStyle: {
    height:300,
    flex: 1,
    width: null
  }
};

export { ImageItem }