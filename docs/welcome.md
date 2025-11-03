// Çocuk-Alarm: Basit prototip
#include <Wire.h>
#include "RTClib.h"       // Adafruit RTClib veya uygun kütüphane
#include <Adafruit_SSD1306.h> // Opsiyonel - ekran için

RTC_DS3231 rtc;

const int piezoPin = 9;   // PWM çıkışı / tone()
const int potPin = A0;    // Frekans ayarı (opsiyonel)
const int setBtn = 2;     // alarm set butonu (basit)
const int upBtn = 3;
const int downBtn = 4;

int alarmHour = 7; // örnek alarm: 07:00
int alarmMinute = 0;
bool alarmArmed = true;

void setup() {
  Serial.begin(115200);
  Wire.begin();
  rtc.begin();
  pinMode(piezoPin, OUTPUT);
  pinMode(setBtn, INPUT_PULLUP);
  pinMode(upBtn, INPUT_PULLUP);
  pinMode(downBtn, INPUT_PULLUP);

  // Eğer RTC zamanı ayarlı değilse zaman ayarla (sadece ilk kurulumda)
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
}

void loop() {
  DateTime now = rtc.now();
  // Basit arayüz: set butonuna basınca alarm toggle
  if (digitalRead(setBtn) == LOW) {
    delay(150);
    alarmArmed = !alarmArmed;
    while(digitalRead(setBtn)==LOW) delay(10);
  }
  // Saat ayarı (örnek)
  if (digitalRead(upBtn) == LOW) { alarmHour = (alarmHour+1)%24; delay(200); }
  if (digitalRead(downBtn) == LOW) { alarmHour = (alarmHour+23)%24; delay(200); }

  // Saat karşılaştırma
  if (alarmArmed && now.hour() == alarmHour && now.minute() == alarmMinute && now.second() == 0) {
    playChildTone();
    delay(1000); // tekrarları önlemek için kısa bekle
  }

  delay(200);
}

void playChildTone() {
  // Pot ile frekans ayarı: pot 0..1023 => 16000..20000 Hz
  int pot = analogRead(potPin);
  int freq = map(pot, 0, 1023, 16000, 20000); // 16-20 kHz arası
  int repeats = 3;
  int duration_ms = 5000; // 5 saniye
  for (int r = 0; r < repeats; r++) {
    tone(piezoPin, freq);
    delay(duration_ms);
    noTone(piezoPin);
    delay(1000); // 1 saniye aralık
  }
}
