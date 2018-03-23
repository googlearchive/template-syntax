define(['dart_sdk', 'packages/typed_data/typed_buffers', 'packages/crypto/src/digest'], function(dart_sdk, typed_buffers, digest) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__digest = digest.src__digest;
  const _root = Object.create(null);
  const src__hash_sink = Object.create(_root);
  const $length = dartx.length;
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asByteData = dartx.asByteData;
  const $_get = dartx._get;
  const $setUint32 = dartx.setUint32;
  const $truncate = dartx.truncate;
  const $_set = dartx._set;
  const $getUint32 = dartx.getUint32;
  const $rightShift = dartx['>>'];
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let SinkOfDigest = () => (SinkOfDigest = dart.constFn(core.Sink$(src__digest.Digest)))();
  const _sink = Symbol('_sink');
  const _endian = Symbol('_endian');
  const _currentChunk = Symbol('_currentChunk');
  const _lengthInBytes = Symbol('_lengthInBytes');
  const _pendingData = Symbol('_pendingData');
  const _isClosed = Symbol('_isClosed');
  const _iterate = Symbol('_iterate');
  const _finalizeData = Symbol('_finalizeData');
  const _byteDigest = Symbol('_byteDigest');
  const _roundUp = Symbol('_roundUp');
  src__hash_sink.HashSink = class HashSink extends core.Object {
    add(data) {
      ListOfint()._check(data);
      if (dart.test(this[_isClosed])) dart.throw(new core.StateError.new('Hash.add() called after close().'));
      this[_lengthInBytes] = dart.notNull(this[_lengthInBytes]) + dart.notNull(data[$length]);
      this[_pendingData].addAll(data);
      this[_iterate]();
    }
    close() {
      if (dart.test(this[_isClosed])) return;
      this[_isClosed] = true;
      this[_finalizeData]();
      this[_iterate]();
      if (!dart.test(this[_pendingData].isEmpty)) dart.assertFailed();
      this[_sink].add(new src__digest.Digest.new(this[_byteDigest]()));
      this[_sink].close();
    }
    [_byteDigest]() {
      if (dart.equals(this[_endian], typed_data.Endianness.HOST_ENDIAN)) return this.digest[$buffer][$asUint8List]();
      let byteDigest = typed_data.Uint8List.new(this.digest[$lengthInBytes]);
      let byteData = byteDigest[$buffer][$asByteData]();
      for (let i = 0; i < dart.notNull(this.digest[$length]); i++) {
        byteData[$setUint32](i * 4, this.digest[$_get](i));
      }
      return byteDigest;
    }
    [_iterate]() {
      let pendingDataBytes = this[_pendingData].buffer[$asByteData]();
      let pendingDataChunks = (dart.notNull(this[_pendingData].length) / dart.notNull(this[_currentChunk][$lengthInBytes]))[$truncate]();
      for (let i = 0; i < pendingDataChunks; i++) {
        for (let j = 0; j < dart.notNull(this[_currentChunk][$length]); j++) {
          this[_currentChunk][$_set](j, pendingDataBytes[$getUint32](i * dart.notNull(this[_currentChunk][$lengthInBytes]) + j * 4, typed_data.Endian._check(this[_endian])));
        }
        this.updateHash(this[_currentChunk]);
      }
      this[_pendingData].removeRange(0, pendingDataChunks * dart.notNull(this[_currentChunk][$lengthInBytes]));
    }
    [_finalizeData]() {
      this[_pendingData].add(128);
      let contentsLength = dart.notNull(this[_lengthInBytes]) + 9;
      let finalizedLength = this[_roundUp](contentsLength, this[_currentChunk][$lengthInBytes]);
      for (let i = 0; i < dart.notNull(finalizedLength) - contentsLength; i++) {
        this[_pendingData].add(0);
      }
      if (dart.notNull(this[_lengthInBytes]) > 2305843009213693951) {
        dart.throw(new core.UnsupportedError.new('Hashing is unsupported for messages with more than 2^64 bits.'));
      }
      let lengthInBits = dart.notNull(this[_lengthInBytes]) * 8;
      let offset = this[_pendingData].length;
      this[_pendingData].addAll(typed_data.Uint8List.new(8));
      let byteData = this[_pendingData].buffer[$asByteData]();
      let highBits = lengthInBits[$rightShift](32);
      let lowBits = (lengthInBits & 4294967295) >>> 0;
      if (dart.equals(this[_endian], typed_data.Endianness.BIG_ENDIAN)) {
        byteData[$setUint32](offset, highBits, typed_data.Endian._check(this[_endian]));
        byteData[$setUint32](dart.notNull(offset) + 4, lowBits, typed_data.Endian._check(this[_endian]));
      } else {
        byteData[$setUint32](offset, lowBits, typed_data.Endian._check(this[_endian]));
        byteData[$setUint32](dart.notNull(offset) + 4, highBits, typed_data.Endian._check(this[_endian]));
      }
    }
    [_roundUp](val, n) {
      return (dart.notNull(val) + dart.notNull(n) - 1 & -dart.notNull(n)) >>> 0;
    }
  };
  (src__hash_sink.HashSink.new = function(sink, chunkSizeInWords, opts) {
    let endian = opts && 'endian' in opts ? opts.endian : typed_data.Endianness.BIG_ENDIAN;
    this[_lengthInBytes] = 0;
    this[_pendingData] = new typed_buffers$.Uint8Buffer.new();
    this[_isClosed] = false;
    this[_sink] = sink;
    this[_endian] = endian;
    this[_currentChunk] = typed_data.Uint32List.new(chunkSizeInWords);
  }).prototype = src__hash_sink.HashSink.prototype;
  dart.addTypeTests(src__hash_sink.HashSink);
  src__hash_sink.HashSink[dart.implements] = () => [SinkOfListOfint()];
  dart.setMethodSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getMethods(src__hash_sink.HashSink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_byteDigest]: dart.fnType(typed_data.Uint8List, []),
    [_iterate]: dart.fnType(dart.void, []),
    [_finalizeData]: dart.fnType(dart.void, []),
    [_roundUp]: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.setFieldSignature(src__hash_sink.HashSink, () => ({
    __proto__: dart.getFields(src__hash_sink.HashSink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfDigest()),
    [_endian]: dart.finalFieldType(typed_data.Endianness),
    [_currentChunk]: dart.finalFieldType(typed_data.Uint32List),
    [_lengthInBytes]: dart.fieldType(core.int),
    [_pendingData]: dart.finalFieldType(typed_buffers$.Uint8Buffer),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__hash_sink.HashSink, {
    /*src__hash_sink.HashSink._maxMessageLengthInBytes*/get _maxMessageLengthInBytes() {
      return 2305843009213693951;
    }
  });
  dart.trackLibraries("packages/crypto/src/hash_sink.ddc", {
    "package:crypto/src/hash_sink.dart": src__hash_sink
  }, '{"version":3,"sourceRoot":"","sources":["hash_sink.dart"],"names":[],"mappings":"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","file":"hash_sink.ddc.js"}');
  // Exports:
  return {
    src__hash_sink: src__hash_sink
  };
});

//# sourceMappingURL=hash_sink.ddc.js.map
