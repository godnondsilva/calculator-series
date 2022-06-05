const errThis = (id, text) => {
	document.getElementById(id).value = text;
};

const calc1 = () => {
	var value1 = document.getElementById('r1a').value;
	var value2 = document.getElementById('r1b').value;
	if (value1 === '' || value2 === '') {
		errThis('ans1', 'Please enter the values first!');
	} else {
		var answer = (value2 * value1) / 100;
		document.getElementById('ans1').value = 'Result: ' + answer;
	}
};

const reset1 = () => {
	document.getElementById('r1a').value = '';
	document.getElementById('r1b').value = '';
	document.getElementById('ans1').value = '';
};

const calc2 = () => {
	var val1 = document.getElementById('r2a').value;
	var val2 = document.getElementById('r2b').value;
	if (val1 === '' || val2 === '') {
		errThis('ans2', 'Please enter the values first!');
	} else {
		var ans2 = (val1 / val2) * 100;
		document.getElementById('ans2').value = 'Result: ' + ans2 + '%';
	}
};

const reset2 = () => {
	document.getElementById('r2a').value = '';
	document.getElementById('r2b').value = '';
	document.getElementById('ans2').value = '';
};

const calc3 = () => {
	var v1 = document.getElementById('r3a').value;
	var v2 = document.getElementById('r3b').value;
	if (v1 === '' || v2 === '') {
		errThis('ans3', 'Please enter the values first!');
	} else {
		var ans3 = (v1 * 100) / v2;
		document.getElementById('ans3').value = 'Result: ' + ans3;
	}
};

const reset3 = () => {
	document.getElementById('r3a').value = '';
	document.getElementById('r3b').value = '';
	document.getElementById('ans3').value = '';
};
