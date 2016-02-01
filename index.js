'use strict';

const Q = require('Q');
const isOnline = require('is-online');

const util = require('util');
const EventEmitter = require('events');

const TIMEOUT = 30000;

function OnTheGrid(timeout) {
	EventEmitter.call(this);

	let status = () => {
		var online = Q.denodeify(isOnline);
		online()
		.then((onGrid) => {
			if (onGrid === true)
			{
				this.emit('online', null);
			}
			else
			{
				this.emit('offline', null);
			}
		});
	}

	setInterval(status, timeout || TIMEOUT);
}

util.inherits(OnTheGrid, EventEmitter);

var exports = module.exports = (timeout) => { return new OnTheGrid(timeout) };