const sumInputElem = document.getElementById('sum');
const priceInputElem = document.getElementById('price');
const submitPriceElem = document.getElementById('btn');

const resultValueElem = document.getElementById('resultValue');

function handleSubmit() {
	const sumValue = parseFloat(sumInputElem.value, 10) || 0;
	const priceValue = parseFloat(priceInputElem.value, 10) || 0;

	let regexp = /[-+]?[0-9]*\.\d{3}/;
	let validPrice = regexp.test(priceValue);
	let validSum = regexp.test(sumValue);

	if(sumValue <= priceValue) {
		sumInputElem.value = '';
		resultValueElem.innerHTML = '';
		alert('Введiть корректну суму');
		return;
	}

	if(validSum) {
		sumInputElem.value = '';
		resultValueElem.innerHTML = '';
		alert('Введiть корректну суму');
		return;
	}

	if(priceValue === 0) {
		priceInputElem.value = '';
		resultValueElem.innerHTML = '';
		alert('Оновiть сторiнку та введiть корректну цiну ')
		return;
	}

	if(validPrice) {
		priceInputElem.value = '';
		resultValueElem.innerHTML = '';
		alert('Оновiть сторiнку та введiть корректну цiну')
		return;
	}

	let rest = sumValue - priceValue;

	const dollars = parseInt(rest, 10);
	const coins = +(rest - dollars).toFixed(2) * 100;

	resultValueElem.innerHTML = `${dollars} Dollars ${coins} cent`;
}

submitPriceElem.addEventListener('click', handleSubmit);