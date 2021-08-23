package com.track2player;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.track2player.module.MusicModule2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Track2Player
 * https://github.com/react-native-kit/react-native-track-player
 *
 * @author Guichaguri
 */
public class TrackPlayer1 implements ReactPackage {


  List<NativeModule> modules = new ArrayList<>();

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    modules.add(new MusicModule2(reactContext, "TrackPlayerModule1"));
    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

}
