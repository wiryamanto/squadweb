// console.log("acil");

// penulisan array (1, 2, 3, 4, 5, 6, 7)
//  let mahasiswa = ["Acil",18, true];
//  console.log(mahasiswa[1]);

// array manual
// let hari=[];
// hari[0]="senin";
// hari[1]="selasa";
// hari[2]="rabu";
// hari[4]="kamis";
// console.log(hari);

// manipulasi array
// let hewan=["buaya", "kelinci", "kucing", "tikus"];
// console.log(hewan.join());

// push menambahkan data di index terakhir array
// hewan.push("buaya");
// console.log(hewan.join());


// pop menghapus data terakhir array
// hewan.pop();
// console.log(hewan);

// unshift menambahkan data di index awal array
// hewan.unshift("ikan", "kecoa");
// console.log(hewan);

// shift mengahapus data di index awal array
// hewan.shift();

// splice menambahkan data di tengah
// console.log(hewan.splice(2, 0, "jerapah", "kuda"));
// console.log(hewan);


// menampilkan panjang array
// let hewan=["buaya", "kelinci", "kucing", "tikus"];
// console.log(hewan.length);


// sort menyortir data
 let angka=[10, 20,3,6,2,4,8,1];
// angka.sort();
// console.log(angka);

// reduce
// let tambah=(a,b) => a+b;
// console.log(angka. reduce(tambah));

// object

// membuat object
// let mhs ={
//     nama : "acil",
//     kelas : "1A"
// };
// console.log(mhs);

// function declaration
// function buatObject(nama,kelas,nim){
//     let mahasiswa = {};
//     mahasiswa.nama=nama;
//     mahasiswa.kelas=kelas;
//     mahasiswa.nim=nim;
//     return mahasiswa;
// }

// let mhs2 = buatObject("Acil", "1A", "1234567");

// constructor
// function Mahasiswa(nama, nim, kelas, jurusan){
//     this.nama=nama;
//     this.nim=nim;
//     this.kelas=kelas;
//     this.jurusan;
// }

// let mhs3 = new Mahasiswa("Acil", 1234567, "1A", "Ti");
// manipulasi

// let namaObject = {
//     nama : "Acil",
//     nim : 12345,
//     kelas :"1A"
// }
//  console.log(namaObject);

// add
// namaObject.jurusan="teknik mblaur";
// console.log(namaObject);

// update
// namaObject.nama="Acil";
// console.log(namaObject);

// delete
// delete namaObject.kelas;
// console.log(namaObject);

// let orang = {
//     nama : "Acil", 
//     umur : 18,
//     sayHai : function() {
//         alert("hai nama saya : "+this.nama+" dan usia saya : "+this.umur)
//     }
// }

// function show(){
//     let error = true;
//     let bulan = ["januari","february","maret"]
//     if(){
//         console.log("error");
//     }else{
//         console.log(bulan.join("/n"));
//     }
// }
// show();
function show(){
    // let error = true;
    let bulan = ["januari","february","maret","juni","juli","agustus","september","oktober","november","desember"];
    if(bulan){
        console.log(bulan.join('\n'));
    }else{
        console.log("error");
    }
}
show()

//buatlah sebuah function yang berisi array nama bulan, kemudian tampilkan array tsb sbg string menggunakan pengkondisian if else

// let bulans = ["januari", "february", "maret","april","mei","juni","juli","agustus","september"];

// bulans.forEach(function(bulan){
// 	console.log(bulan);
// });

const namaBulan = () => {
    const Bulan = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December']
  
    Bulan.map((index) => typeof index === 'string' ? console.log('ini String ', index) : console.log('error'))
    // console.log(typeof (newBulan))
  }
  
//   console.log(namaBulan())