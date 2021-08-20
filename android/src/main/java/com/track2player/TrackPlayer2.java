package com.track2player;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.track2player.module.MusicModule2;

import java.util.Collections;
import java.util.List;

/**
 * Track2Player
 * https://github.com/react-native-kit/react-native-track-player
 * @author Guichaguri
 */
public class TrackPlayer2 implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    return Collections.singletonList(new MusicModule2(reactContext));
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

}
