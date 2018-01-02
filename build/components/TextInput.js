var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _TextInputState=require('../api/TextInputState');var _TextInputState2=_interopRequireDefault(_TextInputState);
var _reactTimerMixin=require('react-timer-mixin');var _reactTimerMixin2=_interopRequireDefault(_reactTimerMixin);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);

var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var TextInput=(0,_createReactClass2['default'])({
propTypes:_extends({},
_View2['default'].propTypes,{
/**
     * Can tell TextInput to automatically capitalize certain characters.
     *
     * - characters: all characters,
     * - words: first letter of each word
     * - sentences: first letter of each sentence (default)
     * - none: don't auto capitalize anything
     */
autoCapitalize:_propTypes2['default'].oneOf([
'none',
'sentences',
'words',
'characters']),

/**
     * If false, disables auto-correct. The default value is true.
     */
autoCorrect:_propTypes2['default'].bool,
/**
     * If true, focuses the input on componentDidMount.
     * The default value is false.
     */
autoFocus:_propTypes2['default'].bool,
/**
     * If false, text is not editable. The default value is true.
     */
editable:_propTypes2['default'].bool,
/**
     * Determines which keyboard to open, e.g.`numeric`.
     *
     * The following values work across platforms:
     * - default
     * - numeric
     * - email-address
     */
keyboardType:_propTypes2['default'].oneOf([
// Cross-platform
'default',
'email-address',
'numeric',
'phone-pad',
// iOS-only
'ascii-capable',
'numbers-and-punctuation',
'url',
'number-pad',
'name-phone-pad',
'decimal-pad',
'twitter',
'web-search']),

/**
     * Determines the color of the keyboard.
     * @platform ios
     */
keyboardAppearance:_propTypes2['default'].oneOf([
'default',
'light',
'dark']),

/**
     * Determines how the return key should look.
     * @platform ios
     */
returnKeyType:_propTypes2['default'].oneOf([
'default',
'go',
'google',
'join',
'next',
'route',
'search',
'send',
'yahoo',
'done',
'emergency-call']),

/**
     * Limits the maximum number of characters that can be entered. Use this
     * instead of implementing the logic in JS to avoid flicker.
     */
maxLength:_propTypes2['default'].number,
/**
     * Sets the number of lines for a TextInput. Use it with multiline set to
     * true to be able to fill the lines.
     * @platform android
     */
numberOfLines:_propTypes2['default'].number,
/**
     * If true, the keyboard disables the return key when there is no text and
     * automatically enables it when there is text. The default value is false.
     * @platform ios
     */
enablesReturnKeyAutomatically:_propTypes2['default'].bool,
/**
     * If true, the text input can be multiple lines.
     * The default value is false.
     */
multiline:_propTypes2['default'].bool,
/**
     * Callback that is called when the text input is blurred
     */
onBlur:_propTypes2['default'].func,
/**
     * Callback that is called when the text input is focused
     */
onFocus:_propTypes2['default'].func,
/**
     * Callback that is called when the text input's text changes.
     */
onChange:_propTypes2['default'].func,
/**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as an argument to the callback handler.
     */
onChangeText:_propTypes2['default'].func,
/**
     * Callback that is called when text input ends.
     */
onEndEditing:_propTypes2['default'].func,
/**
     * Callback that is called when the text input selection is changed
     */
onSelectionChange:_propTypes2['default'].func,
/**
     * Callback that is called when the text input's submit button is pressed.
     * Invalid if multiline={true} is specified.
     */
onSubmitEditing:_propTypes2['default'].func,
/**
     * Callback that is called when a key is pressed.
     * Pressed key value is passed as an argument to the callback handler.
     * Fires before onChange callbacks.
     * @platform ios
     */
onKeyPress:_propTypes2['default'].func,
/**
     * Invoked on mount and layout changes with `{x, y, width, height}`.
     */
onLayout:_propTypes2['default'].func,
/**
     * The string that will be rendered before text input has been entered
     */
placeholder:_propTypes2['default'].string,
/**
     * The text color of the placeholder string
     */
placeholderTextColor:_propTypes2['default'].string,
/**
     * If true, the text input obscures the text entered so that sensitive text
     * like passwords stay secure. The default value is false.
     */
secureTextEntry:_propTypes2['default'].bool,
/**
     * See DocumentSelectionState.js, some state that is responsible for
     * maintaining selection information for a document
     * @platform ios
     */
// TODO(lmr): requireLibrary
// selectionState: PropTypes.instanceOf(DocumentSelectionState),
/**
     * The value to show for the text input. TextInput is a controlled
     * component, which means the native value will be forced to match this
     * value prop if provided. For most uses this works great, but in some
     * cases this may cause flickering - one common cause is preventing edits
     * by keeping value the same. In addition to simply setting the same value,
     * either set `editable={false}`, or set/update `maxLength` to prevent
     * unwanted edits without flicker.
     */
value:_propTypes2['default'].string,
/**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you don't want to deal with listening
     * to events and updating the value prop to keep the controlled state in sync.
     */
defaultValue:_propTypes2['default'].string,
/**
     * When the clear button should appear on the right side of the text view
     * @platform ios
     */
clearButtonMode:_propTypes2['default'].oneOf([
'never',
'while-editing',
'unless-editing',
'always']),

/**
     * If true, clears the text field automatically when editing begins
     * @platform ios
     */
clearTextOnFocus:_propTypes2['default'].bool,
/**
     * If true, all text will automatically be selected on focus
     * @platform ios
     */
selectTextOnFocus:_propTypes2['default'].bool,
/**
     * If true, the text field will blur when submitted.
     * The default value is true for single-line fields and false for
     * multiline fields. Note that for multiline fields, setting blurOnSubmit
     * to true means that pressing return will blur the field and trigger the
     * onSubmitEditing event instead of inserting a newline into the field.
     * @platform ios
     */
blurOnSubmit:_propTypes2['default'].bool,
/**
     * Styles
     */
style:_Text2['default'].propTypes.style,
/**
     * Used to locate this view in end-to-end tests
     */
testID:_propTypes2['default'].string,
/**
     * The color of the textInput underline.
     * @platform android
     */
underlineColorAndroid:_propTypes2['default'].string}),

mixins:[_NativeMethodsMixin2['default'],_reactTimerMixin2['default']],
statics:{
State:_TextInputState2['default']},

isFocused:function(){function isFocused(){
// TODO(lmr): React.findNodeHandle
return _TextInputState2['default'].currentlyFocusedField()===
_react2['default'].findNodeHandle(this.refs.input);
}return isFocused;}(),
clear:function(){function clear(){

}return clear;}(),
render:function(){function render(){
return null;
}return render;}()});


module.exports=TextInput;