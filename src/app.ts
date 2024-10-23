import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { TabNavigation } from './components/TabNavigation';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(React.createElement(TabNavigation, {}, null));