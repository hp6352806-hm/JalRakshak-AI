# JalRakshak AI

## Global Innovation Hackathon 2026 – Build for a Better Future

JalRakshak AI is an AI + IoT concept for detecting, locating and prioritizing water-pipeline leakage.

### Problem
Water losses from hidden pipeline leaks can remain undetected for long periods. Manual inspection is slow and does not continuously monitor pressure, flow and vibration patterns.

### Proposed Solution
IoT sensor nodes collect flow, pressure, vibration and acoustic data. An AI anomaly-detection layer compares current readings against normal patterns, estimates leak probability, identifies the most likely affected zone and provides a severity level and maintenance recommendation.

### Prototype Features
- Live sensor dashboard
- AI leak probability
- Pipeline zone visualization
- Estimated water loss
- Severity classification
- Maintenance recommendation
- Alert panel
- Simulated IoT data for demonstration

### Hardware for Future Deployment
- ESP32 / NodeMCU
- Flow sensor
- Pressure sensor
- Vibration sensor
- Acoustic sensor
- Wi-Fi / MQTT
- Cloud database/dashboard

### Run Locally
Open `index.html` in a modern browser.

### Demo
Click **Run AI Scan** to simulate a new AI analysis. The dashboard also refreshes automatically.

### Important
This is a hackathon prototype using simulated sensor data. Real deployment requires calibrated sensors, a trained/validated anomaly model, secure IoT communication and field testing.
