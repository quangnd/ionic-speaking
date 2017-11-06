import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locale: string = "en-GB";
  speed: number = 150;
  textToSpeak: string;
  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
    console.log(this.speed);
  }

  speak() {
    this.tts.speak({
      text: this.textToSpeak,
      locale: this.locale,
      rate: this.speed / 100
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

}
