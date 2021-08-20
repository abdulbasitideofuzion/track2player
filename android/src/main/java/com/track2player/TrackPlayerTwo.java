package com.track2player;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.track2player.module.MusicModuleTwo;

import java.util.Collections;
import java.util.List;

/**
 * Track2Player
 * https://github.com/react-native-kit/react-native-track-player
 * @author Guichaguri
 */
public class TrackPlayerTwo implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    return Collections.singletonList(new MusicModuleTwo(reactContext));
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

}
