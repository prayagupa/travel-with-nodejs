var fightClubMovieBuffer = new Buffer(100);

//buffer.write("0")
//buffer.write("1")
for(var i = 0; i< fightClubMovieBuffer.length; i++){
   fightClubMovieBuffer[i]=i;
}
console.log(fightClubMovieBuffer)
console.log(fightClubMovieBuffer.length)
console.log(fightClubMovieBuffer.toString())

//slicing into smaller buffer
var fightClubClip = fightClubMovieBuffer.slice(40, 60)
console.log(fightClubClip)

//copy into new buffer
var duplicateMovieBuffer = new Buffer(20)
fightClubMovieBuffer.copy(duplicateMovieBuffer, 40, 60)

console.log(duplicateMovieBuffer)
