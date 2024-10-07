import { Component } from '@angular/core';

@Component({
  selector: 'app-check-system',
  templateUrl: './check-system.component.html',
  styleUrls: ['./check-system.component.css'],
})
export class CheckSystemComponent {

  nextButton:boolean = false;
  ngOnInit() {
    this.getMediaPermissions();
    this.visualizeMic();
  }

  // Function to get both video and audio permissions
  getMediaPermissions() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Handle video stream
        const videoElement = document.getElementById(
          'videoElement'
        ) as HTMLVideoElement;
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.muted = true; // Mute the audio to prevent it from playing back
          videoElement.play();
        }

        // Update status to enabled
        document.getElementById('videoStatus')!.innerText = 'Video: Enabled';
        document.getElementById('audioStatus')!.innerText = 'Mic: Enabled';
        this.nextButton = true;
      })
      .catch((error) => {
        // Handle errors or denied access
        document.getElementById('error-message')!.innerText =
          'Error accessing media devices: ' + error.message;
        document.getElementById('error-message')!.classList.remove('hidden');
        document.getElementById('videoStatus')!.innerText = 'Video: Disabled';
        document.getElementById('audioStatus')!.innerText = 'Mic: Disabled';
      });
  }

  // Function to visualize microphone input
  visualizeMic() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioCtx = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);

        analyser.fftSize = 32;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        source.connect(analyser);

        const bar = document.getElementById('audioBar') as HTMLElement;

        const draw = () => {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          const width = Math.max(...dataArray); // Get the maximum value for the bar height
          bar.style.width = `${width}px`; // Set bar height dynamically based on sound input
        };

        draw();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }
}
