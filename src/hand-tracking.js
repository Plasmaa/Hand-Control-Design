import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export class HandTracker {
    constructor(videoElement, onResults) {
        this.videoElement = videoElement;
        this.onResultsCallback = onResults;
        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults(this.onResults.bind(this));

        this.camera = new Camera(this.videoElement, {
            onFrame: async () => {
                await this.hands.send({ image: this.videoElement });
            },
            width: 640,
            height: 480
        });
    }

    start() {
        this.camera.start();
    }

    onResults(results) {
        let state = {
            expansion: 1.0,
            tension: 0.0,
            handsDetected: 0
        };

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            state.handsDetected = results.multiHandLandmarks.length;

            // Calculate expansion (distance between hands)
            if (state.handsDetected === 2) {
                const hand1 = results.multiHandLandmarks[0][9]; // Middle finger MCP
                const hand2 = results.multiHandLandmarks[1][9];

                // Simple distance in screen space (x, y)
                const dx = hand1.x - hand2.x;
                const dy = hand1.y - hand2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Map distance to expansion factor (approx 0.1 to 0.8 range usually)
                state.expansion = 1.0 + (dist * 2.0);
            }

            // Calculate tension (average closure of hands)
            let totalClosure = 0;
            results.multiHandLandmarks.forEach(landmarks => {
                // Distance between wrist (0) and middle finger tip (12)
                const wrist = landmarks[0];
                const tip = landmarks[12];
                const dx = wrist.x - tip.x;
                const dy = wrist.y - tip.y;
                const dz = wrist.z - tip.z; // Z is relative depth
                const len = Math.sqrt(dx * dx + dy * dy + dz * dz);

                // Open hand is approx 0.2-0.3, closed is < 0.1
                // Normalize: 0 (open) to 1 (closed)
                // This is a rough approximation, can be tuned
                const closure = Math.max(0, Math.min(1, (0.25 - len) * 5));
                totalClosure += closure;
            });

            state.tension = totalClosure / state.handsDetected;
        }

        this.onResultsCallback(state);
    }
}
