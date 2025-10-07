#include "IRremote.h"
#include <Servo.h>
Servo myservo;
#include <Stepper.h>

const int stepsPerRevolution = 1024;  
const int rolePerMinute = 15;        
Stepper myStepper(stepsPerRevolution, 7, 6, 5, 4);
const int GND_PIN = 8;
int receiver = 11; // Signal Pin of IR receiver to Arduino Digital Pin 11
int analogInPin = A0;
int analogValue = 0;
int led = 13;

IRrecv irrecv(receiver);     // create instance of 'irrecv'
decode_results results;      // create instance of 'decode_results'


/*-----( Function )-----*/
void translateIR() // takes action based on IR code received
// describing Remote IR codes
{
  switch(results.value)
  {
  case 0xFFA25D: ;
  break;
  case 0xFFE21D: Serial.println("FUNC/STOP"); break;
  case 0xFF629D: Serial.println("VOL+"); break;
  case 0xFF22DD: Serial.println("FAST BACK");    break;
  case 0xFF02FD: Serial.println("PAUSE");    break;
  case 0xFFC23D: Serial.println("FAST FORWARD");   break;
  case 0xFFE01F: MoverPiernaatras();    break;
  case 0xFFA857: Serial.println("VOL-");    break;
  case 0xFF906F: MoverPierna();    break;
  case 0xFF9867: Serial.println("EQ");    break;
  case 0xFFB04F: Serial.println("ST/REPT");    break;
  case 0xFF6897: Serial.println("0");    break;
  case 0xFF30CF: Serial.println("1");    break;
  case 0xFF18E7: Serial.println("2");    break;
  case 0xFF7A85: Serial.println("3");    break;
  case 0xFF10EF: Serial.println("4");    break;
  case 0xFF38C7: Serial.println("5");    break;
  case 0xFF5AA5: Serial.println("6");    break;
  case 0xFF42BD: Serial.println("7");    break;
  case 0xFF4AB5: moverMotorOjosDerecha();    break;
  case 0xFF52AD: moverMotorOjosIzquierda();    break;
  case 0xFFFFFFFF: Serial.println(" REPEAT");break;  
  default:
    Serial.println(" other button   ");
  }// End Case
  delay(0); // Do not get immediate repeat
} //END translateIR

void moverMotorOjosIzquierda() {
    myservo.write(70);// move servos to center position -> 0°
  delay(0);
}

void moverMotorOjosDerecha() {
    myservo.write(50);// move servos to center position -> 0°
  delay(0);
}


void MoverPierna(){
  digitalWrite(GND_PIN, LOW);
    myStepper.step(stepsPerRevolution);
  delay(1000);
  digitalWrite(GND_PIN, HIGH);
}

void MoverPiernaatras(){
  myStepper.step(-stepsPerRevolution);
  delay(1);
}

void setup()   /*----( SETUP: RUNS ONCE )----*/
{

  myStepper.setSpeed(rolePerMinute);
  pinMode(GND_PIN, OUTPUT); // Configura el pin como salida
  pinMode(led, OUTPUT);
  myservo.attach(9);
  myservo.write(90);
  Serial.begin(9600);
  Serial.println("IR Receiver Button Decode");
  irrecv.enableIRIn(); // Start the receiver

}/*--(end setup )---*/


void loop(){
  if (irrecv.decode(&results)) // have we received an IR signal?
  {

    translateIR();
    irrecv.resume(); // receive the next value
  }  

  //Esta línea de código va a darle indicaciones a los leds y al sensor de luz, cuando encenderse y cuando apagarse
    analogValue = analogRead(analogInPin);
  Serial.println(analogValue);
  delay(10);
  if (analogValue < 5) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
 }

  
