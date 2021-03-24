//Game Items
var masterList=[
    {name: "Parsnip",
     type: "vegetable",
	 sell: 25,
     itemID: 0
    },
    {name: "Parsnip Seed",
     type: "seed",
     daystoMature: 4,
     price: 20,
	 sell: 5,
     regrows: false,
	 harvestID: 0,
     itemID: 1
    },
    {name: "Cauliflower",
     type: "vegetable",
	 sell: 200,
     itemID: 2
    },
    {name: "Cauliflower Seed",
     type: "seed",
     daystoMature: 12,
     price: 80,
	 sell: 20,
     regrows: false,
	 harvestID: 2,
     itemID: 3
    },
    {name: "Green Bean",
     type: "Vegetable",
	 sell: 75,
     itemID: 4
    },
    {name: "Bean Starter",
     type: "seed",
     daystoMature: 4,
     price: 60,
	 sell: 15,
     regrows: true,
	 harvestID: 4,
     itemID: 5
    },
    {name: "Blue Jazz",
     type: "Vegetable",
	 sell: 50,
     itemID: 6
    },
    {name: "Jazz seeds",
     type: "seed",
     daystoMature: 7,
     price: 30,
	 sell: 7,
     regrows: false,
	 harvestID: 6,
     itemID: 7
    },
    {name: "Garlic",
     type: "Vegetable",
	 sell: 55,
     itemID: 8
    },
    {name: "Garlic seeds",
     type: "seed",
     daystoMature: 4,
     price: 40,
     sell: 8,
     regrows: false,
	 harvestID: 8,
     itemID: 9
    },
    {name: "Strawberry",
     type: "Vegetable",
     sell: 120,
     itemID: 10
    },
    {name: "Strawberry seeds",
     type: "seed",
     daystoMature: 4,
     price: 100,
     sell: 25,
     regrows: true,
	 harvestID: 10,
     itemID: 11
    },
    
    //Monster Loots
    {name: "Slime",
    type: "loot",
    sell: 3,
    itemID: 12
    },
    {name: "Bug Meat",
    type: "loot",
    sell: 5,
    itemID: 13},
    
    //gem items
    {name: "Ruby",
    type: "gem",
    sell: 250,
    itemID: 14},
    {name: "Emerald",
    type: "gem",
    sell: 250,
    itemID: 15},
    
    //fish items
    {name: "Carp",
    type: "fish",
    sell: 2,
    itemID: 16},
    {name: "Sturgeon",
    type: "fish",
    sell: 5,
    itemID: 17},
    
    //fruit items
    {name: "Salmonberry",
    type: "fruit",
    sell: 2,
    itemID: 18},
    {name: "Coconut",
    type: "fruit",
    sell: 3,
    itemID: 19},
    
    //flower items
    {name: "Sunflower",
    type: "flower",
    sell: 8,
    itemID: 20},
    {name: "Tulip",
    type: "flower",
    sell: 4,
    itemID: 21},
    
    //mushroom items
    {name: "Purple Mushroom",
    type: "mushroom",
    sell: 8,
    itemID: 22},
    {name: "Common Mushroom",
    type: "mushroom",
    sell: 2,
    itemID: 23},

]
var toolList=["hand","hoe","wateringCan"];

//Panel IDs
var idLeft=["farm",
			"sell",
			"shop",
            "dungeon",
            "guild",
            "forageMenu",
            "woods",
            "river",
            "fields",
            "blankLeft"];
var idTop=[	"farmpic",
			"homepic",
			"shoppic",
			"sellpic",
			"roosterpic",
			"townpic",
            "mountainpic",
            "dungeonpic",
            "forestpic",
            "clinicpic",
            "guildpic"];
var idBot=[	"blankBot",
			"inventory",			
			"seeds",
			"tools",
            "dungeonAct",
            "passOut"];

//Session Variables
var inventory=[];
var plots=[
	{number: 0,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 1,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 2,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 3,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 4,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 5,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 6,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 7,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	},
	{number: 8,
	 seedID: "",
	 daystoMature: -1,
	 readytoHarvest: false,
	 tilled: false,
	 watered: false
	}
	
];
var forageWoods=[
    {number: 0, itemID:""},{number: 1, itemID:""},{number: 2, itemID:""},{number: 3, itemID:""},{number: 4, itemID:""},
    {number: 5, itemID:""},{number: 6, itemID:""},{number: 7, itemID:""},{number: 8, itemID:""},{number: 9, itemID:""},
    {number: 10, itemID:""},{number: 11, itemID:""},{number: 12, itemID:""},{number: 13, itemID:""},{number: 14, itemID:""},
    {number: 15, itemID:""},{number: 16, itemID:""},{number: 17, itemID:""},{number: 18, itemID:""},{number: 19, itemID:""},
    {number: 20, itemID:""},{number: 21, itemID:""},{number: 22, itemID:""},{number: 23, itemID:""},{number: 24, itemID:""}
]
var forageRiver=[
    {number: 0, itemID:""},{number: 1, itemID:""},{number: 2, itemID:""},{number: 3, itemID:""},{number: 4, itemID:""},
    {number: 5, itemID:""},{number: 6, itemID:""},{number: 7, itemID:""},{number: 8, itemID:""},{number: 9, itemID:""},
    {number: 10, itemID:""},{number: 11, itemID:""},{number: 12, itemID:""},{number: 13, itemID:""},{number: 14, itemID:""},
    {number: 15, itemID:""},{number: 16, itemID:""},{number: 17, itemID:""},{number: 18, itemID:""},{number: 19, itemID:""},
    {number: 20, itemID:""},{number: 21, itemID:""},{number: 22, itemID:""},{number: 23, itemID:""},{number: 24, itemID:""}
]
var forageFields=[
    {number: 0, itemID:""},{number: 1, itemID:""},{number: 2, itemID:""},{number: 3, itemID:""},{number: 4, itemID:""},
    {number: 5, itemID:""},{number: 6, itemID:""},{number: 7, itemID:""},{number: 8, itemID:""},{number: 9, itemID:""},
    {number: 10, itemID:""},{number: 11, itemID:""},{number: 12, itemID:""},{number: 13, itemID:""},{number: 14, itemID:""},
    {number: 15, itemID:""},{number: 16, itemID:""},{number: 17, itemID:""},{number: 18, itemID:""},{number: 19, itemID:""},
    {number: 20, itemID:""},{number: 21, itemID:""},{number: 22, itemID:""},{number: 23, itemID:""},{number: 24, itemID:""}
]

var maxEnergy= 240;
var energy= maxEnergy;
var minusEnergy;
var maxHealth= 100;
var health=maxHealth;
var money=0;
var days=1; 
var currLocation="Home";
var currTool="";
var currSeed="";
var updatedWoods=false,
    updatedRiver=false,
    updatedFields=false;
var closeToggled=false;

//DIFFICULTY
var targetMoney=2500;
var deadline=30;

//Shop Variables
var forSale=""; 
var price=0, count=0, total=0;

//Franz (Combat)
var player = {
    atk: 20,
    atkIncrease: 0,
    hp: 100,
    maxHP: 100,
    hpIncrease: 0,
    worldLevel: 1,
    coinMultiplier: 1,
    blockRate: 0.3,
    block: false,
    battle: false,
    reviving: false,
    atkIncreaseBought: false,
    hpIncreaseBought: false,
}
var upgrades = {
    weaponBuyCost: 5,
    weaponBuy2Cost: 12,
    HPBuyCost: 100,
    HPBuy2Cost: 50,
    shieldBuyCost: 10,
    WLBuyCost: 10
}
const enemyName = ["Grub", "Slime", "Bug", "Skeleton"];
const enemyLvl = [1, 5, 10, 20, 30, 50, 75, 90, 100];
var enemyHP = 0;
var maxHP = 0;
var enemyATK = 0;
var enemy = 0;
var lvl = 0;
var atkTimer = 0;
//Franz (Combat end)

//Sell Variables
var profit=0, sell=0, sellAllDetermine=false;

//Initial Housekeeping
homeLocation();
updateDay();
updateMoney();
updateEnergy();
updateHealth();
updatePlots();
updateGuild();
masterList.forEach(forSaleStock);
document.getElementById("gameover").style.display="none";

//Functions: panel control

function closeBg(){
    if (!closeToggled){
        document.getElementById("grandpaLetter").style.display="none";
        document.getElementById("letterClose").style.background="url(resources/envelope.jpg)";
        document.getElementById("letterClose").innerHTML="";
        document.getElementById("letterClose").style.backgroundRepeat="space";
        document.getElementById("letterClose").style.backgroundSize="cover";
        closeToggled=true;
    }else {
        document.getElementById("grandpaLetter").style.display="block";
        document.getElementById("letterClose").style.background="darkred";
        document.getElementById("letterClose").innerHTML="<b>X</b>";
        closeToggled=false;
    }
}
function openLeft(i){
    for(n=0; n<idLeft.length;n++){
        if (idLeft[n]===i) {
			document.getElementById(idLeft[n]).style.display="block";
		} else {
			document.getElementById(idLeft[n]).style.display="none";
		}
    }    
}
function openTop(i){
    for(n=0; n<idTop.length;n++){
		if(idTop[n]===i){
			document.getElementById(idTop[n]).style.display="block";
		} else {
			document.getElementById(idTop[n]).style.display="none";
		}
    }
}
function openBot(i){
    for(n=0; n<idBot.length;n++){
        if(idBot[n]===i){
			document.getElementById(idBot[n]).style.display="block";
		} else {
			document.getElementById(idBot[n]).style.display="none";
		}
    }
}
function hideMenu(){
    document.getElementById("menuBar").style.display="none";
    document.getElementById("dungeonItems").style.display="flex";
    atkTimer=0;
}
function showMenu(){
    document.getElementById("menuBar").style.display="flex";
    document.getElementById("dungeonItems").style.display="none";
}

//Initialize Shop
function forSaleStock(item, index) {
    if (masterList[index].type==="seed"){    
		forSale+= 
        "<div>"+
        "<div class='forSale'>"+masterList[index].name+" ("+masterList[index].price+"g)"+"</div>"+
        "<input type='number' oninput='clearTotal()' id='input"+masterList[index].itemID+"' class='inputCount' placeholder='Amt.' min='0'>"
        +"</div>"; 
	}
	console.log("Registered shop item.");
}

//Update
function updateInventory(){
    console.log("update inventory");
    var displayedInv="";
    if(inventory.length>0){
       
        for(i=0; i<inventory.length;i++){
            if (inventory[i].count!=0){
                
            displayedInv+="<div>"+inventory[i].name+" ["+inventory[i].count+"]</div>";
            console.log(i+displayedInv);
            }
        }
	}
    document.getElementById("inventoryList").innerHTML=displayedInv;
    document.getElementById("dungeonInventory").innerHTML=displayedInv;
    changeTool("");
}
function updateSeeds(){
    var displayedSeeds="";
    if(inventory.length>0){
    
        for(i=0; i<inventory.length;i++){
            if (inventory[i].count!=0) {
                if (inventory[i].type==="seed") {
                    displayedSeeds += "<div id='seed" + inventory[i].itemID + "' "; 
                    displayedSeeds += "onclick='changeSeed("+ inventory[i].itemID + ")'>"
                    displayedSeeds += inventory[i].name + " (" + inventory[i].count + ")</div>";
                }
            }
        }
	}
    document.getElementById("seedsList").innerHTML=displayedSeeds;
    console.log(displayedSeeds);
}
function updatePlots(){
	for(i=0; i<plots.length;i++){
		var displayedPlot="";
		var plotText="";
		var plotTitle="";
        //For NAME
		if (plots[i].seedID==="") {
			plotText="<i>(Empty)</i>";
		} else {
			var plotSeedID = plots[i].seedID;
            //equal to the harvest ready plant of seed
			var plotHarvestID = masterList[plotSeedID].harvestID;
			
			if (plots[i].readytoHarvest) {
				plotText="<strong>"+masterList[plotHarvestID].name+"</strong>"+"<img src='./resources/sprites/"+masterList[plotHarvestID].name+".png'</img>";
			} else {
				plotText=""+masterList[plotSeedID].name+"<img src='./resources/sprites/"+masterList[plotHarvestID].name+" Seedplant.png'</img>";
			}
		}
        //For STATUS
		if (plots[i].seedID==="") {
			if (plots[i].tilled) {
				plotTitle += "tilled, ";
			} else {
				plotTitle += "NOT tilled, ";
			}
		}
		if (plots[i].watered&&plots[i].tilled) {
			plotTitle += "watered";
		} else {
			plotTitle += "NOT watered";
		}					
		displayedPlot+="<div>" + plotText + "</div>";
        //PLOT COLORS PLEASE
		document.getElementById("plot" + i).innerHTML=displayedPlot;
		document.getElementById("plot" + i).title=plotTitle;
		if (plots[i].readytoHarvest) {
			document.getElementById("plot" + i).style.filter="brightness(125%)";
		} else if (plots[i].watered&&plots[i].tilled) {
			document.getElementById("plot" + i).style.backgroundColor="#8f5016";
            document.getElementById("plot" + i).style.filter="brightness(100%)";
		} else if (plots[i].tilled) {
			document.getElementById("plot" + i).style.backgroundColor="#b46f2b";
            document.getElementById("plot" + i).style.filter="brightness(100%)";
		} else {
			document.getElementById("plot" + i).style.backgroundColor="#d78c28";
            document.getElementById("plot" + i).style.filter="brightness(100%)";
		}
	}
}
function updateSell() {
    //Sell update please
     var displayedSell="";
    console.log("updating sell "+inventory.length);
    if(inventory.length>0){
        console.log("Im selling");
        for (i=0; i<inventory.length; i++){
            if(inventory[i].count!=0){

            console.log(i+".) ID="+inventory[i].itemID+" Name="+inventory[i].name+" Type="+inventory[i].type+" Sell="+inventory[i].sell+" "+i);            
                
            displayedSell+="<div><div>"+inventory[i].name+"("+inventory[i].sell+"g) "+ 
                            "["+inventory[i].count+" in inventory]</div>";
            displayedSell+="<input type='number' oninput='clearTotal()' id='inputSell"+i+
                            "' class='inputCount' placeholder='Amt.' min='0' max='"+inventory[i].count+"'></div>";
               }
        }
    }
	displayedSell+="<div>&nbsp;</div><div class='row'>"+
		"<div class='col-sm-4'><button onclick='sellFunction()'>Sell</button></div>"+
		"<div class='col-sm-4'><button onclick='clearInputSell()'>Clear</button></div>"+
		"<div class='col-sm-4'><button onclick='sellAll()'>Sell All</button></div></div><div>&nbsp;</div>";

	document.getElementById("sellList").innerHTML=displayedSell;

}
function updateMoney(){
    money=Math.round(money*100)/100;
	document.getElementById("money").innerHTML="Money: " + money + "g";
}	
function updateDay(){
	document.getElementById("day").innerHTML="Day: " + days;
}
function updateEnergy(){
	energy=Math.round(energy*100)/100;
    if (energy < 0) {
		health-=minusEnergy*2;
        energy=0;
        updateHealth();
        changeHBar();
	}
	document.getElementById("energy").innerHTML="Energy: " + energy + " / " + maxEnergy;
	changeEBar();
}
function updateHealth(){
	health=Math.round(health);
    if (health <= 0) {
        health=0;
		/*document.getElementById("gameover").innerHTML="<h1>You passed out because of low health.</h1><br><h1> G A M E O V E R </h1>";
		document.getElementById("gameover").style.display="block";
		document.getElementById("gameover").style.backgroundColor="red";
		document.getElementById("menuBar").style.display="none";
		document.getElementById("mid").style.display="none";*/
        passOut();
        changeHBar();

    }
    document.getElementById("health").innerHTML="Health: " + health + " / " + maxHealth;
	changeHBar();
}
function changeEBar(){
    var disEnergy = (energy/maxEnergy)*100;
    document.getElementById("energyFill").style.width=disEnergy+"%";
	if (disEnergy <= 20) {        
		document.getElementById("energyFill").style.backgroundColor="red";
    } else if (disEnergy <= 40) {
		document.getElementById("energyFill").style.backgroundColor="orange";
    } else if (disEnergy <= 60) {
		document.getElementById("energyFill").style.backgroundColor="yellow";
	} else if (disEnergy <= 80) {
		document.getElementById("energyFill").style.backgroundColor="yellowgreen";
	}else if (disEnergy <=100) {
        document.getElementById("energyFill").style.backgroundColor="green";
    }
}
function changeHBar(){
    var disHealth = (health/maxHealth)*100;
    document.getElementById("healthFill").style.width=disHealth+"%";
	if (disHealth <= 20) {        
		document.getElementById("healthFill").style.backgroundColor="red";
    } else if (disHealth <= 40) {
		document.getElementById("healthFill").style.backgroundColor="orange";
    } else if (disHealth <= 60) {
		document.getElementById("healthFill").style.backgroundColor="yellow";
	} else if (disHealth <= 80) {
		document.getElementById("healthFill").style.backgroundColor="yellowgreen";
	}else if (disHealth <=100) {
        document.getElementById("healthFill").style.backgroundColor="green";
    }
}
function refresh(area){
    if(area==='woods'){
       updatedWoods=false;
       }else if(area==='river'){
        updatedRiver=false;
    }else if(area==='fields'){
        updatedFields=false;
    }
    minusEnergy=15;
    energy-=minusEnergy;
    forage(area);
    updateEnergy();
}
function updateWoods(){
            if(!updatedWoods){
        for (i=0;i<forageWoods.length;i++){
            
            forageWoods[i].itemID="";
            document.getElementById('fwBox'+i).innerHTML="";
        }
            
        for(i=0; i<forageWoods.length; i++){
            var chanceCeiling= Math.random();
            var chanceFloor= Math.random();
            if(Math.abs(chanceCeiling-chanceFloor)<=0.05){
                for (p=0; p<masterList.length; p++){
                    var fill=Math.random()*masterList.length;
                    fill=Math.floor(fill);
                    console.log(fill);
                    if (masterList[fill].type==='fruit'||masterList[fill].type==='mushroom'){
                        
                        forageWoods[i].itemID=masterList[fill].itemID;
                        document.getElementById('fwBox'+i).innerHTML= "<img src='./resources/sprites/"+masterList[fill].name+
                            ".png'></img>";
                        console.log("ID: "+forageWoods[i].itemID);
                        break;
                    }
                }
            }
            
        }updatedWoods=true;
        }
}
function updateRiver(){
            if(!updatedRiver){
        for (i=0;i<forageRiver.length;i++){
            
            forageRiver[i].itemID="";
            document.getElementById('frBox'+i).innerHTML="";
        }

        for(i=0; i<forageRiver.length; i++){
            var chanceCeiling= Math.random();
            var chanceFloor= Math.random();
            if(Math.abs(chanceCeiling-chanceFloor)<=0.05){
                for (p=0; p<masterList.length; p++){
                    var fill=Math.random()*masterList.length;
                    fill=Math.floor(fill);
                    console.log(fill);
                    if (masterList[fill].type==='fish'){
                        
                        forageRiver[i].itemID=masterList[fill].itemID;
                        document.getElementById('frBox'+i).innerHTML= "<img src='./resources/sprites/"+masterList[fill].name+
                            ".png'></img>";
                        console.log("ID: "+forageRiver[i].itemID);
                        break;
                    }
                }
            }
            
        }updatedRiver=true;
        }

}
function updateFields(){
    
            if(!updatedFields){
        for (i=0;i<forageFields.length;i++){
            
            forageFields[i].itemID="";
            document.getElementById('ffBox'+i).innerHTML="";
        }
 
        for(i=0; i<forageFields.length; i++){
            var chanceCeiling= Math.random();
            var chanceFloor= Math.random();
            if(Math.abs(chanceCeiling-chanceFloor)<=0.05){
                for (p=0; p<masterList.length; p++){
                    var fill=Math.random()*masterList.length;
                    fill=Math.floor(fill);
                    console.log(fill);
                    if (masterList[fill].type==='flower'){
                        
                        forageFields[i].itemID=masterList[fill].itemID;
                        document.getElementById('ffBox'+i).innerHTML= "<img src='./resources/sprites/"+masterList[fill].name+
                            ".png'></img>";
                        
                        console.log("ID: "+forageFields[i].itemID);
                        break;
                    }
                }
            }
            
        }updatedFields=true;
        }
    
}

//Travel
function townLocation(){
    if(currLocation!="Town"){    
        minusEnergy=20;
        energy-=minusEnergy;
    }
	document.getElementById("homeActions").style.display="none"; 
	document.getElementById("townActions").style.display="block";
    document.getElementById("mountainActions").style.display="none";
    document.getElementById("forestActions").style.display="none";

	openTop('townpic');
	openBot('blankBot');
    openLeft('blankLeft')
	currLocation="Town";
    changeTool("");
	sellMsg("");
    shopMsg("");
    updateEnergy();
}
function homeLocation(){
    if(currLocation!="Home"){
        minusEnergy=20
        energy-=minusEnergy;
    }
	document.getElementById("homeActions").style.display="block";    
	document.getElementById("townActions").style.display="none";  
    document.getElementById("mountainActions").style.display="none";
    document.getElementById("forestActions").style.display="none";
    
	openLeft('farm');
	openTop('homepic');
	openBot('tools');
	currLocation="Home";
	changeTool("");
	farmMsg("");
    updateEnergy();
}
function mountainLocation(){
    if(currLocation!="Mountain"){
        minusEnergy=20
        energy-=minusEnergy;
        
    }
    document.getElementById("homeActions").style.display="none";    
	document.getElementById("townActions").style.display="none";  
    document.getElementById("mountainActions").style.display="block";
    document.getElementById("forestActions").style.display="none";

    openLeft('');
    openTop('mountainpic');
    openBot('blankBot');
    currLocation="Mountain";
    changeTool("");
    updateEnergy();
}
function forestLocation(){
    if(currLocation!="Forest"){
        minusEnergy=20
        energy-=minusEnergy;
        
    }
    document.getElementById("homeActions").style.display="none";    
	document.getElementById("townActions").style.display="none";  
    document.getElementById("mountainActions").style.display="none";
    document.getElementById("forestActions").style.display="block";

    openLeft('forageMenu');
    openTop('forestpic');
    openBot('blankBot');
    currLocation="Forest";
    changeTool("");
    updateEnergy();

}

//Messaging Functions
function farmMsg(farmMsg) {
	document.getElementById("farmMsg").innerHTML=farmMsg;
}
function shopMsg(shopMsg) {
	document.getElementById("shopMsg").innerHTML=shopMsg;
}
function sellMsg(sellMsg) {
	document.getElementById("sellMsg").innerHTML=sellMsg;
}

//Home Functions
function passOut(){
    document.getElementById("homeActions").style.display="block";    
	document.getElementById("townActions").style.display="none";  
    document.getElementById("mountainActions").style.display="none";
    document.getElementById("forestActions").style.display="none";
    console.log("hello")
    
	openLeft('farm');
    openTop('clinicpic');
	openBot('passOut');

	currLocation="Home";
	changeTool("");
    showMenu();
    
    if(player.battle){
        toggleCombat();
    }
    
    console.log("ended the day");
	energy=maxEnergy/2;
    health=maxHealth;
	days+=5;
	updateEnergy();
    updateHealth();
	updateDay();
    updatedFields=false;
    updatedWoods=false;
    updatedRiver=false;
    updateWoods();
    updateFields();
    updateRiver();

    
	for(i=0; i<plots.length;i++){
    console.log(i+".) Seed ID="+plots[i].seedID+" Watered="+plots[i].watered+" Ready to Harvest="+plots[i].readytoHarvest+" Days to Mature="+plots[i].daystoMature);
        if (plots[i].seedID!==""&&plots[i].watered&&!plots[i].readytoHarvest){
            plots[i].daystoMature-=1;
            if (plots[i].daystoMature===0) {
                plots[i].readytoHarvest= true;
            }
	}else if (plots[i].seedID==="") {
              plots[i].tilled=false;
              }
		plots[i].watered = false;
}   
	updatePlots();
	if (days >= deadline) {
		if (money >= targetMoney) {
			document.getElementById("gameover").innerHTML="<h1>You were able to raise the required money before the deadline!</h1> <h1> THANKS FOR PLAYING! </h1>";
			document.getElementById("gameover").style.display="block";
			document.getElementById("gameover").style.backgroundColor="chartreuse";
			document.getElementById("menuBar").style.display="none";
			document.getElementById("mid").style.display="none";
		} else {
			document.getElementById("gameover").innerHTML="<h1>You failed to pay your debt on time...</h1><h1>Your farm has been repossessed.</h1><br><h1> G A M E O V E R </h1>";
			document.getElementById("gameover").style.display="block";
			document.getElementById("gameover").style.backgroundColor="red";
			document.getElementById("menuBar").style.display="none";
			document.getElementById("mid").style.display="none";
		}
	}
}
function endDay(){
    console.log("ended the day");
	energy=maxEnergy;
    health=maxHealth;
	days+=1;
	updateEnergy();
    updateHealth();
	updateDay();
    changeTool("");
    updatedFields=false;
    updatedWoods=false;
    updatedRiver=false;
    updateWoods();
    updateFields();
    updateRiver();
    
	for(i=0; i<plots.length;i++){
    console.log(i+".) Seed ID="+plots[i].seedID+" Watered="+plots[i].watered+" Ready to Harvest="+plots[i].readytoHarvest+" Days to Mature="+plots[i].daystoMature);
        if (plots[i].seedID!==""&&plots[i].watered&&!plots[i].readytoHarvest){
            plots[i].daystoMature-=1;
            if (plots[i].daystoMature===0) {
                plots[i].readytoHarvest= true;
            }
	}else if (plots[i].seedID==="") {
              plots[i].tilled=false;
              }
		plots[i].watered = false;
	openTop('roosterpic');
	openBot('blankBot');
	farmMsg("<h1>You feel refreshed!</h1>");
}   
	updatePlots();
	if (days >= deadline) {
		if (money >= targetMoney) {
			document.getElementById("gameover").innerHTML="<h1>You were able to raise the required money before the deadline!</h1> <h1> THANKS FOR PLAYING! </h1>";
			document.getElementById("gameover").style.display="block";
			document.getElementById("gameover").style.backgroundColor="chartreuse";
			document.getElementById("menuBar").style.display="none";
			document.getElementById("mid").style.display="none";
		} else {
			document.getElementById("gameover").innerHTML="<h1>You failed to pay your debt on time...</h1><h1>Your farm has been repossessed.</h1><br><h1> G A M E O V E R </h1>";
			document.getElementById("gameover").style.display="block";
			document.getElementById("gameover").style.backgroundColor="red";
			document.getElementById("menuBar").style.display="none";
			document.getElementById("mid").style.display="none";
		}
	}
}
function plotClick(plot) {
	if (currSeed!=="") {
		//Planting
		if (plots[plot].seedID !=="") {			
			farmMsg("<h1>Plot is not empty!</h1>");
		} else if (!plots[plot].tilled) {
			farmMsg("<h1>Need to till plot first.</h1>");
		} else {
			plots[plot].seedID = currSeed;
			plots[plot].daystoMature = masterList[currSeed].daystoMature;
            console.log("JUST PLANTED seedID="+plots[plot].seedID+" currSeed="+currSeed+" daystoMature="+plots[plot].daystoMature+" daystoMature from List="+masterList[currSeed].daystoMature);
			updatePlots();
            for (i=0; i<inventory.length; i++){
                if(inventory[i].itemID===currSeed){
                    inventory[i].count-=1;
                }
            }
            updateSeeds();
			changeSeed(currSeed);
			minusEnergy=10;
			energy-=minusEnergy;
			updateEnergy();
			farmMsg("<h1>Seed planted successfully!</h1>");
		}
	} else if (currTool==="hoe") {
		//Tilling
		plots[plot].tilled = true;
		plots[plot].seedID = "";
		plots[plot].watered = false;
		plots[plot].readytoHarvest = false;
		plots[plot].daystoMature = -1;		
		updatePlots();
        minusEnergy=10;
		energy-=minusEnergy;
        updateEnergy();
	} else if (currTool==="wateringCan") {
		//Watering
        if(plots[plot].tilled){
		  plots[plot].watered = true;
           }
		updatePlots();
        minusEnergy=5;
		energy-=minusEnergy;
        updateEnergy();
	} else if (currTool==="hand") {
        if (plots[plot].readytoHarvest){
            minusEnergy=10;
            energy-=minusEnergy;
            updateEnergy();
            var plotSeedID=plots[plot].seedID;
            var plotHarvestID=masterList[plotSeedID].harvestID;
            var foundInInventory=false;
            for (i=0;i<inventory.length;i++){
                if (inventory[i].itemID===plotHarvestID){
                    foundInInventory=true;
                    inventory[i].count+=1;
                    break;
                }
            }
                if (!foundInInventory) {
                    inventory.push(masterList[plotHarvestID]);
                    inventory[inventory.length-1].count=1;
                }
                //resetting plots
                if (masterList[plotSeedID].regrows) {				
                    plots[plot].daystoMature = masterList[plotSeedID].daystoMature;	
                } else {
                    plots[plot].tilled = false;
                    plots[plot].seedID = "";
                    plots[plot].daystoMature = -1;	
			 }
			plots[plot].watered = false;
			plots[plot].readytoHarvest = false;
            farmMsg("<h1>Harvest successful!</h1>")
        }else if(plots[plot].seedID===""){
            farmMsg("<h1>Nothing is planted.</h1>");
        }else {farmMsg("<h1>Not yet mature.</h1>");}
		updatePlots();
	}
}
function changeTool(tool) {
	currTool=tool;
	currSeed="";
	for(i=0; i<toolList.length;i++){
		if (currTool===toolList[i]) {			
			document.getElementById(toolList[i]+"Tool").style.backgroundColor="#ce9459";    
		} else {
			document.getElementById(toolList[i]+"Tool").style.backgroundColor="transparent";    
		}			
	}
	farmMsg("");
}
function changeSeed(id) {
	currSeed=id;
    if(typeof(currSeed)!== "string"){
        
        for(i=0; i<inventory.length;i++){
            if (inventory[i].count!= 0&&inventory[i].type==="seed") {
                if (currSeed===inventory[i].itemID) {			
                    document.getElementById("seed"+inventory[i].itemID).style.backgroundColor="#ce9459";    
                } else {
                    document.getElementById("seed"+inventory[i].itemID).style.backgroundColor="transparent";    
                }			
                }
        }
    }
	farmMsg("");
}

//Town Functions
function enterPierreShop(){
    document.getElementById("shopContent").innerHTML= forSale+"<div>&nbsp;</div><div class='row'>"+
        "<div class='col-sm-4'><button onclick='buyFunction()'>Buy</button></div>"+
        "<div class='col-sm-4'><button onclick='clearInput()'>Clear</button></div>"+
		"<div class='col-sm-4'></div></div><div>&nbsp;</div>";
}
function sellAll(){
    sellAllDetermine=true;
    profit=0
        for(i=0; i<inventory.length;i++){
            count=0;
                    if (inventory[i].count!==0){
                        //get inputted count and  masterList sell
                        count=inventory[i].count;
                        if (typeof count==='string'){
                            count=Number(count);
                        }
                        sell=inventory[i].sell;
                        sell=sell*count;
                        //total price for displaying purposes
                        profit+=sell;
                        document.getElementById("totalProfit").innerHTML= "Total: "+profit+"g<br> <button onclick='confirmSellFunction()'>Confirm</button>";
                        sellMsg("");
                    }
                }

}
function sellFunction() {
            profit=0
                for(i=0; i<inventory.length;i++){
                        count=0
                    if (inventory[i].count!==0){
                        //get inputted count and  masterList sell
                        count=document.getElementById('inputSell'+i).value;
                        if (typeof count==='string'){
                            count=Number(count);
                        }
                        if (count<0){
                            sellMsg("<h1>You can't sell negative items!</h1>")
                            document.getElementById('inputSell'+i).value='';
                            break;
                        }
                        if (count>inventory[i].count){
                            console.log("Cant sell what u dont have");
                            sellMsg("<h1>You can't sell what you don't have!</h1>")
                            document.getElementById('inputSell'+i).value='';
                            break;
                        }
                    }
                        sell=inventory[i].sell;
                        sell=sell*count;
                        //total price for displaying purposes
                        profit+=sell;
                        document.getElementById("totalProfit").innerHTML= "Total: "+profit+"g<br> <button onclick='confirmSellFunction()'>Confirm</button>";
                        sellMsg("");
                    }
}
function confirmSellFunction(){
       
        for(i=0; i<inventory.length;i++){
            count=0;
            if(!sellAllDetermine){
               
                if (inventory[i].count!==0){
                    count=document.getElementById('inputSell'+i).value;
                    if (typeof count==='string'){
                        count=Number(count);
                    }
                }
            }else{
                 if (inventory[i].count!==0){
                //get inputted count and  masterList sell
                count=inventory[i].count;
                   if (typeof count==='string'){
                     count=Number(count);
                    }
                }

            }
                sell=inventory[i].sell;
                sell=sell*count;
                        //check if going to be sold
                        if (count>0){
                            money+=sell;
                            inventory[i].count-=count;
                            }
            }
          //end of loop
                updateMoney();
                clearTotal();
                clearInputSell();
                updateInventory();
                updateSell();
}
function buyFunction(){
    total=0
    for(i=0; i<masterList.length;i++){
        if (masterList[i].type==="seed"){
                //get inputted count and  masterList price
                count=document.getElementById('input'+i).value;
                if (typeof count==='string'){
                    count=Number(count);
                }
                if (count<0){
					shopMsg("<h1>You can't buy negative items!</h1>")
                    document.getElementById('input'+i).value='';
                    break;
                }
                price=masterList[i].price;
                price=price*count;
                //total price for displaying purposes
                total+=price;
                shopMsg("");
            }
    document.getElementById("totalDeduct").innerHTML= "Total: "+total+"g<br> <button onclick='confirmBuyFunction()'>Confirm</button>"
    }     
}
function confirmBuyFunction(){
    if(money-total>=0){
        for(i=0; i<masterList.length;i++){
            //check if seed
            if (masterList[i].type==="seed"){
                 var foundInInventory=false;
                //get inputted count and  masterList price
                count=document.getElementById('input'+i).value;
                console.log("proof that count is greater than 0:"+count);
                console.log("Item id: "+i);
                price=masterList[i].price;
                price=price*count;
                //check if non-negative
                    if (money-price>=0){
                        money-=price;
                        //check if going to be bought
                        if (count>0){
                            console.log("What is the inventory length?: "+inventory.length);
                            //add to inventory
                            for (haha= 0;haha<inventory.length;haha++){
                                //check if item in inventory
                                if (inventory[haha].itemID === masterList[i].itemID) {
                                console.log(typeof count);
                                count=Number(count);
                                inventory[haha].count+=count;
                                 foundInInventory=true;
                                console.log(inventory[haha]);
                                break;
                                }
                                }
                                if(foundInInventory===false){
                                    console.log("Zetsubou");
                                    inventory.push(masterList[i]);
                                    console.log("new"+typeof count);
                                    count=Number(count);
                                    inventory[inventory.length-1].count=count;
                                    console.log(inventory[inventory.length-1]);
                                   }
                            }
                        } 
                    }
            }
          //end of loop
		  shopMsg("<h1>Thanks for your purchase!</h1>")
	} else {
		shopMsg("<h1>You don't have enough money!</h1>");
        clearTotal();
    }updateInventory();
    updateSell();
    updateMoney();
    clearInput();
}
function clearTotal(){
    sellAllDetermine=false;
    document.getElementById("totalDeduct").innerHTML="";
    document.getElementById("totalProfit").innerHTML="";
    console.log('cleared!');
}
function clearInput(){
    for(i=0; i<masterList.length;i++){
        if (masterList[i].type==="seed"){
                document.getElementById('input'+i).value='';
        }
    clearTotal();
}
}
function clearInputSell(){
    for(i=0; i<inventory.length;i++){
        if (inventory[i].count!==0){    
            console.log(inventory[i].name+inventory[i].count);
                document.getElementById('inputSell'+i).value='';
        }
    clearTotal();
}
}

//Forest Functions
function forage(area){
    openLeft(area);
    if (area==='woods'){
        updateWoods();
    }else if (area==='river'){
        updateRiver();
    }else if (area==='fields'){
        updateFields();
    }
}
function forageClick(no,bArea){
    var boxFill=document.getElementById(bArea+"Box"+no).innerHTML;
    if (boxFill!==""){
    minusEnergy=10;
    energy-=minusEnergy;
    updateEnergy();
     if(bArea==="fw"){
        var thisThing= forageWoods[no].itemID;
        }
        else if(bArea==="fr"){
         var thisThing= forageRiver[no].itemID;
     }
        else if(bArea==="ff"){
            var thisThing= forageFields[no].itemID;      
              }   
         
        var foundInInventory=false;
        for (i=0;i<inventory.length;i++){
             if (inventory[i].itemID===thisThing){
                 foundInInventory= true;
                 inventory[i].count+=1;
                 break;
             }
         }
         if (!foundInInventory){
             inventory.push(masterList[thisThing]);
             inventory[inventory.length-1].count=1;
         }
        document.getElementById(bArea+"Box"+no).innerHTML="";

    }
    }
/*FRANZ*/
function HP(x){
    return enemyLvl[x]*((Math.pow(player.worldLevel, 2))*100);
}
function ATK(x){
    return enemyLvl[x]*(player.worldLevel);
}
function totalPATK() {
    return player.atk + (player.atk*player.atkIncrease);
}
function totalPHP() {
    return maxHealth + (maxHealth*player.hpIncrease);
}
function newEnemy(){
    enemy = Math.floor(Math.random()*enemyName.length);
    lvl = Math.floor(Math.random()*player.worldLevel); //dictates the possible level of enemies based on your world level
    document.getElementById("enemyName").innerHTML = "Enemy: " + enemyName[enemy];
    document.getElementById("enemyLvl").innerHTML = "Lvl " + enemyLvl[lvl];
    enemyHP = HP(lvl);
    maxHP = HP(lvl);
    enemyATK = ATK(lvl);
    document.getElementById("health2").style.width = (enemyHP/maxHP)*100 + "%";
}
function kill(){
    if(player.battle) {
        if (enemyHP > 0) {
            enemyHP -= totalPATK();
            document.getElementById("health2").style.width = (enemyHP / maxHP) * 100 + "%";
            minusEnergy=7;
            energy-=minusEnergy;
            updateEnergy();
            nameEnemy= enemyName[enemy];
            if (enemyHP <= 0) {
                document.getElementById("health2").style.width = "0";
                setTimeout(newEnemy, 1500);
                money += Math.random()*player.coinMultiplier*enemyLvl[lvl];
                updateMoney();

                //loot system
                if(nameEnemy=="Slime"){
                    var foundInInventory=false;
                    for (i=0;i<inventory.length;i++){
                        console.log(i+"");
                        if (inventory[i].itemID===12){
                            foundInInventory=true;
                            inventory[i].count+=1;
                            break;
                        }
                    }
                    if (!foundInInventory){
                    console.log("Hey Hey Shuichi!");
                    inventory.push(masterList[12]);
                    inventory[inventory.length-1].count=1
                    
                    }
                }else if(nameEnemy=="Bug"){
                    var foundInInventory=false;
                    for (i=0;i<inventory.length;i++){
                        console.log(i+"!");
                        if (inventory[i].itemID===13){
                            foundInInventory=true;
                            inventory[i].count+=1;
                            break;
                        }
                    }
                    if (!foundInInventory){
                    console.log("Hey Hey Shuichi!");
                    inventory.push(masterList[13]);
                    inventory[inventory.length-1].count=1
                    
                    }
                }
                //rare item
                var rndceiling=0, rndfloor=0;
                rndceiling=Math.random();
                rndfloor=Math.random();
                
                if (Math.abs(rndceiling-rndfloor)<=Math.pow(0.3, 10-player.worldLevel)){
                rndceiling=Math.random();
                rndfloor=Math.random();
                    if(Math.abs(rndceiling-rndfloor)<=0.5){
                        var foundInInventory=false;
                        for (i=0;i<inventory.length;i++){
                            console.log(i+"!");
                            if (inventory[i].itemID===14){
                                foundInInventory=true;
                                inventory[i].count+=1;
                                break;
                            }
                        }
                        if (!foundInInventory){
                        console.log("Hey Hey Shuichi!");
                        inventory.push(masterList[14]);
                        inventory[inventory.length-1].count=1;

                       }}else {
                       var foundInInventory=false;
                        for (i=0;i<inventory.length;i++){
                            console.log(i+"!");
                            if (inventory[i].itemID===15){
                                foundInInventory=true;
                                inventory[i].count+=1;
                                break;
                            }
                        }
                        if (!foundInInventory){
                        console.log("Hey Hey Shuichi!");
                        inventory.push(masterList[15]);
                        inventory[inventory.length-1].count=1;
                       }
                }
                }
                
        }
    }updateInventory();
    }
}
function block(){
    player.block = true;
    document.getElementById("block").classList.add("disabled");
    document.getElementById("kill").classList.add("disabled");

}
function enemyAttack(){
    if(player.block){
        player.block = false;
        document.getElementById("block").classList.remove("disabled");
        document.getElementById("kill").classList.remove("disabled");
        health -= enemyATK*(1 - player.blockRate);
 
        if(health <= 0){
            health = 0;
            document.getElementById("healthP2").style.width = "0";
            document.getElementById("revive").style.display = "inline";
            document.getElementById("combat").classList.add("disabled");
            document.getElementById("combat").disabled = true;
            toggleCombat()
        }
    }
    else {
        health -= enemyATK;
        if(health <= 0){
            health = 0;
            document.getElementById("combat").classList.add("disabled");
            document.getElementById("combat").disabled = true;
            toggleCombat();
        }
    }    updateHealth();
        changeHBar();
    updateInventory()

}
if (enemyHP <= 0){
    newEnemy();
}
function toggleCombat(){
    if (player.battle){
        player.battle = false;
        document.getElementById("block").classList.add("disabled");
        document.getElementById("block").disabled = true;
        document.getElementById("kill").classList.add("disabled");
        document.getElementById("kill").disabled = true;
    } else {
        player.battle = true;
        document.getElementById("block").classList.remove("disabled");
        document.getElementById("block").disabled = false;
        document.getElementById("kill").classList.remove("disabled");
        document.getElementById("kill").disabled = false;
    }
}
function weaponBuy() {
    if(money >= upgrades.weaponBuyCost) {
        money -= upgrades.weaponBuyCost;
        updateMoney();
        player.atk += 20;
        upgrades.weaponBuyCost = Math.round(Math.pow(upgrades.weaponBuyCost, 1.1) * 100) / 100;
        document.getElementById("bAtkIncrease").innerHTML = player.atk + " => " + (player.atk + 20);
        console.log(player.atk);
        document.getElementById("weaponBuy").innerHTML = "Cost: " + upgrades.weaponBuyCost + "g";
    }updateGuild();
}
function weaponBuy2() {
    if(money >= upgrades.weaponBuy2Cost) {
        player.atkIncreaseBought = true;
        money -= upgrades.weaponBuy2Cost;
        updateMoney();
        player.atkIncrease = Math.round((player.atkIncrease+0.02)*100)/100;
        upgrades.weaponBuy2Cost = Math.round((upgrades.weaponBuy2Cost*1.1) * 100) / 100;
        document.getElementById("atkIncrease").innerHTML = Math.round(player.atkIncrease*100) + "% => " + Math.round(player.atkIncrease*100 + 2) + "%";
        document.getElementById("weaponBuy2").innerHTML = "Cost: " + upgrades.weaponBuy2Cost + "g";
        if(player.atkIncrease >= 2){
            document.getElementById("atkIncrease").innerHTML = "200%";
            document.getElementById("weaponBuy2").innerHTML = "Max Level Reached.";
            document.getElementById("weaponBuy2").classList.add("disabled");
            document.getElementById("weaponBuy2").disabled = true;
        }
    }updateGuild()
}
function HPBuy() {
    if(money >= upgrades.HPBuyCost) {
        money -= upgrades.HPBuyCost;
        updateMoney();
        maxHealth*= 2;
        health = totalPHP();
        upgrades.HPBuyCost = Math.round((upgrades.HPBuyCost*2.5) * 100) / 100;
        document.getElementById("bHPIncrease").innerHTML = maxHealth + " => " + (maxHealth * 2);
        document.getElementById("HPBuy").innerHTML = "Cost: " + upgrades.HPBuyCost + "g";
    }updateGuild();
    updateHealth();
}
function HPBuy2() {
    if(money >= upgrades.HPBuy2Cost) {
        player.hpIncreaseBought = true;
        money -= upgrades.HPBuy2Cost;
        updateMoney();
        player.hpIncrease = Math.round((player.hpIncrease+0.02)*100)/100;
        health = totalPHP();
        maxHealth=totalPHP();
        maxHealth=Math.round(maxHealth);
        upgrades.HPBuy2Cost = Math.round((upgrades.HPBuy2Cost*1.1) * 100) / 100;
        document.getElementById("HPIncrease").innerHTML = Math.round(player.hpIncrease*100) + "% => " + Math.round(player.hpIncrease*100 + 2) + "%";
        document.getElementById("HPBuy2").innerHTML = "Cost: " + upgrades.HPBuy2Cost + "g";
        if(player.hpIncrease >= 2){
            document.getElementById("HPIncrease").innerHTML = "200%";
            document.getElementById("HPBuy2").innerHTML = "Max Level Reached.";
            document.getElementById("HPBuy2").classList.add("disabled");
            document.getElementById("HPBuy2").disabled = true;
        }
    }updateGuild()
    updateHealth();
}
function shieldBuy() {
    if(money >= upgrades.shieldBuyCost) {
        money -= upgrades.shieldBuyCost;
        updateMoney();
        player.blockRate += 0.1;
        upgrades.shieldBuyCost *= 5;
        document.getElementById("shieldIncrease").innerHTML = Math.round(player.blockRate*100) + "% => " + Math.round(player.blockRate*100 + 10) + "%";
        document.getElementById("shieldBuy").innerHTML = "Cost: " + upgrades.shieldBuyCost + "g";
        if(player.blockRate >= 0.85){
            document.getElementById("shieldIncrease").innerHTML = "90% => 99%";
        }
        if (player.blockRate >= 0.99){
            player.blockRate = 0.99;
            document.getElementById("shieldIncrease").innerHTML = "99%";
            document.getElementById("shieldBuy").innerHTML = "Max Level Reached.";
            document.getElementById("shieldBuy").classList.add("disabled");
            document.getElementById("shieldBuy").disabled = true;
        }
    }updateGuild()
}
function WLBuy() {
    if(energy >= upgrades.WLBuyCost) {
        minusEnergy = upgrades.WLBuyCost;
        energy-=minusEnergy;
        updateEnergy();
        console.log("Nyeh"+upgrades.WLBuyCost);
        player.coinMultiplier *= 3;
        player.worldLevel += 1;
        document.getElementById("WLIncrease").innerHTML = "Level "+player.worldLevel;
        if(player.worldLevel >= 9){
            document.getElementById("WLIncrease").innerHTML = "Level 9";
            document.getElementById("WLBuy").innerHTML = "Max Level Reached.";
            document.getElementById("WLBuy").classList.add("disabled");
            document.getElementById("WLBuy").disabled = true;
        }
    }updateGuild()
}
function updateGuild(){
        if(money >= upgrades.weaponBuyCost){
 
        document.getElementById("weaponBuy").classList.remove("btn-danger");
        document.getElementById("weaponBuy").classList.add("btn-success");
    } else {
 
        document.getElementById("weaponBuy").classList.add("btn-danger");
        document.getElementById("weaponBuy").classList.remove("btn-success");
    }
    if(money >= upgrades.weaponBuy2Cost||player.atkIncrease >= 2){
 
        document.getElementById("weaponBuy2").classList.remove("btn-danger");
        document.getElementById("weaponBuy2").classList.add("btn-success");
    } else {
 
        document.getElementById("weaponBuy2").classList.add("btn-danger");
        document.getElementById("weaponBuy2").classList.remove("btn-success");
    }
    if(money >= upgrades.HPBuyCost){
 
        document.getElementById("HPBuy").classList.remove("btn-danger");
        document.getElementById("HPBuy").classList.add("btn-success");
    } else {
 
        document.getElementById("HPBuy").classList.add("btn-danger");
        document.getElementById("HPBuy").classList.remove("btn-success");
    }
    if(money >= upgrades.HPBuy2Cost||player.hpIncrease >= 2){
 
        document.getElementById("HPBuy2").classList.remove("btn-danger");
        document.getElementById("HPBuy2").classList.add("btn-success");
    } else {
 
        document.getElementById("HPBuy2").classList.add("btn-danger");
        document.getElementById("HPBuy2").classList.remove("btn-success");
    }
    if(money >= upgrades.shieldBuyCost||player.blockRate >= 0.95){
 
        document.getElementById("shieldBuy").classList.remove("btn-danger");
        document.getElementById("shieldBuy").classList.add("btn-success");
    } else {
 
        document.getElementById("shieldBuy").classList.add("btn-danger");
        document.getElementById("shieldBuy").classList.remove("btn-success");
    }
    if(energy >= upgrades.WLBuyCost||player.worldLevel >= 9){
 
        document.getElementById("WLBuy").classList.remove("btn-danger");
        document.getElementById("WLBuy").classList.add("btn-success");
    } else {
 
        document.getElementById("WLBuy").classList.add("btn-danger");
        document.getElementById("WLBuy").classList.remove("btn-success");
    }
    if(player.atkIncreaseBought){document.getElementById("atk").innerHTML = "Base Attack: " + player.atk + "<span style='color: aqua'> + " + player.atk*player.atkIncrease + "</span>";}
    else{document.getElementById("atk").innerHTML = "Base Attack: " + player.atk;}
}
var mainGameLoop = window.setInterval(function() {
    if(player.battle) {
        if (atkTimer < 100 && enemyHP > 0) {
            atkTimer += 0.2;
            document.getElementById("time2").style.width = atkTimer + "%";
        } else if (enemyHP > 0) {
            enemyAttack();
            atkTimer = 0;
        } else {
            atkTimer = 0;
        }
        }
}, 10);