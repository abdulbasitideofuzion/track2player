"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.PitchAlgorithm = exports.RepeatMode = exports.TrackType = exports.Event = exports.Capability = exports.RatingType = exports.IOSCategoryOptions = exports.IOSCategoryMode = exports.IOSCategory = void 0;
var react_native_1 = require("react-native");
var TrackPlayerTwo = react_native_1.NativeModules.TrackPlayerModule2;

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
    RatingType[RatingType["Heart"] = TrackPlayerTwo.RATING_HEART] = "Heart";
    RatingType[RatingType["ThumbsUpDown"] = TrackPlayerTwo.RATING_THUMBS_UP_DOWN] = "ThumbsUpDown";
    RatingType[RatingType["ThreeStars"] = TrackPlayerTwo.RATING_3_STARS] = "ThreeStars";
    RatingType[RatingType["FourStars"] = TrackPlayerTwo.RATING_4_STARS] = "FourStars";
    RatingType[RatingType["FiveStars"] = TrackPlayerTwo.RATING_5_STARS] = "FiveStars";
    RatingType[RatingType["Percentage"] = TrackPlayerTwo.RATING_PERCENTAGE] = "Percentage";
})(RatingType = exports.RatingType || (exports.RatingType = {}));
var Capability;
(function (Capability) {
    Capability[Capability["Play"] = TrackPlayerTwo.CAPABILITY_PLAY] = "Play";
    Capability[Capability["PlayFromId"] = TrackPlayerTwo.CAPABILITY_PLAY_FROM_ID] = "PlayFromId";
    Capability[Capability["PlayFromSearch"] = TrackPlayerTwo.CAPABILITY_PLAY_FROM_SEARCH] = "PlayFromSearch";
    Capability[Capability["Pause"] = TrackPlayerTwo.CAPABILITY_PAUSE] = "Pause";
    Capability[Capability["Stop"] = TrackPlayerTwo.CAPABILITY_STOP] = "Stop";
    Capability[Capability["SeekTo"] = TrackPlayerTwo.CAPABILITY_SEEK_TO] = "SeekTo";

    Capability[Capability["Skip"] = TrackPlayerTwo.CAPABILITY_SKIP] = "Skip";
    Capability[Capability["SkipToNext"] = TrackPlayerTwo.CAPABILITY_SKIP_TO_NEXT] = "SkipToNext";
    Capability[Capability["SkipToPrevious"] = TrackPlayerTwo.CAPABILITY_SKIP_TO_PREVIOUS] = "SkipToPrevious";
    Capability[Capability["JumpForward"] = TrackPlayerTwo.CAPABILITY_JUMP_FORWARD] = "JumpForward";
    Capability[Capability["JumpBackward"] = TrackPlayerTwo.CAPABILITY_JUMP_BACKWARD] = "JumpBackward";
    Capability[Capability["SetRating"] = TrackPlayerTwo.CAPABILITY_SET_RATING] = "SetRating";
    Capability[Capability["Like"] = TrackPlayerTwo.CAPABILITY_LIKE] = "Like";
    Capability[Capability["Dislike"] = TrackPlayerTwo.CAPABILITY_DISLIKE] = "Dislike";
    Capability[Capability["Bookmark"] = TrackPlayerTwo.CAPABILITY_BOOKMARK] = "Bookmark";





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
    RepeatMode[RepeatMode["Off"] = TrackPlayerTwo.REPEAT_OFF] = "Off";
    RepeatMode[RepeatMode["Track"] = TrackPlayerTwo.REPEAT_TRACK] = "Track";
    RepeatMode[RepeatMode["Queue"] = TrackPlayerTwo.REPEAT_QUEUE] = "Queue";
})(RepeatMode = exports.RepeatMode || (exports.RepeatMode = {}));
var PitchAlgorithm;
(function (PitchAlgorithm) {
    PitchAlgorithm[PitchAlgorithm["Linear"] = TrackPlayerTwo.PITCH_ALGORITHM_LINEAR] = "Linear";
    PitchAlgorithm[PitchAlgorithm["Music"] = TrackPlayerTwo.PITCH_ALGORITHM_MUSIC] = "Music";
    PitchAlgorithm[PitchAlgorithm["Voice"] = TrackPlayerTwo.PITCH_ALGORITHM_VOICE] = "Voice";
})(PitchAlgorithm = exports.PitchAlgorithm || (exports.PitchAlgorithm = {}));
var State;
(function (State) {
    State[State["None"] = TrackPlayerTwo.STATE_NONE] = "None";
    State[State["Ready"] = TrackPlayerTwo.STATE_READY] = "Ready";
    State[State["Playing"] = TrackPlayerTwo.STATE_PLAYING] = "Playing";
    State[State["Paused"] = TrackPlayerTwo.STATE_PAUSED] = "Paused";
    State[State["Stopped"] = TrackPlayerTwo.STATE_STOPPED] = "Stopped";
    State[State["Buffering"] = TrackPlayerTwo.STATE_BUFFERING] = "Buffering";
    State[State["Connecting"] = TrackPlayerTwo.STATE_CONNECTING] = "Connecting";




})(State = exports.State || (exports.State = {}));
