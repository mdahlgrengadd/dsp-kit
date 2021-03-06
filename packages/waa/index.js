/**
 * > Web Audio API utilities for digital signal processing
 *
 * It provides web audio api utilities
 *
 * @module waa
 */

module.exports = {
  decodeArrayBuffer: require('./lib/decode-array-buffer'),
  player: require('./lib/player'),
  drawWaveform: require('./lib/draw-waveform'),
  toAudioBuffer: require('./lib/to-audio-buffer')
}
