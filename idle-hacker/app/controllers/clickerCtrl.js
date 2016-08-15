app.controller('clickerCtrl', function($scope, $location, AuthFactory, DataFactory, $route) {
 	
 		
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
	let codeLvlContainer = document.getElementById('codeLvl');
	let codeLvl = 0;

	codeLvlContainer.innerHTML = codeLvl;
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
	
	document.getElementById('mountainDewLvl').innerHTML = mountainDewLvl;
	document.getElementById('mountainDewCost').innerHTML = "$" + moneyUpgradeCost;
	document.getElementById('mps1ToolTip').innerHTML = "+" + mps1 + " to DEW power";

	upgradeDEW.addEventListener("click", function($scope) {
		if (currentCurrency >= moneyUpgradeCost) {
			mps = mps + mps1;
			mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"
			mountainDewLvl++;
			document.getElementById('mountainDewLvl').innerHTML = mountainDewLvl;

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

	document.getElementById('shortcutKeysLvl').innerHTML = shortcutKeysLvl;
	document.getElementById('shortcutKeysCost').innerHTML = "$" + shortcutKeysCost;
	document.getElementById('mps2ToolTip').innerHTML = "+" + mps2 + " to money/sec";

	upgradeShortcutKeys.addEventListener("click", function($scope) {
		if (currentCurrency >= shortcutKeysCost) {
			mps = mps + mps2;
			mpsCounter.innerHTML = "<h4 class='mpsFont'>" + mps + " m/s</h4>"
			shortcutKeysLvl++;
			document.getElementById('shortcutKeysLvl').innerHTML = shortcutKeysLvl;

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


	/*======================================================================
	CLICK LOCATION
	=======================================================================*/
	clickArea.addEventListener("click", function(e) {
		var posx = 0;
		var posy = 0;
	if (!e) var e = window.event;
	if (e.pageX || e.pageY) 	{
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) 	{
		posx = e.clientX + document.body.scrollLeft
			+ document.clickArea.scrollLeft;
		posy = e.clientY + document.body.scrollTop
			+ document.clickArea.scrollTop;
	}
	var clickAmountDisplay = document.getElementById("clickAmountDisplay");
	clickAmountDisplay.innerHTML = "+" + click;
	clickAmountDisplay.style.left = (posx - 20) + "px";
    clickAmountDisplay.style.top = (posy - 130) + "px";	
    clickAmountDisplay.style.animationDuration = ".6s";

	});
	window.setInterval(function($scope){
				clickAmountDisplay.innerHTML = "";
	}, 600);

	/*======================================================================
	PUSH OBJECT
	=======================================================================*/

		$scope.userId = AuthFactory.getUser();
      	DataFactory.getStats($scope.userId)
      	.then(function(data) {
      		console.log("data", data);
      		if ( !data ) {
      			DataFactory.postStats($scope.userId, $scope.playerData);
      			console.log("post the things", $scope.userId, $scope.playerData);
      			console.log("data", data);
      			return;
      		} else {
      			$scope.setVars(data);
      		}
      		console.log(data.id);
      		$scope.currentId = data.id;
      		console.log("current: ", $scope.currentId);
      		// console.log("uid", $scope.data.uid);
      	});
	
      	// $scope.currentGameId = "";

	$scope.playerData = {};
		$scope.playerData.currentCurrency = currentCurrency;
		$scope.playerData.click = click;
		$scope.playerData.mps = mps;
		$scope.playerData.codeUpgradeCost = codeUpgradeCost;
		$scope.playerData.codeLvl = codeLvl;
		$scope.playerData.moneyUpgradeCost = moneyUpgradeCost;
		$scope.playerData.mountainDewLvl = mountainDewLvl;
		$scope.playerData.mps1 = mps1;
		$scope.playerData.timer1 = timer1;
		$scope.playerData.shortcutKeysCost = shortcutKeysCost;
		$scope.playerData.shortcutKeysLvl = shortcutKeysLvl;
		$scope.playerData.mps2 = mps2;
		$scope.playerData.timer2 = timer2;
		$scope.playerData.angularCost = angularCost;
		$scope.playerData.angularLvl = angularLvl;
		$scope.playerData.mps3 = mps3;
		$scope.playerData.timer3 = timer3
		$scope.playerData.uid = AuthFactory.getUser();

	$scope.currentId = "";

	$scope.setPlayerData = function () {

		$scope.playerData.currentCurrency = currentCurrency;
		$scope.playerData.click = click;
		$scope.playerData.mps = mps;
		$scope.playerData.codeUpgradeCost = codeUpgradeCost;
		$scope.playerData.codeLvl = codeLvl;
		$scope.playerData.moneyUpgradeCost = moneyUpgradeCost;
		$scope.playerData.mountainDewLvl = mountainDewLvl;
		$scope.playerData.mps1 = mps1;
		$scope.playerData.timer1 = timer1;
		$scope.playerData.shortcutKeysCost = shortcutKeysCost;
		$scope.playerData.shortcutKeysLvl = shortcutKeysLvl;
		$scope.playerData.mps2 = mps2;
		$scope.playerData.timer2 = timer2;
		$scope.playerData.angularCost = angularCost;
		$scope.playerData.angularLvl = angularLvl;
		$scope.playerData.mps3 = mps3;
		$scope.playerData.timer3 = timer3
		$scope.playerData.uid = AuthFactory.getUser();
		return $scope.playerData;
	}

	$scope.saveGame = function() {

		let playerData = $scope.setPlayerData();

		console.log("current id ", playerData.uid);

		DataFactory.saveStats(playerData.uid, $scope.playerData).
		then(function(object) {
			console.log("object", object);
		});
	}

	$scope.setVars = function(data) {
		currentCurrency = data.currentCurrency;
		click = data.click;
		mps = data.mps;
		codeUpgradeCost = data.codeUpgradeCost;
		codeLvl = data.codeLvl;
		moneyUpgradeCost = data.moneyUpgradeCost;
		mountainDewLvl = data.mountainDewLvl;
		mps1 = data.mps1;
		timer1 = data.timer1;
		shortcutKeysCost = data.shortcutKeysCost;
		shortcutKeysLvl = data.shortcutKeysLvl;
		mps2 = data.mps2;
		timer2 = data.timer2;
		angularCost = data.angularCost;
		angularLvl = data.angularLvl;
		mps3 = data.mps3;
		timer3 = data.timer3

		currency.innerHTML = "<h1 class='currencyFont'>" + currentCurrency + "<h1>";
		document.getElementById('codeLvl').innerHTML = codeLvl;
		document.getElementById('codeUpgradeCost').innerHTML = "$" + codeUpgradeCost;
		document.getElementById('mps1ToolTip').innerHTML = "+" + mps1 + " to money/sec";
	}

	$scope.deleteStats = function() {
		console.log("current id", $scope.playerData.uid);
		DataFactory.deleteStats($scope.playerData.uid).
		then(function(result) {
			console.log("huh?");
		});
		console.log("BYE BYE MOTHA FUCKA");
		$location.path("/logout");
	}

});




