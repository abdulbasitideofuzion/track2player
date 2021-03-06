"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
// @ts-ignore
var resolveAssetSource = require("react-native/Libraries/Image/resolveAssetSource");
// var TrackPlayer2 = react_native_1.NativeModules.TrackPlayerModule2;
var TrackPlayer2 = react_native_1.NativeModules.TrackPlayerModule2;
var TrackPlayer1 = react_native_1.NativeModules.TrackPlayerModule1;


console.log("data is "+TrackPlayer2.tracks);
console.log("data is "+TrackPlayer1.tracks);

var emitter = react_native_1.Platform.OS !== 'android' ? new react_native_1.NativeEventEmitter(TrackPlayer2) : react_native_1.DeviceEventEmitter;
var emitterPlayer1 = react_native_1.Platform.OS !== 'android' ? new react_native_1.NativeEventEmitter(TrackPlayer1) : react_native_1.DeviceEventEmitter;
// var emitterOne = react_native_1.Platform.OS !== 'android' ? new react_native_1.NativeEventEmitter(TrackPlayer2) : react_native_1.DeviceEventEmitter;



// MARK: - Helpers
function resolveImportedPath(path) {
    if (!path)
        return undefined;
    return resolveAssetSource(path) || path;
}
// MARK: - General API
function setupPlayer(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.setupPlayer(options || {})];
        });
    });
}


// MARK: - General API
function setupPlayerOne(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer1.setupPlayer(options || {})];
        });
    });
}




function destroy() {
    return TrackPlayer2.destroy();
}
function registerPlaybackService(factory) {
    if (react_native_1.Platform.OS === 'android') {
        // Registers the headless task
        react_native_1.AppRegistry.registerHeadlessTask('TrackPlayer2', factory);
        // react_native_1.AppRegistry.registerHeadlessTask('TrackPlayer2', factory);

    }
    else {
        // Initializes and runs the service in the next tick
        setImmediate(factory());
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addEventListener(event, listener) {
    return emitter.addListener(event, listener);
}
// MARK: - Queue API
function add(tracks, insertBeforeIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            // Clone the array before modifying it
            if (Array.isArray(tracks)) {
                tracks = __spreadArrays(tracks);
            }
            else {
                tracks = [tracks];
            }
            if (tracks.length < 1)
                return [2 /*return*/];
            for (i = 0; i < tracks.length; i++) {
                // Clone the object before modifying it
                tracks[i] = __assign({}, tracks[i]);
                // Resolve the URLs
                tracks[i].url = resolveImportedPath(tracks[i].url);
                tracks[i].artwork = resolveImportedPath(tracks[i].artwork);
            }
            // Note: we must be careful about passing nulls to non nullable parameters on Android.
            return [2 /*return*/, TrackPlayer2.add(tracks, insertBeforeIndex === undefined ? -1 : insertBeforeIndex)];
        });
    });
}
function addOne(tracks, insertBeforeIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            // Clone the array before modifying it
            if (Array.isArray(tracks)) {
                tracks = __spreadArrays(tracks);
            }
            else {
                tracks = [tracks];
            }
            if (tracks.length < 1)
                return [2 /*return*/];
            for (i = 0; i < tracks.length; i++) {
                // Clone the object before modifying it
                tracks[i] = __assign({}, tracks[i]);
                // Resolve the URLs
                tracks[i].url = resolveImportedPath(tracks[i].url);
                tracks[i].artwork = resolveImportedPath(tracks[i].artwork);
            }
            // Note: we must be careful about passing nulls to non nullable parameters on Android.
            return [2 /*return*/, TrackPlayer1.add(tracks, insertBeforeIndex === undefined ? -1 : insertBeforeIndex)];
        });
    });
}


function remove(tracks) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!Array.isArray(tracks)) {
                tracks = [tracks];
            }
            return [2 /*return*/, TrackPlayer2.remove(tracks)];
        });
    });
}
function removeUpcomingTracks() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.removeUpcomingTracks()];
        });
    });
}
function skip(trackIndex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.skip(trackIndex)];
        });
    });
}
function skipToNext() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.skipToNext()];
        });
    });
}
function skipToPrevious() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.skipToPrevious()];
        });
    });
}
// MARK: - Control Center / Notifications API
function updateOptions(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            options = __assign({}, options);
            // Resolve the asset for each icon
            options.icon = resolveImportedPath(options.icon);
            options.playIcon = resolveImportedPath(options.playIcon);
            options.pauseIcon = resolveImportedPath(options.pauseIcon);
            options.stopIcon = resolveImportedPath(options.stopIcon);
            options.previousIcon = resolveImportedPath(options.previousIcon);
            options.nextIcon = resolveImportedPath(options.nextIcon);
            options.rewindIcon = resolveImportedPath(options.rewindIcon);
            options.forwardIcon = resolveImportedPath(options.forwardIcon);
            return [2 /*return*/, TrackPlayer2.updateOptions(options)];
        });
    });
}
function updateMetadataForTrack(trackIndex, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Clone the object before modifying it
            metadata = Object.assign({}, metadata);
            // Resolve the artwork URL
            metadata.artwork = resolveImportedPath(metadata.artwork);
            return [2 /*return*/, TrackPlayer2.updateMetadataForTrack(trackIndex, metadata)];
        });
    });
}
function clearNowPlayingMetadata() {
    return TrackPlayer2.clearNowPlayingMetadata();
}
function updateNowPlayingMetadata(metadata) {
    // Clone the object before modifying it
    metadata = Object.assign({}, metadata);
    // Resolve the artwork URL
    metadata.artwork = resolveImportedPath(metadata.artwork);
    return TrackPlayer2.updateNowPlayingMetadata(metadata);
}
// MARK: - Player API
function reset() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.reset()];
        });
    });
}
function play() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.play()];
        });
    });
}
function playOne() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer1.play()];
        });
    });
}


function pause() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.pause()];
        });
    });
}
function stop() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.stop()];
        });
    });
}
function seekTo(position) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.seekTo(position)];
        });
    });
}
function setVolume(level) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.setVolume(level)];
        });
    });
}
function setRate(rate) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.setRate(rate)];
        });
    });
}
function setRepeatMode(mode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.setRepeatMode(mode)];
        });
    });
}
// MARK: - Getters
function getVolume() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getVolume()];
        });
    });
}
function getRate() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getRate()];
        });
    });
}
function getTrack(trackIndex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getTrack(trackIndex)];
        });
    });
}
function getQueue() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getQueue()];
        });
    });
}
function getCurrentTrack() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getCurrentTrack()];
        });
    });
}
function getDuration() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getDuration()];
        });
    });
}
function getBufferedPosition() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getBufferedPosition()];
        });
    });
}
function getPosition() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getPosition()];
        });
    });
}
function getState() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getState()];
        });
    });
}
function getRepeatMode() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, TrackPlayer2.getRepeatMode()];
        });
    });
}
__exportStar(require("./hooks"), exports);
__exportStar(require("./interfaces"), exports);
exports.default = {
    // MARK: - General API
    setupPlayer: setupPlayer,    
    setupPlayerOne: setupPlayerOne,    

    destroy: destroy,
    registerPlaybackService: registerPlaybackService,
    addEventListener: addEventListener,
    // MARK: - Queue API
    add: add,
    addOne: addOne,
    remove: remove,
    removeUpcomingTracks: removeUpcomingTracks,
    skip: skip,
    skipToNext: skipToNext,
    skipToPrevious: skipToPrevious,
    // MARK: - Control Center / Notifications API
    updateOptions: updateOptions,
    updateMetadataForTrack: updateMetadataForTrack,
    clearNowPlayingMetadata: clearNowPlayingMetadata,
    updateNowPlayingMetadata: updateNowPlayingMetadata,
    // MARK: - Player API
    reset: reset,
    play: play,
    playOne: playOne,
    pause: pause,
    stop: stop,
    seekTo: seekTo,
    setVolume: setVolume,
    setRate: setRate,
    setRepeatMode: setRepeatMode,
    // MARK: - Getters
    getVolume: getVolume,
    getRate: getRate,
    getTrack: getTrack,
    getQueue: getQueue,
    getCurrentTrack: getCurrentTrack,
    getDuration: getDuration,
    getBufferedPosition: getBufferedPosition,
    getPosition: getPosition,
    getState: getState,
    getRepeatMode: getRepeatMode,
};
