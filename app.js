new Vue({

	el: '#app',
	data:{
		playerHeath: 100,
		monsterHeath: 100,
		gameisStart: false,
		turns: []
	},
	methods:{
		startGame: function(){
			this.gameisStart = true;
			this.playerHeath =100;
			this.monsterHeath = 100;
			turns:[]
		},
		attack: function(){
			//Check option
			if(this.checkPlayerOption()){
				return;
			}
			//Monster
			damage = this.inputDamage(4,12)
			this.monsterHeath -= damage;
			//Day gia tri len dau` mang~`
			this.turns.unshift({
				isPlayer: true,
				textLog: 'Player hit Monster for ' + damage,
			});

			//Player
			
			this.monsterAttack();
		},
		specialAttack: function(){
			//Check option
			if(this.checkPlayerOption()){
				return;
			}
			//Monster
			damage = this.inputDamage(10,20);
			this.monsterHeath -= damage;
			this.turns.unshift({
				isPlayer: true,
				textLog: 'Player hit Monster for ' + damage,
			});
			//Player
			
			this.monsterAttack();
		},
		heal: function(){
			//Player
			if(this.playerHeath > 70){
				return false;
			} else if(this.playerHeath <=60){
				this.playerHeath +=10;
			} else{
				this.playerHeath = 70;
			}
			this.turns.unshift({
				isPlayer: true,
				textLog: 'Player heal for 10 ',
			});
			//Monster
			this.monsterAttack();
		},
		giveUp: function(){
			this.gameisStart = false;
			this.turns = [];
			this.startGame();
			alert('You lost!');

		},
		monsterAttack: function(){
			damage = this.inputDamage(4,10);
			this.playerHeath -= damage;
			this.turns.unshift({
				isPlayer: false,
				textLog: 'Monster hit Player for' + damage,
			});
			this.checkPlayerOption();
		},
		inputDamage: function(minDamage, maxDamage){
			//Random luong dame 
			return Math.max(Math.floor(Math.random() * maxDamage) + 1,minDamage);
		},
		checkPlayerOption: function(){
			if(this.monsterHeath <=0){
				if(confirm('You won! New Game?')){
					this.startGame();
					//this.gameisStart = true;
					this.turns = [];
				}else{
					this.gameisStart = false;
					this.playerHeath = 100;
					this.monsterHeath = 100;
					this.turns = [];
					
				}
				return true;
			} else if(this.playerHeath <=0){
				if(confirm('You lost! New Game?')){
					this.startGame();
					//this.gameisStart = true;
				}else{
					this.gameisStart = false;
				}
				return true;
			}
		}
	}	
});
//neu game bat dau thi hien control