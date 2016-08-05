app.controller('clickerCtrl', function($scope, $location) {

	/*
		Sets currency to $0 and injects it at the top of the screen
	*/
	let click = 1;
	let currentCurrency = 0;
	let mps = 0;
	let currency = document.getElementById('currency');
	let mpsCounter = document.getElementById('mpsCounter');
	let clickArea = document.getElementById('clickAreaContainer');

	currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
	mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"


	/*
		Sets a click event for currentCurrency to increase by one per click
	*/

	clickArea.addEventListener("click", function($scope) {
		currentCurrency = currentCurrency + click;
		currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
		console.log('HELLO');
	});

	
	/*======================================================================
	UPGRADE: CODE POWER
	=======================================================================*/
	let upgradeClick = document.getElementById('upgradeArea1');
	let codeUpgradeCost = 20;
	let codeLvl = 0;

	document.getElementById('codeLvl').innerHTML = codeLvl;
	document.getElementById('codeUpgradeCost').innerHTML = "$" + codeUpgradeCost;
	document.getElementById('clickToolTip').innerHTML = "+" + click + " to code power";

	upgradeClick.addEventListener("click", function($scope) {
		if (currentCurrency >= codeUpgradeCost) {
			codeLvl++;
			document.getElementById('codeLvl').innerHTML = codeLvl;

			currentCurrency = currentCurrency - codeUpgradeCost;
			currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
			click ++;

			if (codeLvl >= 1) {
				codeUpgradeCost = Math.round(codeUpgradeCost * 1.5);
				click = Math.floor(click * 1.1);
				document.getElementById('clickToolTip').innerHTML = "+" + click + " to code power"
				document.getElementById('codeUpgradeCost').innerHTML = "$" + codeUpgradeCost;
			}
		} else {
			alert("You need more money for that upgrade");
		}
	});


	/*======================================================================
	UPGRADE: MOUNTAIN DEW
	=======================================================================*/
	let upgradeDEW = document.getElementById('upgradeArea2');
	let moneyUpgradeCost = 200;
	let mountainDewLvl = 0;
	let mps1 = 10;
	let timer1 = 1000 / mps1;
	
	document.getElementById('mountainDewLvl').innerHTML = "lvl " + mountainDewLvl;
	document.getElementById('mountainDewCost').innerHTML = "$" + moneyUpgradeCost;
	document.getElementById('mps1ToolTip').innerHTML = "+" + mps1 + " to DEW power";

	upgradeDEW.addEventListener("click", function($scope) {
		if (currentCurrency >= moneyUpgradeCost) {
			mps = mps + mps1;
			mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"
			mountainDewLvl++;
			document.getElementById('mountainDewLvl').innerHTML = "lvl " + mountainDewLvl;

			currentCurrency = currentCurrency - moneyUpgradeCost;
			currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";

			window.setInterval(function($scope){
				currentCurrency = currentCurrency + (mps1 / 10);
				currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
			}, timer1);	

			if (mountainDewLvl >= 1) {
				moneyUpgradeCost = Math.round(moneyUpgradeCost * 1.5);
				document.getElementById('mountainDewCost').innerHTML = "$" + moneyUpgradeCost;
				document.getElementById('mps1ToolTip').innerHTML = "+" + mps1 + " to money/sec";
			}
		} else {
			alert("You need more money for that upgrade");
		}
	});


	/*======================================================================
	UPGRADE: SHORTCUT KEYS
	=======================================================================*/
	let upgradeShortcutKeys = document.getElementById('upgradeArea3');
	let shortcutKeysCost = 1000;
	let shortcutKeysLvl = 0;
	let mps2 = 30;
	let timer2 = 1000 / mps2;

	document.getElementById('shortcutKeysLvl').innerHTML = "lvl " + shortcutKeysLvl;
	document.getElementById('shortcutKeysCost').innerHTML = "$" + shortcutKeysCost;
	document.getElementById('mps2ToolTip').innerHTML = "+" + mps2 + " to money/sec";

	upgradeShortcutKeys.addEventListener("click", function($scope) {
		if (currentCurrency >= shortcutKeysCost) {
			mps = mps + mps2;
			mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"
			shortcutKeysLvl++;
			document.getElementById('shortcutKeysLvl').innerHTML = "lvl " + shortcutKeysLvl;

			currentCurrency = currentCurrency - shortcutKeysCost;
			currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";

			window.setInterval(function($scope){
				currentCurrency = Math.round(currentCurrency + (mps2 / 20));
				currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
			}, timer2);	

			if (shortcutKeysLvl >= 1) {
				shortcutKeysCost = Math.round(shortcutKeysCost * 1.5);
				document.getElementById('shortcutKeysCost').innerHTML = "$" + shortcutKeysCost;
				document.getElementById('mps2ToolTip').innerHTML = "+" + mps2 + " to money/sec";
			}
		} else {
			alert("You need more money for that upgrade");
		}
	});


	/*======================================================================
	UPGRADE: LEARN ANGULAR
	=======================================================================*/
	let upgradeAngular = document.getElementById('upgradeArea4');
	let angularCost = 5000;
	let angularLvl = 0;
	let mps3 = 100;
	let timer3 = 1000 / mps3;

	document.getElementById('angularLvl').innerHTML = "lvl " + angularLvl;
	document.getElementById('angularCost').innerHTML = "$" + angularCost;
	document.getElementById('mps3ToolTip').innerHTML = "+" + mps3 + " to money/sec";

	upgradeAngular.addEventListener("click", function($scope) {
		if (currentCurrency >= angularCost) {
			mps = mps + mps3;
			mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"
			angularLvl++;
			document.getElementById('angularLvl').innerHTML = "lvl " + angularLvl;

			currentCurrency = currentCurrency - angularCost;
			currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";

			window.setInterval(function($scope){
				currentCurrency = currentCurrency + (mps3 / 100);
				currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
			}, timer3);	

			if (angularLvl >= 1) {
				angularCost = Math.round(angularCost * 1.5);
				document.getElementById('angularCost').innerHTML = "$" + angularCost;
				document.getElementById('mps2ToolTip').innerHTML = "+" + mps3 + " to money/sec";
			}
		} else {
			alert("You need more money for that upgrade");
		}
	});

});

