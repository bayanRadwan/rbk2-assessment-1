var Stack = function() {
	this._size=0;
	this._storage=[];
};
Stack.prototype.add=function(value){
	
	var size=this._size++
	return this._storage.push(value);
}
Stack.prototype.remove=function(value){
	var size=this._size--
	if(._size>0){
		return this._storage.pop();
	}
}