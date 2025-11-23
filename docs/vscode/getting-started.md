
const  int IedPins[8] = {2, 4, 5, 18, 19, 21 ,22 ,23};

void look() {

for ( int i = 0 ; i < 8 ; i++){
pinMode(ledPins[i],output);
digitalWriter(ledPins[i], LOW);
}
}

VOID LOOP(){

FOR ( INT I = 0; I < 8; I++){
DIGITALWRITE(LEDPINS[I], HIGH);
DELAY(80);
DIGITALWRITE(LEDPINS[I], LOW);
}
DELAY(80);
}
