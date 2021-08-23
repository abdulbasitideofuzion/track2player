"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.PitchAlgorithm = exports.RepeatMode = exports.TrackType = exports.Event = exports.Capability = exports.RatingType = exports.IOSCategoryOptions = exports.IOSCategoryMode = exports.IOSCategory = void 0;
var react_native_1 = require("react-native");
var TrackPlayer2 = react_native_1.NativeModules.TrackPlayerModule2;
var TrackPlayer1 = react_native_1.NativeModules.TrackPlayerModule1;

var IOSCategory;
(function (IOSCategory) {
    IOSCategory["Playback"] = "playback";
    IOSCategory["PlayAndRecord"] = "playAndRecord";
    IOSCategory["MultiRoute"] = "multiRoute";
    IOSCategory["Ambient"] = "ambient";
    IOSCategory["SoloAmbient"] = "soloAmbient";
    IOSCategory["Record"] = "record";
})(IOSCategory = exports.IOSCategory || (exports.IOSCategory = {}));
var IOSCategoryMode;
(function (IOSCategoryMode) {
    IOSCategoryMode["Default"] = "default";
    IOSCategoryMode["GameChat"] = "gameChat";
    IOSCategoryMode["Measurement"] = "measurement";
    IOSCategoryMode["MoviePlayback"] = "moviePlayback";
    IOSCategoryMode["SpokenAudio"] = "spokenAudio";
    IOSCategoryMode["VideoChat"] = "videoChat";
    IOSCategoryMode["VideoRecording"] = "videoRecording";
    IOSCategoryMode["VoiceChat"] = "voiceChat";
    IOSCategoryMode["VoicePrompt"] = "voicePrompt";
})(IOSCategoryMode = exports.IOSCategoryMode || (exports.IOSCategoryMode = {}));
var IOSCategoryOptions;
(function (IOSCategoryOptions) {
    IOSCategoryOptions["MixWithOthers"] = "mixWithOthers";
    IOSCategoryOptions["DuckOthers"] = "duckOthers";
    IOSCategoryOptions["InterruptSpokenAudioAndMixWithOthers"] = "interruptSpokenAudioAndMixWithOthers";
    IOSCategoryOptions["AllowBluetooth"] = "allowBluetooth";
    IOSCategoryOptions["AllowBluetoothA2DP"] = "allowBluetoothA2DP";
    IOSCategoryOptions["AllowAirPlay"] = "allowAirPlay";
    IOSCategoryOptions["DefaultToSpeaker"] = "defaultToSpeaker";
})(IOSCategoryOptions = exports.IOSCategoryOptions || (exports.IOSCategoryOptions = {}));
var RatingType;
(function (RatingType) {
    RatingType[RatingType["Heart"] = TrackPlayer2.RATING_HEART] = "Heart";
    RatingType[RatingType["ThumbsUpDown"] = TrackPlayer2.RATING_THUMBS_UP_DOWN] = "ThumbsUpDown";
    RatingType[RatingType["ThreeStars"] = TrackPlayer2.RATING_3_STARS] = "ThreeStars";
    RatingType[RatingType["FourStars"] = TrackPlayer2.RATING_4_STARS] = "FourStars";
    RatingType[RatingType["FiveStars"] = TrackPlayer2.RATING_5_STARS] = "FiveStars";
    RatingType[RatingType["Percentage"] = TrackPlayer2.RATING_PERCENTAGE] = "Percentage";
})(RatingType = exports.RatingType || (exports.RatingType = {}));
var Capability;
(function (Capability) {
    Capability[Capability["Play"] = TrackPlayer2.CAPABILITY_PLAY] = "Play";
    Capability[Capability["PlayFromId"] = TrackPlayer2.CAPABILITY_PLAY_FROM_ID] = "PlayFromId";
    Capability[Capability["PlayFromSearch"] = TrackPlayer2.CAPABILITY_PLAY_FROM_SEARCH] = "PlayFromSearch";
    Capability[Capability["Pause"] = TrackPlayer2.CAPABILITY_PAUSE] = "Pause";
    Capability[Capability["Stop"] = TrackPlayer2.CAPABILITY_STOP] = "Stop";
    Capability[Capability["SeekTo"] = TrackPlayer2.CAPABILITY_SEEK_TO] = "SeekTo";
    
    Capability[Capability["Skip"] = TrackPlayer2.CAPABILITY_SKIP] = "Skip";
    Capability[Capability["SkipToNext"] = TrackPlayer2.CAPABILITY_SKIP_TO_NEXT] = "SkipToNext";
    Capability[Capability["SkipToPrevious"] = TrackPlayer2.CAPABILITY_SKIP_TO_PREVIOUS] = "SkipToPrevious";
    Capability[Capability["JumpForward"] = TrackPlayer2.CAPABILITY_JUMP_FORWARD] = "JumpForward";
    Capability[Capability["JumpBackward"] = TrackPlayer2.CAPABILITY_JUMP_BACKWARD] = "JumpBackward";
    Capability[Capability["SetRating"] = TrackPlayer2.CAPABILITY_SET_RATING] = "SetRating";
    Capability[Capability["Like"] = TrackPlayer2.CAPABILITY_LIKE] = "Like";
    Capability[Capability["Dislike"] = TrackPlayer2.CAPABILITY_DISLIKE] = "Dislike";
    Capability[Capability["Bookmark"] = TrackPlayer2.CAPABILITY_BOOKMARK] = "Bookmark";
    



    Capability[Capability["Play"] = TrackPlayer1.CAPABILITY_PLAY] = "Play";
    Capability[Capability["PlayFromId"] = TrackPlayer1.CAPABILITY_PLAY_FROM_ID] = "PlayFromId";
    Capability[Capability["PlayFromSearch"] = TrackPlayer1.CAPABILITY_PLAY_FROM_SEARCH] = "PlayFromSearch";
    Capability[Capability["Pause"] = TrackPlayer1.CAPABILITY_PAUSE] = "Pause";
    Capability[Capability["Stop"] = TrackPlayer1.CAPABILITY_STOP] = "Stop";
    Capability[Capability["SeekTo"] = TrackPlayer1.CAPABILITY_SEEK_TO] = "SeekTo";







})(Capability = exports.Capability || (exports.Capability = {}));
var Event;
(function (Event) {
    Event["PlaybackState"] = "playback-state";
    Event["PlaybackError"] = "playback-error";
    Event["PlaybackQueueEnded"] = "playback-queue-ended";
    Event["PlaybackTrackChanged"] = "playback-track-changed";
    Event["PlaybackMetadataReceived"] = "playback-metadata-received";
    Event["RemotePlay"] = "remote-play";
    Event["RemotePlayId"] = "remote-play-id";
    Event["RemotePlaySearch"] = "remote-play-search";
    Event["RemotePause"] = "remote-pause";
    Event["RemoteStop"] = "remote-stop";
    Event["RemoteSkip"] = "remote-skip";
    Event["RemoteNext"] = "remote-next";
    Event["RemotePrevious"] = "remote-previous";
    Event["RemoteJumpForward"] = "remote-jump-forward";
    Event["RemoteJumpBackward"] = "remote-jump-backward";
    Event["RemoteSeek"] = "remote-seek";
    Event["RemoteSetRating"] = "remote-set-rating";
    Event["RemoteDuck"] = "remote-duck";
    Event["RemoteLike"] = "remote-like";
    Event["RemoteDislike"] = "remote-dislike";
    Event["RemoteBookmark"] = "remote-bookmark";
})(Event = exports.Event || (exports.Event = {}));
var TrackType;
(function (TrackType) {
    TrackType["Default"] = "default";
    TrackType["Dash"] = "dash";
    TrackType["HLS"] = "hls";
    TrackType["SmoothStreaming"] = "smoothstreaming";
})(TrackType = exports.TrackType || (exports.TrackType = {}));
var RepeatMode;
(function (RepeatMode) {
    RepeatMode[RepeatMode["Off"] = TrackPlayer2.REPEAT_OFF] = "Off";
    RepeatMode[RepeatMode["Track"] = TrackPlayer2.REPEAT_TRACK] = "Track";
    RepeatMode[RepeatMode["Queue"] = TrackPlayer2.REPEAT_QUEUE] = "Queue";

    RepeatMode[RepeatMode["Off"] = TrackPlayer1.REPEAT_OFF] = "Off";
    RepeatMode[RepeatMode["Track"] = TrackPlayer1.REPEAT_TRACK] = "Track";
    RepeatMode[RepeatMode["Queue"] = TrackPlayer1.REPEAT_QUEUE] = "Queue";
    


})(RepeatMode = exports.RepeatMode || (exports.RepeatMode = {}));
var PitchAlgorithm;
(function (PitchAlgorithm) {
    PitchAlgorithm[PitchAlgorithm["Linear"] = TrackPlayer2.PITCH_ALGORITHM_LINEAR] = "Linear";
    PitchAlgorithm[PitchAlgorithm["Music"] = TrackPlayer2.PITCH_ALGORITHM_MUSIC] = "Music";
    PitchAlgorithm[PitchAlgorithm["Voice"] = TrackPlayer2.PITCH_ALGORITHM_VOICE] = "Voice";

    PitchAlgorithm[PitchAlgorithm["Linear"] = TrackPlayer1.PITCH_ALGORITHM_LINEAR] = "Linear";
    PitchAlgorithm[PitchAlgorithm["Music"] = TrackPlayer1.PITCH_ALGORITHM_MUSIC] = "Music";
    PitchAlgorithm[PitchAlgorithm["Voice"] = TrackPlayer1.PITCH_ALGORITHM_VOICE] = "Voice";
    



})(PitchAlgorithm = exports.PitchAlgorithm || (exports.PitchAlgorithm = {}));
var State;
(function (State) {
    State[State["None"] = TrackPlayer2.STATE_NONE] = "None";
    State[State["Ready"] = TrackPlayer2.STATE_READY] = "Ready";
    State[State["Playing"] = TrackPlayer2.STATE_PLAYING] = "Playing";
    State[State["Paused"] = TrackPlayer2.STATE_PAUSED] = "Paused";
    State[State["Stopped"] = TrackPlayer2.STATE_STOPPED] = "Stopped";
    State[State["Buffering"] = TrackPlayer2.STATE_BUFFERING] = "Buffering";
    State[State["Connecting"] = TrackPlayer2.STATE_CONNECTING] = "Connecting";


    State[State["None"] = TrackPlayer1.STATE_NONE] = "None";
    State[State["Ready"] = TrackPlayer1.STATE_READY] = "Ready";
    State[State["Playing"] = TrackPlayer1.STATE_PLAYING] = "Playing";
    State[State["Paused"] = TrackPlayer1.STATE_PAUSED] = "Paused";
    State[State["Stopped"] = TrackPlayer1.STATE_STOPPED] = "Stopped";
    State[State["Buffering"] = TrackPlayer1.STATE_BUFFERING] = "Buffering";
    State[State["Connecting"] = TrackPlayer1.STATE_CONNECTING] = "Connecting";










})(State = exports.State || (exports.State = {}));
