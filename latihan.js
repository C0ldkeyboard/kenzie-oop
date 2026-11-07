class siswa {
    constructor(nama,nis,jurusan){
        this.nama = nama;
        this.nis = nis;
        this.jurusan = jurusan;
    }
    perkenalanSiswa() {
        console.log(`Hai nama saya ${this.nama} dan saya dari jurusan ${this.jurusan}`);
        
    }
    nisnSiswa() {
        console.log(`NISN : ${this.nis}`);
        }
     tampilkandata() {
        return `| nama : ${this.nama} | nis : ${this.nis} | jurusan : ${this.jurusan} |`}
}
// const siswa1 = new siswa(document.getElementById("nama"), document.getElementById("nisn"), document.getElementById("jurusan") )
// const siswa2 = new siswa("Ajul", "918256", "TKJ")
// siswa1.perkenalanSiswa()
// siswa1.nisnSiswa()
// siswa2.perkenalanSiswa()
// siswa2.nisnSiswa()

const form = document.getElementById("forminput")
const list = document.getElementById("list")

form.addEventListener("submit", (dis) => {
    
dis.preventDefault()

const nama = document.getElementById("nama").value
const nisn = document.getElementById("nisn").value
const jurusan = document.getElementById("jurusan").value

const siswa1  = new siswa(nama, nisn, jurusan)

const li = document.createElement("li")
li.textContent = siswa1.tampilkandata()

list.appendChild(li)
``
form.reset()
})
