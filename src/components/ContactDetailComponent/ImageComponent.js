import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setIsError(true);
  };
  return (
    <View style={{height: 300, width: '100%'}}>
      {isLoading && <Text> Loading Image </Text>}
      <View>
        <Image
          style={{height: 300, width: '100%', resizeMode: 'cover'}}
          source={{uri: src}}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
