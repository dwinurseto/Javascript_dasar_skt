// var, const, let

var 
    nama = 'Dwi Nurseto';
    nama = 'Dwi Nurseto N';

//const 
let
    umur = 28;

// console.log('Nama saya', nama, ', umur saya ',umur);
//let datasaya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`
// console.log(datasaya);

var
    dataSaya;
function printDataNama(nama = 'John Doe', umur = 1) {
    //let datasaya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
    dataSaya = `1. Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
    console.log(dataSaya);    
    
}

// printDataNama(nama, umur)




// Object -> Property -> Nested variable

const dataSaya1 = {
    nama : 'Testing nama 2',
    umur : 28,
    printDataNama: (nama = 'nama lengkap harus diisi', umur = 'umur harus diisi') => {
        var data= `2. Nama saya adalah ${nama} dan umur saya ${umur}`;
        console.log(data)
    }
}
// dataSaya1.printDataNama(dataSaya1.nama, dataSaya1.umur);



const dataSaya2 = {
    nama : 'Testing nama 3',
    umur : 28,
    printDataNama: (nama = 'nama lengkap harus diisi', umur = 'umur harus diisi') => {
        var data= `3. Nama saya adalah ${nama} dan umur saya ${umur}`;
        console.log(data)
    }
}
// dataSaya2.nama = 'John Doe 2';
// console.log(dataSaya2);
// dataSaya2.printDataNama(dataSaya2.nama, dataSaya2.umur);


function printData2() {
    nama = 'John Doe 3';
    umur = 20;

    console.log(this.nama);
}

printData2();

// function printData3 = () => {
//     console.log(this);
// }


//  class printDataClass{
//      constructor(){
//          nama = 'John Doe 4';
//          umur = 20;
//      }

//          printDataNama3 = () => {
//              console.log(this.nama)        
//          }

//  }