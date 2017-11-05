import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { buildComponentHTML } from '../test-utils';

const COMPONENTS = [
  'Image',
  'Text',
  'TextInput',
  'Modal',
  'View',
  'ScrollView',
  'RefreshControl',

  'ToolbarAndroid'
];

describe('Components', function () {
  const ReactNative = require('react-native');

  COMPONENTS.forEach(function (component) { // Render loads fast!
    it(`should render ${component}`, function () {
      const Component = ReactNative[component];
      const instance = shallow(<Component />);
      expect(instance.html()).to.include(`<${component}`);
    });
  });

  it('should render ActivityIndicator', function () {
    const { ActivityIndicator } = ReactNative;
    const instance = shallow(<ActivityIndicator />);
    expect(instance.html()).to.include('<ActivityIndicator');
  });

  it('should render Button', function () {
    const { Button } = ReactNative;
    const instance = shallow(<Button title="Title" />);
    expect(instance.html()).to.include('Title');
  });

  it('should render DatePickerIOS', function () {
    const { DatePickerIOS } = ReactNative;
    const instance = shallow(<DatePickerIOS date={new Date()} />);
    expect(instance.html()).to.include('DatePicker');
  });

  it('should render DrawerLayoutAndroid', function () {
    const { DrawerLayoutAndroid } = ReactNative;
    const handleRenderNavigationView = sinon.spy();
    const instance = shallow(<DrawerLayoutAndroid renderNavigationView={handleRenderNavigationView} />);
    expect(instance.html()).to.include('<AndroidDrawerLayout');
    expect(handleRenderNavigationView).to.have.been.calledOnce;
  });

  it('should have DrawerLayoutAndroid with static properties for the positions', () => {
    const { DrawerLayoutAndroid } = ReactNative;
    expect(DrawerLayoutAndroid.positions).to.be.an.object;
    expect(DrawerLayoutAndroid.positions).to.deep.equal({
      Left: 'LEFT',
      Right: 'RIGHT'
    });
  });

  it('should render ListView', function () {
    const { ListView } = ReactNative;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows([]);
    const instance = shallow(<ListView dataSource={dataSource} />);
    expect(instance.html()).to.include('<ScrollView');
    expect(instance.html()).to.include('<View');
  });

  it('should render KeyboardAvoidingView', function () {
    const { KeyboardAvoidingView } = ReactNative;
    const instance = shallow(<KeyboardAvoidingView />);
    expect(instance.html()).to.include('<View');
  });

  it('should render NavigatorIOS', function () {
    const { NavigatorIOS, Text } = ReactNative;
    const initialRoute = {
      component: Text,
      title: 'Title'
    };
    const instance = shallow(<NavigatorIOS initialRoute={initialRoute} />);
    expect(instance.html()).to.include('Title');
    expect(instance.html()).to.include('<Text');
  });

  it('should render Picker', function () {
    const { Picker } = ReactNative;
    const instance = shallow(<Picker />);
    expect(instance.html()).to.include('Picker');
  });

  it('should render PickerIOS', function () {
    const { PickerIOS } = ReactNative;
    const instance = shallow(<PickerIOS />);
    expect(instance.html()).to.include('Picker');
  });

  it('should render ProgressBarAndroid', function () {
    const { ProgressBarAndroid } = ReactNative;
    const instance = shallow(<ProgressBarAndroid />);
    expect(instance.html()).to.include('<AndroidProgressBar');
  });

  it('should render ProgressViewIOS', function () {
    const { ProgressViewIOS } = ReactNative;
    const instance = shallow(<ProgressViewIOS />);
    expect(instance.html()).to.include('ProgressView');
  });

  it('should render SegmentedControlIOS', function () {
    const { SegmentedControlIOS } = ReactNative;
    const instance = shallow(<SegmentedControlIOS />);
    expect(instance.html()).to.include('SegmentedControl');
  });

  it('should render Slider', function () {
    const { Slider } = ReactNative;
    const instance = shallow(<Slider />);
    expect(instance.html()).to.include('Slider');
  });

  it('should render SnapshotViewIOS', function () {
    const { SnapshotViewIOS } = ReactNative;
    const instance = shallow(<SnapshotViewIOS />);
    expect(instance.html()).to.include('<View');
  });

  it('should render StatusBar', function () {
    const { StatusBar } = ReactNative;
    const instance = shallow(<StatusBar />);
    expect(instance.html()).to.be.null;
  });

  it('should render Switch', function () {
    const { Switch } = ReactNative;
    const instance = shallow(<Switch />);
    expect(instance.html()).to.include('Switch');
  });

  it('should render TabBarIOS', function () {
    const { TabBarIOS } = ReactNative;
    const instance = shallow(<TabBarIOS />);
    expect(instance.html()).to.include('TabBar');
  });

  it('should render TouchableHighlight', function () {
    const { TouchableHighlight, Text } = ReactNative;
    const instance = shallow(<TouchableHighlight><Text /></TouchableHighlight>);
    expect(instance.html()).to.include('<View');
  });

  it('should render TouchableNativeFeedback', function () {
    const { TouchableNativeFeedback, Text } = ReactNative;
    const instance = shallow(<TouchableNativeFeedback><Text /></TouchableNativeFeedback>);
    expect(instance.html()).to.include('<View');
  });

  it('should render TouchableOpacity', function () {
    const { TouchableOpacity, Text } = ReactNative;
    const instance = shallow(<TouchableOpacity><Text /></TouchableOpacity>);
    expect(instance.html()).to.include('<View');
    expect(instance.html()).to.include('<Text');
  });

  it('should render TouchableWithoutFeedback', function () {
    const { TouchableWithoutFeedback, Text } = ReactNative;
    const instance = shallow(<TouchableWithoutFeedback><Text /></TouchableWithoutFeedback>);
    expect(instance.html()).to.include('<Text');
  });

  it('should render ViewPagerAndroid', function () {
    const { ViewPagerAndroid } = ReactNative;
    const instance = shallow(<ViewPagerAndroid />);
    expect(instance.html()).to.equal(buildComponentHTML('AndroidViewPager'));
  });

  it('should render WebView', function () {
    const { WebView } = ReactNative;
    const instance = shallow(<WebView />);
    expect(instance.html()).to.contain('WebView');
    expect(instance.html()).to.contain('<View');
  });
});
