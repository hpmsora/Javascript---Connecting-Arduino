void setup() {
  Serial.begin(9600);

}

void loop() {
  //int potentiometer = analogRead(A0);
  //int mappedPot = map(potentiometer, 0, 1023, 0, 255);
  int mappedPot = random(1, 10);
  Serial.println(mappedPot);
  Serial.write(mappedPot);
  delay(100);  

}
