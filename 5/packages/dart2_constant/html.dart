// Copyright (c) 2018, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:html' as html;

abstract class ApplicationCache {
  static const checking = html.ApplicationCache.CHECKING;
  static const downloading = html.ApplicationCache.DOWNLOADING;
  static const idle = html.ApplicationCache.IDLE;
  static const obsolete = html.ApplicationCache.OBSOLETE;
  static const uncached = html.ApplicationCache.UNCACHED;
  static const updateready = html.ApplicationCache.UPDATEREADY;
}

abstract class CssRule {
  static const charsetRule = html.CssRule.CHARSET_RULE;
  static const fontFaceRule = html.CssRule.FONT_FACE_RULE;
  static const importRule = html.CssRule.IMPORT_RULE;
  static const keyframesRule = html.CssRule.KEYFRAMES_RULE;
  static const keyframeRule = html.CssRule.KEYFRAME_RULE;
  static const mediaRule = html.CssRule.MEDIA_RULE;
  static const namespaceRule = html.CssRule.NAMESPACE_RULE;
  static const pageRule = html.CssRule.PAGE_RULE;
  static const styleRule = html.CssRule.STYLE_RULE;
  static const supportsRule = html.CssRule.SUPPORTS_RULE;
  static const viewportRule = html.CssRule.VIEWPORT_RULE;
}

abstract class DedicatedWorkerGlobalScope {
  static const persistent = html.DedicatedWorkerGlobalScope.PERSISTENT;
  static const temporary = html.DedicatedWorkerGlobalScope.TEMPORARY;
}

abstract class DeprecatedStorageInfo {
  static const persistent = html.DeprecatedStorageInfo.PERSISTENT;
  static const temporary = html.DeprecatedStorageInfo.TEMPORARY;
}

abstract class DomException {
  static const indexSize = html.DomException.INDEX_SIZE;
  static const hierarchyRequest = html.DomException.HIERARCHY_REQUEST;
  static const wrongDocument = html.DomException.WRONG_DOCUMENT;
  static const invalidCharacter = html.DomException.INVALID_CHARACTER;
  static const noModificationAllowed =
      html.DomException.NO_MODIFICATION_ALLOWED;
  static const notFound = html.DomException.NOT_FOUND;
  static const notSupported = html.DomException.NOT_SUPPORTED;
  static const invalidState = html.DomException.INVALID_STATE;
  static const syntax = html.DomException.SYNTAX;
  static const invalidModification = html.DomException.INVALID_MODIFICATION;
  static const namespace = html.DomException.NAMESPACE;
  static const invalidAccess = html.DomException.INVALID_ACCESS;
  static const typeMismatch = html.DomException.TYPE_MISMATCH;
  static const security = html.DomException.SECURITY;
  static const network = html.DomException.NETWORK;
  static const abort = html.DomException.ABORT;
  static const urlMismatch = html.DomException.URL_MISMATCH;
  static const quotaExceeded = html.DomException.QUOTA_EXCEEDED;
  static const timeout = html.DomException.TIMEOUT;
  static const invalidNodeType = html.DomException.INVALID_NODE_TYPE;
  static const dataClone = html.DomException.DATA_CLONE;
  static const typeError = html.DomException.TYPE_ERROR;
}

abstract class ScrollAlignment {
  static const top = html.ScrollAlignment.TOP;
  static const center = html.ScrollAlignment.CENTER;
  static const bottom = html.ScrollAlignment.BOTTOM;
}

abstract class Event {
  static const atTarget = html.Event.AT_TARGET;
  static const bubblingPhase = html.Event.BUBBLING_PHASE;
  static const capturingPhase = html.Event.CAPTURING_PHASE;
}

abstract class EventSource {
  static const closed = html.EventSource.CLOSED;
  static const connecting = html.EventSource.CONNECTING;
  static const open = html.EventSource.OPEN;
}

abstract class FileReader {
  static const done = html.FileReader.DONE;
  static const empty = html.FileReader.EMPTY;
  static const loading = html.FileReader.LOADING;
}

abstract class FileWriter {
  static const done = html.FileWriter.DONE;
  static const init = html.FileWriter.INIT;
  static const writing = html.FileWriter.WRITING;
}

abstract class HttpRequest {
  static const done = html.HttpRequest.DONE;
  static const headersReceived = html.HttpRequest.HEADERS_RECEIVED;
  static const loading = html.HttpRequest.LOADING;
  static const opened = html.HttpRequest.OPENED;
  static const unsent = html.HttpRequest.UNSENT;
}

abstract class KeyboardEvent {
  static const domKeyLocationLeft = html.KeyboardEvent.DOM_KEY_LOCATION_LEFT;
  static const domKeyLocationNumpad =
      html.KeyboardEvent.DOM_KEY_LOCATION_NUMPAD;
  static const domKeyLocationRight = html.KeyboardEvent.DOM_KEY_LOCATION_RIGHT;
  static const domKeyLocationStandard =
      html.KeyboardEvent.DOM_KEY_LOCATION_STANDARD;
}

abstract class MediaElement {
  static const haveCurrentData = html.MediaElement.HAVE_CURRENT_DATA;
  static const haveEnoughData = html.MediaElement.HAVE_ENOUGH_DATA;
  static const haveFutureData = html.MediaElement.HAVE_FUTURE_DATA;
  static const haveMetadata = html.MediaElement.HAVE_METADATA;
  static const haveNothing = html.MediaElement.HAVE_NOTHING;
  static const networkEmpty = html.MediaElement.NETWORK_EMPTY;
  static const networkIdle = html.MediaElement.NETWORK_IDLE;
  static const networkLoading = html.MediaElement.NETWORK_LOADING;
  static const networkNoSource = html.MediaElement.NETWORK_NO_SOURCE;
}

abstract class MediaError {
  static const mediaErrAborted = html.MediaError.MEDIA_ERR_ABORTED;
  static const mediaErrDecode = html.MediaError.MEDIA_ERR_DECODE;
  static const mediaErrNetwork = html.MediaError.MEDIA_ERR_NETWORK;
  static const mediaErrSrcNotSupported =
      html.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;
}

abstract class Node {
  static const attributeNode = html.Node.ATTRIBUTE_NODE;
  static const cdataSectionNode = html.Node.CDATA_SECTION_NODE;
  static const commentNode = html.Node.COMMENT_NODE;
  static const documentFragmentNode = html.Node.DOCUMENT_FRAGMENT_NODE;
  static const documentNode = html.Node.DOCUMENT_NODE;
  static const documentTypeNode = html.Node.DOCUMENT_TYPE_NODE;
  static const elementNode = html.Node.ELEMENT_NODE;
  static const entityNode = html.Node.ENTITY_NODE;
  static const entityReferenceNode = html.Node.ENTITY_REFERENCE_NODE;
  static const notationNode = html.Node.NOTATION_NODE;
  static const processingInstructionNode =
      html.Node.PROCESSING_INSTRUCTION_NODE;
  static const textNode = html.Node.TEXT_NODE;
}

abstract class NodeFilter {
  static const filterAccept = html.NodeFilter.FILTER_ACCEPT;
  static const filterReject = html.NodeFilter.FILTER_REJECT;
  static const filterSkip = html.NodeFilter.FILTER_SKIP;
  static const showAll = html.NodeFilter.SHOW_ALL;
  static const showComment = html.NodeFilter.SHOW_COMMENT;
  static const showDocument = html.NodeFilter.SHOW_DOCUMENT;
  static const showDocumentFragment = html.NodeFilter.SHOW_DOCUMENT_FRAGMENT;
  static const showDocumentType = html.NodeFilter.SHOW_DOCUMENT_TYPE;
  static const showElement = html.NodeFilter.SHOW_ELEMENT;
  static const showProcessingInstruction =
      html.NodeFilter.SHOW_PROCESSING_INSTRUCTION;
  static const showText = html.NodeFilter.SHOW_TEXT;
}

abstract class PerformanceNavigation {
  static const typeBackForward = html.PerformanceNavigation.TYPE_BACK_FORWARD;
  static const typeNavigate = html.PerformanceNavigation.TYPE_NAVIGATE;
  static const typeReload = html.PerformanceNavigation.TYPE_RELOAD;
  static const typeReserved = html.PerformanceNavigation.TYPE_RESERVED;
}

abstract class PositionError {
  static const permissionDenied = html.PositionError.PERMISSION_DENIED;
  static const positionUnavailable = html.PositionError.POSITION_UNAVAILABLE;
  static const timeout = html.PositionError.TIMEOUT;
}

abstract class Range {
  static const endToEnd = html.Range.END_TO_END;
  static const endToStart = html.Range.END_TO_START;
  static const startToEnd = html.Range.START_TO_END;
  static const startToStart = html.Range.START_TO_START;
}

abstract class SharedWorkerGlobalScope {
  static const persistent = html.SharedWorkerGlobalScope.PERSISTENT;
  static const temporary = html.SharedWorkerGlobalScope.TEMPORARY;
}

abstract class TrackElement {
  static const error = html.TrackElement.ERROR;
  static const loaded = html.TrackElement.LOADED;
  static const loading = html.TrackElement.LOADING;
  static const none = html.TrackElement.NONE;
}

abstract class WebSocket {
  static const closed = html.WebSocket.CLOSED;
  static const closing = html.WebSocket.CLOSING;
  static const connecting = html.WebSocket.CONNECTING;
  static const open = html.WebSocket.OPEN;
}

abstract class WheelEvent {
  static const domDeltaLine = html.WheelEvent.DOM_DELTA_LINE;
  static const domDeltaPage = html.WheelEvent.DOM_DELTA_PAGE;
  static const domDeltaPixel = html.WheelEvent.DOM_DELTA_PIXEL;
}

abstract class Window {
  static const persistent = html.Window.PERSISTENT;
  static const temporary = html.Window.TEMPORARY;
}

abstract class XPathResult {
  static const anyType = html.XPathResult.ANY_TYPE;
  static const anyUnorderedNodeType = html.XPathResult.ANY_UNORDERED_NODE_TYPE;
  static const booleanType = html.XPathResult.BOOLEAN_TYPE;
  static const firstOrderedNodeType = html.XPathResult.FIRST_ORDERED_NODE_TYPE;
  static const numberType = html.XPathResult.NUMBER_TYPE;
  static const orderedNodeIteratorType =
      html.XPathResult.ORDERED_NODE_ITERATOR_TYPE;
  static const orderedNodeSnapshotType =
      html.XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
  static const stringType = html.XPathResult.STRING_TYPE;
  static const unorderedNodeIteratorType =
      html.XPathResult.UNORDERED_NODE_ITERATOR_TYPE;
  static const unorderedNodeSnapshotType =
      html.XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE;
}

abstract class KeyCode {
  static const winKeyFfLinux = html.KeyCode.WIN_KEY_FF_LINUX;
  static const macEnter = html.KeyCode.MAC_ENTER;
  static const backspace = html.KeyCode.BACKSPACE;
  static const tab = html.KeyCode.TAB;
  static const numCenter = html.KeyCode.NUM_CENTER;
  static const enter = html.KeyCode.ENTER;
  static const shift = html.KeyCode.SHIFT;
  static const ctrl = html.KeyCode.CTRL;
  static const alt = html.KeyCode.ALT;
  static const pause = html.KeyCode.PAUSE;
  static const capsLock = html.KeyCode.CAPS_LOCK;
  static const esc = html.KeyCode.ESC;
  static const space = html.KeyCode.SPACE;
  static const pageUp = html.KeyCode.PAGE_UP;
  static const pageDown = html.KeyCode.PAGE_DOWN;
  static const end = html.KeyCode.END;
  static const home = html.KeyCode.HOME;
  static const left = html.KeyCode.LEFT;
  static const up = html.KeyCode.UP;
  static const right = html.KeyCode.RIGHT;
  static const down = html.KeyCode.DOWN;
  static const numNorthEast = html.KeyCode.NUM_NORTH_EAST;
  static const numSouthEast = html.KeyCode.NUM_SOUTH_EAST;
  static const numSouthWest = html.KeyCode.NUM_SOUTH_WEST;
  static const numNorthWest = html.KeyCode.NUM_NORTH_WEST;
  static const numWest = html.KeyCode.NUM_WEST;
  static const numNorth = html.KeyCode.NUM_NORTH;
  static const numEast = html.KeyCode.NUM_EAST;
  static const numSouth = html.KeyCode.NUM_SOUTH;
  static const printScreen = html.KeyCode.PRINT_SCREEN;
  static const insert = html.KeyCode.INSERT;
  static const numInsert = html.KeyCode.NUM_INSERT;
  static const delete = html.KeyCode.DELETE;
  static const numDelete = html.KeyCode.NUM_DELETE;
  static const zero = html.KeyCode.ZERO;
  static const one = html.KeyCode.ONE;
  static const two = html.KeyCode.TWO;
  static const three = html.KeyCode.THREE;
  static const four = html.KeyCode.FOUR;
  static const five = html.KeyCode.FIVE;
  static const six = html.KeyCode.SIX;
  static const seven = html.KeyCode.SEVEN;
  static const eight = html.KeyCode.EIGHT;
  static const nine = html.KeyCode.NINE;
  static const ffSemicolon = html.KeyCode.FF_SEMICOLON;
  static const ffEquals = html.KeyCode.FF_EQUALS;
  static const questionMark = html.KeyCode.QUESTION_MARK;
  static const a = html.KeyCode.A;
  static const b = html.KeyCode.B;
  static const c = html.KeyCode.C;
  static const d = html.KeyCode.D;
  static const e = html.KeyCode.E;
  static const f = html.KeyCode.F;
  static const g = html.KeyCode.G;
  static const h = html.KeyCode.H;
  static const i = html.KeyCode.I;
  static const j = html.KeyCode.J;
  static const k = html.KeyCode.K;
  static const l = html.KeyCode.L;
  static const m = html.KeyCode.M;
  static const n = html.KeyCode.N;
  static const o = html.KeyCode.O;
  static const p = html.KeyCode.P;
  static const q = html.KeyCode.Q;
  static const r = html.KeyCode.R;
  static const s = html.KeyCode.S;
  static const t = html.KeyCode.T;
  static const u = html.KeyCode.U;
  static const v = html.KeyCode.V;
  static const w = html.KeyCode.W;
  static const x = html.KeyCode.X;
  static const y = html.KeyCode.Y;
  static const z = html.KeyCode.Z;
  static const meta = html.KeyCode.META;
  static const winKeyLeft = html.KeyCode.WIN_KEY_LEFT;
  static const winKeyRight = html.KeyCode.WIN_KEY_RIGHT;
  static const contextMenu = html.KeyCode.CONTEXT_MENU;
  static const numZero = html.KeyCode.NUM_ZERO;
  static const numOne = html.KeyCode.NUM_ONE;
  static const numTwo = html.KeyCode.NUM_TWO;
  static const numThree = html.KeyCode.NUM_THREE;
  static const numFour = html.KeyCode.NUM_FOUR;
  static const numFive = html.KeyCode.NUM_FIVE;
  static const numSix = html.KeyCode.NUM_SIX;
  static const numSeven = html.KeyCode.NUM_SEVEN;
  static const numEight = html.KeyCode.NUM_EIGHT;
  static const numNine = html.KeyCode.NUM_NINE;
  static const numMultiply = html.KeyCode.NUM_MULTIPLY;
  static const numPlus = html.KeyCode.NUM_PLUS;
  static const numMinus = html.KeyCode.NUM_MINUS;
  static const numPeriod = html.KeyCode.NUM_PERIOD;
  static const numDivision = html.KeyCode.NUM_DIVISION;
  static const f1 = html.KeyCode.F1;
  static const f2 = html.KeyCode.F2;
  static const f3 = html.KeyCode.F3;
  static const f4 = html.KeyCode.F4;
  static const f5 = html.KeyCode.F5;
  static const f6 = html.KeyCode.F6;
  static const f7 = html.KeyCode.F7;
  static const f8 = html.KeyCode.F8;
  static const f9 = html.KeyCode.F9;
  static const f10 = html.KeyCode.F10;
  static const f11 = html.KeyCode.F11;
  static const f12 = html.KeyCode.F12;
  static const numlock = html.KeyCode.NUMLOCK;
  static const scrollLock = html.KeyCode.SCROLL_LOCK;
  static const firstMediaKey = html.KeyCode.FIRST_MEDIA_KEY;
  static const lastMediaKey = html.KeyCode.LAST_MEDIA_KEY;
  static const semicolon = html.KeyCode.SEMICOLON;
  static const dash = html.KeyCode.DASH;
  static const equals = html.KeyCode.EQUALS;
  static const comma = html.KeyCode.COMMA;
  static const period = html.KeyCode.PERIOD;
  static const slash = html.KeyCode.SLASH;
  static const apostrophe = html.KeyCode.APOSTROPHE;
  static const tilde = html.KeyCode.TILDE;
  static const singleQuote = html.KeyCode.SINGLE_QUOTE;
  static const openSquareBracket = html.KeyCode.OPEN_SQUARE_BRACKET;
  static const backslash = html.KeyCode.BACKSLASH;
  static const closeSquareBracket = html.KeyCode.CLOSE_SQUARE_BRACKET;
  static const winKey = html.KeyCode.WIN_KEY;
  static const macFfMeta = html.KeyCode.MAC_FF_META;
  static const winIme = html.KeyCode.WIN_IME;
  static const unknown = html.KeyCode.UNKNOWN;
}

abstract class KeyLocation {
  static const standard = html.KeyLocation.STANDARD;
  static const left = html.KeyLocation.LEFT;
  static const right = html.KeyLocation.RIGHT;
  static const numpad = html.KeyLocation.NUMPAD;
  static const mobile = html.KeyLocation.MOBILE;
  static const joystick = html.KeyLocation.JOYSTICK;
}

abstract class ReadyState {
  static const loading = html.ReadyState.LOADING;
  static const interactive = html.ReadyState.INTERACTIVE;
  static const complete = html.ReadyState.COMPLETE;
}
