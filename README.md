# Express.js with TypeScript Server

## Project Overview

This project is a server built with **Express.js** using **TypeScript**. The server is designed to be scalable, maintainable, and efficient, utilizing **Redis** for caching and **MongoDB** as the database.

## Features

- **TypeScript**: Strongly typed language providing static type checking to reduce errors.
- **Redis**: Used for caching to improve performance and reduce load on the database.
- **MongoDB**: NoSQL database for storing and managing data.
- **ESLint**: Ensures consistent coding conventions and style across the project.
- **Winston**: Robust logging library for capturing and managing logs.
- **Jest**: Testing framework for writing and running tests.

------------------------------- Questions and Answers ----------------------------------

# Node JS Tracing, Testing, and Scalability

## Question 1: Tracing and Testing in Node JS

### a. Tracing in Node JS

**Answer:** Simple way to that, in the tracing process on Node JS is the process of diagnose application data performance and also it is pick out issues and debug related problems or logs. Also figure out execution time and memory status information and measure performance.

### Type of tracing:

- **Performance Diagnosis:** Tracing helps identify capacity of server usage in the application such as slow functions or memory leaks. Which can reason to decrease performance.

- **Debugging:** Most Cases, making it easier to locate and fix bugs under asynchronous flow.

### Tools and Techniques:

- **Node JS Built-in Tracing Flag --trace-events**
- **Chrome DevTools**
- **Add console.log line for instant detect response**
  Many other ways to trace and detect and debug project unit cased or rendered output.

### b. Test Pyramid in Node JS

### Test Pyramid

Simple way to say, Its a model that describes the different levels of testing required for a pre define testing strategy. It consists of three main levels:

- **Unit Tests:** Test each target function and process. Which need to get specific type of output. We used multiple library and tool such as popular one library is Jest.

- **Integration Tests:** These tests are in the middle of the pyramid and focus on interactions between different modules or services. They test how components work together.

- **End to End Tests:** At the top of the pyramid, these tests simulate user scenarios and validate the entire application stack, from the UI to the backend.

### Importance of Balance:

A balanced approach ensures that issues are caught early in the development process. Unit tests are fast and catch small errors.

## Question 2: Event Driven Architecture and Scalability in Node JS

### a. Clusters and Worker Threads in Node JS

- **Clusters:** Node.js is single threaded technology, but the Cluster module allows the application to be scaled across multiple CPU cores by creating child processes or worker that share the same server port. This helps distribute the load and improve performance.

- **Worker Threads:** Worker Threads provide a way to run JavaScript in parallel on multiple threads, separate from the main thread. This is useful for CPU intensive tasks and run event loop in thread.

### Use Cases:

- Useful for scaling web servers that need to handle many simultaneous requests.
- Ideal for CPU bound tasks like image processing and large data processing or complex calculations.

### b. Strategies for Managing High Request Services

- **Load Balancing:** Distribute incoming requests across multiple server instances.
- **Clustering:** Utilize Node JS clusters take advantage of multi core processors.
- **Event Loop Monitoring:** Monitor and optimize the event loop to avoid blocking it with long running tasks.
- **Caching:** Implement caching mechanisms to reduce the load. Redis is great option to store session based caches.

### Event Loop and Non Blocking:

The event loop is the core of Node JS continues running realtime connection model, enabling it to handle many important connections efficiently by IO operations to the operating system.

### c. Asynchronous vs Synchronous Functions in Node JS

- **Asynchronous Functions:** Do not block the event loop they allow other operations to continue while waiting for a task to complete. This improves the performance and scalability of Node JS applications, especially when we making realtime chat API's.

- **Synchronous Functions:** Block the event loop until the task is completed.

**Performance and Scalability Impact:** Asynchronous functions are preferred in Node JS because they allow the application to handle multiple tasks concurrently. Achieving to better scalability and performance.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/https://github.com/waqarkhan09099/vative_App_NodeJS_Task.git

   ```

2. **Switch to Project Directory**:

   ```bash
   cd vative_App_NodeJS_Task

   ```
3. **Install Dependencies**:

   ```bash
   npm install --save
   ```
4. **Unit Tests**:

   ```bash
   npm run test
   ```
4. **Start Project Server**:

   ```bash
   npm run start
   ```