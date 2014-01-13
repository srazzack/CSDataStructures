var reverse = function (str){
	//type verification
	if(typeof str === 'string'){
		//empty string verification
		if (str === ''){
			return '';
		}
		else{
			return reverse(str.substr(1)) + str.charAt(0);
		}
	}
	else{
		throw new TypeError;
	}
};