# Express.js Docker Test 🚀

A simple Node.js and Express.js application created to practice **Docker containerization**.

This project was used to learn how to create a Docker image, run an Express application inside a Docker container, and access the application through a browser.

## 🛠️ Technologies Used

* Node.js
* Express.js
* Docker
* Dockerfile
* Git & GitHub

## 📁 Project Structure

```text
express-docker-test/
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## 🐳 Docker Architecture

```text
Browser
   │
   ▼
Docker Container
   │
   ▼
Node.js + Express
   │
   ▼
Express Server
```

## ⚙️ Express Server

The Express server runs on port:

```text
3000
```

The application can be accessed through:

```text
http://localhost:3000
```

## 🐳 Dockerfile

The project uses a Dockerfile to create the application image.

Basic process:

```text
Dockerfile
    ↓
Docker Image
    ↓
Docker Container
    ↓
Express Application
```

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Open the project

```bash
cd express-docker-test
```

### 3. Build the Docker image

```bash
docker build -t express-docker-test .
```

### 4. Run the container

```bash
docker run -p 3000:3000 express-docker-test
```

### 5. Open in browser

Go to:

```text
http://localhost:3000
```

## 🛑 Stop the Container

Find the running container:

```bash
docker ps
```

Then stop it:

```bash
docker stop <container_id>
```

## 📚 What I Learned

This project helped me understand:

* What Docker is
* Docker images
* Docker containers
* Dockerfiles
* Docker port mapping
* Node.js with Docker
* Express.js with Docker
* Building and running Docker images
* Basic container management

## 👨‍💻 Author

**Pathum Nimesh Nimsara**

GitHub:
https://github.com/pathumnimsara
