import { Component, NgZone, OnInit, Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  public tempWords: any;
  public transcriptArr: string[] = [];
  public confidenceArr: number[] = [];
  public wordFrequency: { [key: string]: number } = {};
  private recognitionDuration = 10000;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // this.enterFullScreen();
    this.startRecording();
    // this.startListening();

    this.myfunction();

    //if user exit from full screen detect that event
    document.addEventListener('fullscreenchange', this.onFullScreenChange);
  }

  //start accessing audio and video
  private startRecording() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Handle video stream
        const videoElement = document.getElementById(
          'userVideo'
        ) as HTMLVideoElement;
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.muted = true; // Mute the audio to prevent it from playing back
          videoElement.play();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //start full screen automatically
  private enterFullScreen() {
    const element = document.documentElement; // Full-screen for the entire document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else {
      console.error('Fullscreen API is not supported in this browser.');
    }
  }

  // Event listener for detecting when full-screen mode changes
  private onFullScreenChange = () => {
    // If full screen is exited, redirect to the home page
    if (!this.isFullScreen()) {
      window.location.href = '/'; // Redirect to the home page
    }
  };

  //check the fullscreen is enabled or not
  private isFullScreen = (): boolean => {
    return !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    );
  };

  // *****************************************************************************
  //audio to text
  // private startListening() {
  //   const SpeechRecognition =
  //     (window as any).SpeechRecognition ||
  //     (window as any).webkitSpeechRecognition;
  //   if (!SpeechRecognition) {
  //     console.error('Speech Recognition API is not supported in this browser.');
  //     return;
  //   }
  //   this.recognition = new SpeechRecognition();

  //   this.recognition.continuous = true;
  //   this.recognition.interimResults = true;
  //   this.recognition.lang = 'en-US';

  //   // Event handler for when the speech recognition service returns a result
  //   this.recognition.onresult = (event: any) => {
  //     this.transcript = event.results[0][0].transcript; // Get the transcribed text
  //     console.log('Recognized Text:', this.transcript);
  //   };

  //   this.recognition.onresult = (event: any) => {
  //     this.ngZone.run(() => {
  //       console.log(event.results[0][0].transcript);
  //       this.transcript = event.results[0][0].transcript;
  //       // this.transcript += this.transcriptText + ' ';
  //     });
  //   };

  //   // Restart recognition on end
  //   this.recognition.onend = () => {
  //     console.log('Speech recognition stopped. Restarting...');
  //     this.recognition?.start(); // Automatically restart recognition
  //   };

  //   // Error handling
  //   this.recognition.onerror = (event: any) => {
  //     console.error('Speech recognition error:', event.error);
  //     if (event.error === 'no-speech' || event.error === 'network') {
  //       // You can handle specific errors and restart the recognition if needed
  //       this.recognition?.start(); // Restart in case of 'no-speech' error
  //     }
  //   };

  //   this.recognition.start();
  // }

  myfunction() {
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      let last = e.results.length - 1;
      let tempTranscript = e.results[last][0].transcript.trim(); // Trim to avoid unnecessary spaces

      // Only push unique words to avoid repeating
      if (!this.transcriptArr.includes(tempTranscript)) {
        this.transcriptArr.push(tempTranscript);
        this.updateWordFrequency(tempTranscript);

        // Concatenate transcript only if new words detected
        this.tempWords = Array.from(e.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript.trim())
          .join(' ');

        this.wordConcat();

      }
    });
    console.log(this.text, this.transcriptArr)
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.recognition.start();
      }
    });

    // Automatically stop recognition after the set duration
    setTimeout(() => {
      this.stop();
    }, this.recognitionDuration);
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
  }

  reinit() {
    this.transcriptArr = [];
    this.confidenceArr = [];
    this.wordFrequency = {};
    this.tempWords = '';
    this.text = '';
  }

  wordConcat() {
    if (this.tempWords) {
      this.text = this.text + ' ' + this.tempWords + '.'; // Concatenate recognized words
      this.tempWords = '';
    }
  }

  // Function to count word frequency
  updateWordFrequency(words: string) {
    let wordList = words.split(' ');
    wordList.forEach((word) => {
      word = word.toLowerCase(); // Case-insensitive comparison
      if (this.wordFrequency[word]) {
        this.wordFrequency[word]++;
      } else {
        this.wordFrequency[word] = 1;
      }
    });
  }
}
