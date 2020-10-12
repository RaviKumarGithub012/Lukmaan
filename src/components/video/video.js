import React, { useMemo, forwardRef } from 'react';
import { Video } from 'expo-av';

const ThemeVideo = forwardRef((props, ref) => (
  <Video
    source={{ uri: 'http://15.207.23.184/public/backend/ETHICS1.mp4' }}
    rate={1}
    volume={1}
    ref={ref}
    isMuted={!props.isPlay}
    resizeMode="stretch"
    shouldPlay={props.isPlay}
    useNativeControls={true}
    onLoadStart={props.FunIsStart}
    onFullscreenUpdate={props.toFullscreen}
    style={{
      width: props.viWidth,
      height: props.viHeight === 0 ? 250 : props.viHeight,
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0
    }}
  />
));

export default ThemeVideo;
