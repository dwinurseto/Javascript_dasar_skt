let buah = ['apel', 'mangga', 'jeruk'];
console.log('array: '+buah);

//create
buah.push('pisang');
console.log('push data ke array: '+buah);

//read
console.log('baca array index ke 2: '+buah[2]);

//update
buah[3]='anggur';
console.log('update array index ke 3: '+buah);

//delete
buah.splice(2,2);
console.log('delete array index ke 2 sejumlah 2 data: '+buah);