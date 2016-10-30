/**
 * Created by ridel1e on 20/10/2016.
 */

import Core from './core';

import dom from './dom';
dom(Core);

import eventEmitter from './event-emitter';
eventEmitter(Core);

import templateEngine from './template-engine';
templateEngine(Core);

import state from './state';
state(Core);

export default Core;