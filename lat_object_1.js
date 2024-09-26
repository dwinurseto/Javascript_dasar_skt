let mobil = {merk: 'toyota', warna: 'merah'};
 console.log(mobil);

//create
console.log('create:');
mobil.tahun='2022';
//read
console.log('read:');
console.log(mobil.merk+' '+mobil.warna+' '+mobil.tahun);
//update
console.log('update:');
mobil.warna='hitam';
console.log(mobil.merk+' '+mobil.warna+' '+mobil.tahun);
//delete
console.log('delete:');
delete mobil.tahun;
console.log(mobil);

//array
console.log('array:');
let array1=[1, 2, 3];
let array2=[4, 5, 6];
let gabungan=[...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(gabungan);

let mobilBaru = {...mobil, tahun: '2023'};
console.log(mobilBaru);