import { requireNativeComponent, ViewStyle } from 'react-native';

type Track2playerProps = {
  color: string;
  style: ViewStyle;
};

export const Track2playerViewManager = requireNativeComponent<Track2playerProps>(
'Track2playerView'
);

export default Track2playerViewManager;
