var makeHashTable = function() {
  //Do not change the max!
   this._ max = 4;
   this._storage=limitedArray(this._max);
 }

  makeHashTable.prototype.insert=function(key,value){
    var index=getIndexBelowMaxForKey(key,this._max);
    var flag=true;
  if(this._storage[index]===undefined){
    this._storage[index]=[]
  }
for(var i = 0 ; i < this._storage[index].length ; i++){
  if(this._storage[index][i][0]=== key){
    this._storage[index][i][1]=value;
    flag=false;
  }
}
if(flag){
  this._storage[index].push([key,value]);
}
this._storage.set(index,this._storage[index])
}
makeHashTable.prototype.retrive=function(key){
  var index=getIndexBelowMaxForKey(key,this._max);
  for(var i = 0; i < this._storage[index].length ; i++){
    if(this._storage[index][i][0]===key){
      return this._storage[index][i][1]
    }
  }
}
makeHashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key , this._max);
  for(var i = 0 ; i < this._storage[index][i][0]===key){
    return this._storage[index][i]=[];
  }
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};