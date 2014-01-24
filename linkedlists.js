

function LinkedList(){
	this._length = 0,
	this.head = null;
}

LinkedList.prototype = {
	add: function (data){

		//create a new node, place data in
		var node = {
			data: data,
			next: null
		}, current;
		//special case: not items present in the list yet

		if(this.head === null){
			this.head = node;
		}
		else {
			current = this.head;

			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		this._length++;
	},

	item: function (index){
		//check for out of bounds index values
		if(index > -1 && index < this._length){
			var current = this.head,
				i = 0;
			while(i++ < index){
				current = current.next;
			}

			return current.data;
		}
	},

	remove: function (index){

		//check for out of bounds values
		if(index > -1 && index < this._length){
			var current = this.head,
			previous, i = 0;

			if(index === 0){
				this.head = current.next;
			}
			else{
				//find the right location
				while(i++ < index){
					previous = current;
					current = current.next;
				}

				//skip over the item to remove
				previous.next = current.next;
			}

			//decrement the length
			this._length--;

			//return the value
			return current.data;

		} else {
			return null;
		}
	}

};