# onthegrid

## Installation
`npm install onthegrid`

## Usage

### `onthegrid([interval in ms])`

Usage is pretty straightforward. `onthegrid` uses the EventEmitter pattern and has two events: `"online"` and `"offline"`. Each event is emitted in their respective situations. `onthegrid` checks at a predetermined rate of either 30 seconds, or whatever value you chose in milliseconds.

__Example Usage:__
```
const onthegrid = require('onthegrid');

grid = onthegrid();

grid.on('offline', () => {
	console.log('we are off the grid!');
});
```

