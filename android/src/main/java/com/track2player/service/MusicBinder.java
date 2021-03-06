package com.track2player.service;

import android.os.Binder;
import android.os.Bundle;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.track2player.service.metadata.MetadataManager;
import com.track2player.service.models.NowPlayingMetadata;
import com.track2player.service.models.Track;
import com.track2player.service.player.ExoPlayback;

/**
 * @author Guichaguri
 */
public class MusicBinder extends Binder {

  private final MusicService service;
  private final MusicManager manager;

  public MusicBinder(MusicService service, MusicManager manager) {
    this.service = service;
    this.manager = manager;
  }

  public void post(Runnable r) {
    service.handler.post(r);
  }

  public ExoPlayback getPlayback() {
    ExoPlayback playback = manager.getPlayback();

    // TODO remove?
    if(playback == null) {
      playback = manager.createLocalPlayback(new Bundle());
      manager.switchPlayback(playback);
    }

    return playback;
  }

  public void setupPlayer(Bundle bundle, Promise promise) {
    manager.switchPlayback(manager.createLocalPlayback(bundle));
    promise.resolve(null);
  }

  public void updateOptions(Bundle bundle) {
    manager.setStopWithApp(bundle.getBoolean("stopWithApp", false));
    manager.setAlwaysPauseOnInterruption(bundle.getBoolean("alwaysPauseOnInterruption", false));
    manager.getMetadata().updateOptions(bundle);
  }

  public void updateNowPlayingMetadata(NowPlayingMetadata nowPlaying) {
    MetadataManager metadata = manager.getMetadata();

    // TODO elapsedTime
    metadata.updateMetadata(getPlayback(), nowPlaying);
    metadata.setActive(true);
  }

  public void clearNowPlayingMetadata() {
    manager.getMetadata().setActive(false);
  }

  public int getRatingType() {
    return manager.getMetadata().getRatingType();
  }

  public void destroy() {
    service.destroy();
    service.stopSelf();
  }

}
