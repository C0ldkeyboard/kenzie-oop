// const mobil = 
// {
//     merek : "inova zenix",
//     warna : "putih",
//     tahun : "2020",

//     nyalakanMesin : function() {
//         console.log("mesin di nyalakan");
        
//     }
// }
// console.log(mobil.merek);
// nyalakanMesin()

// function kendaraan() {
// console.log(mobil);

// }

// kendaraan()


class mobil {
    constructor(merek, warna,tahun){
this.merek = merek;
this.warna = warna;
this.tahun = tahun;
this.kecepatan = 0
    }
nyalakanmesin() {
    console.log(`mobil ${this.merek} di nyalakan`);   
}

jalankan() {
    this.kecepatan += 10
    console.log(`mobil ${this.merek} ${this.warna} berjalan dengan kecepatan ${this.kecepatan}km/h`);
    
}
}
const mobil1 = new mobil("inova", "hitam", "2025")
const mobil2 = new mobil("avanza", "grey", "2019")
// console.log(mobil1)
mobil1.nyalakanmesin()
mobil1.jalankan()
// console.log(mobil2)
mobil2.nyalakanmesin()
mobil2.jalankan()
