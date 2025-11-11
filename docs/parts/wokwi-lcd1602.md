#include
// Inisialisasi LCD dengan alamat I2C 0x27 dan ukuran 16x2
LiquidCrystal_I2C lcd(0x27, 16, 2);
// Daftar lirik yang akan ditampilkan di LCD
const char* daftarLirik[]={
"Tanteee",
"Sudah Terbiasa",
"Terjadi Tante",
"Teman Datang",
"Ketika Lagi",
"Butuh Sajaaa",
"Coba Kalo",
"Lagi Susahh",
"Mereka Semua",
"Menghilaaangg",
"aangggg",
"aangggg",
"Tante"
"eee",
"eee",
};
// Variabel untuk menyimpan lirik yang sedang ditampilkan
int indeksLirikSaatIni=0;
// Menghitung jumlah lirik yang ada
const int jumlahLirik = sizeof(daftarLirik)/sizeof(daftarLirik[0]);
void setup() {
lcd.init(); // Menginisialisasi LCD agar siap digunakan
lcd.backlight(); // Menyalakan lampu latar (backlight) pada LCD
}
void loop(){
lcd.clear(); //Membersihkan layar LCD
lcd.setCursor(0,0); // Mengatur kursor ke awal lagi
lcd.print(daftarLirik[indeksLirikSaatIni]); // Menampilkan lirik saat ini
indeksLirikSaatIni++; // Pindah ke lirik berikutnya
if (indeksLirikSaatIni >= jumlahLirik) {
indeksLirikSaatIni=0;
}
delay(1350); // Jeda sebelum menampilkan lirik berikutnya
}
