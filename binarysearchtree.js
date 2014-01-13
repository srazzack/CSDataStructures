//simple implementation of binary search tree node
//non-linear insertion algorithm
var node = {
	value: 125,
	left: null,
	right: null
};

function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype = {
	constructor: BinarySearchTree,
	add: function (val){
	},

	contains: function (val){
		var found = false, current = this.root;

		while(!found && current){
			//we will need to assess the value; 
			//if it is less than the current node
			//the node will be the left child
			if(value < current.value){
				current = current.left;
			}
			else if (value > current.value){
				current = current.right;
			}
			else {
				found = true;
			}
		}
		return found;
	},

	remove: function(value){
    },

    size: function(){
    },

    toArray: function(){
    }
}


