// ----- Variables -----
var canUseDot = true;
var canUseTask = true;
var errOccured = false;

//----- functions -----
const clearLast = () => {
	var lastValue = document
		.getElementById('ans')
		.value.substring(0, document.getElementById('ans').value.length - 1);
	document.getElementById('ans').value = lastValue;
	if (errOccured) {
		clearall();
	} else if (!lastValue.includes('.')) {
		canUseDot = true;
	} else if (
		!lastValue.includes('+') ||
		!lastValue.includes('-') ||
		!lastValue.includes('/') ||
		!lastValue.includes('*')
	) {
		canUseTask = true;
	}
};

const clearall = () => {
	document.getElementById('ans').value = '';
	canUseDot = true;
	canUseTask = true;
	errOccured = false;
};

const addNumber = (val) => {
	if (errOccured) {
		clearall();
	}
	document.getElementById('ans').value += val;
	if (
		document.getElementById('ans').value < 1 &&
		document.getElementById('ans') === '.'
	) {
		document.getElementById('ans').value = '0';
	}
	canUseTask = true;
};

const addTask = (task) => {
	if (canUseTask) {
		document.getElementById('ans').value += task;
	} else if (document.getElementById('ans').value < 1 && canUseTask) {
		document.getElementById('ans').value = '0' + task;
	} else if (errOccured) {
		clearall();
		document.getElementById('ans').value = '0' + task;
	}
	canUseDot = true;
	canUseTask = false;
};

const addOpenBracket = () => {
	document.getElementById('ans').value += '(';
	if (errOccured) {
		clearall();
	}
};

const addCloseBracket = () => {
	document.getElementById('ans').value += ')';
	if (errOccured) {
		clearall();
	}
};

const calc = () => {
	try {
		if (document.getElementById('ans').value === 'Error') {
			throw err;
		} else if (document.getElementById('ans').value) {
			document.getElementById('ans').value = eval(
				document.getElementById('ans').value,
			);
		} else if (!document.getElementById('ans').value) {
			return;
		} else if (document.getElementById('ans').value.includes('.')) {
			canUseDot = false;
		}
	} catch (err) {
		console.log('WARNING!');
		document.getElementById('ans').value = 'Error';
		errOccured = true;
	}
};

const dot = () => {
	if (errOccured) {
		clearall();
		canUseDot = false;
		document.getElementById('ans').value += '.';
	} else if (canUseDot) {
		document.getElementById('ans').value += '.';
		canUseDot = false;
	} else {
		canUseDot = false;
		console.log('WARNING: DOT ALREADY PRESENT!');
	}
};
