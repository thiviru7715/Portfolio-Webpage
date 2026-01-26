# NexAttend - AI-Based Multi-Face Recognition & Classroom Management System

> **Automating attendance, ensuring security, and boosting engagement in modern education.**

![NexAttend Banner](src/assets/images/logo.png) ## 📋 Abstract
NexAttend is a cutting-edge **AI-based multi-face recognition attendance and classroom management system** designed to modernize educational institutions. [cite_start]Unlike traditional manual roll-call or single-student biometric scans, NexAttend uses **MTCNN** and **DeepFace** to detect and identify multiple students simultaneously from a single webcam frame[cite: 35, 36].

[cite_start]The system integrates real-time attendance tracking with anomaly detection (anti-spoofing), analytics dashboards, and gamification elements to create a secure and engaging classroom environment[cite: 36, 37].

---

## 🚀 Key Features

* [cite_start]**🤖 Multi-Face Recognition:** Detects and identifies multiple students in a single frame using **MTCNN** (detection) and **DeepFace** (recognition)[cite: 136, 137].
* [cite_start]**🛡️ Anomaly Detection:** automatically flags unknown faces, low-confidence matches, and potential spoofing attempts[cite: 141].
* **📊 Dual Dashboards:**
    * [cite_start]**Teacher Dashboard:** Start sessions, view live analytics, and manage class records[cite: 179].
    * [cite_start]**Student Dashboard:** View personal attendance history, engagement scores, and notifications[cite: 181].
* [cite_start]**📈 Smart Analytics:** Visualizes attendance trends and participation data using interactive charts[cite: 185].
* [cite_start]**📧 Automated Notifications:** Sends email alerts to students regarding their attendance status (Present/Absent/Late)[cite: 183].
* [cite_start]**🏆 Gamification:** precise motivational scoring (e.g., attendance points) to encourage consistent participation[cite: 184].

---

## 🛠️ Technology Stack

[cite_start]The project follows a **Microservices / Layered Architecture**[cite: 147].

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js, Vite, TailwindCSS | [cite_start]Responsive Web Interface [cite: 189] |
| **Backend** | Node.js, Express.js | [cite_start]API Gateway & Business Logic [cite: 147] |
| **AI Service** | Python, Flask, OpenCV | [cite_start]Face Recognition Engine (MTCNN + DeepFace) [cite: 147] |
| **Database** | MongoDB Atlas | [cite_start]Cloud Data Storage for users & logs [cite: 147] |
| **Containerization** | Docker | Service orchestration (Recommended) |

---

## 📂 Project Structure

```text
NexAttend-System/
├── ai-service/          # Python Service (MTCNN + DeepFace)
├── backend/             # Node.js API & Database Logic
├── database/            # Seeding scripts & DB config
├── frontend/            # React Web Application
├── docker-compose.yml   # Orchestration for all services
└── README.md            # Project Documentation
