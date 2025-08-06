# Medical Sample Collection Backend

This project is a backend application built with Node.js, Express, TypeScript, and MongoDB (Mongoose) to manage the lifecycle of medical sample collection between hospitals and labs. It facilitates scheduling pickups, tracking sample collections, and managing agent-hospital relationships.

## Features

1. **Add a New Sample**: Allows agents to add diagnostic samples with details such as patient name, agent ID, hospital ID, and scheduled pickup time.
2. **Mark Sample as Collected**: Agents can mark samples as collected once they have been picked up.
3. **Fetch Samples Assigned to an Agent**: Agents can retrieve all samples assigned to them, with optional filtering by status.
4. **Report Delays**: Agents can report delays in sample pickups, providing a reason and expected delay in minutes.
5. **JWT-based Authentication**: Implemented for agent login and route protection.

## Project Structure

```
medical-sample-backend
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── types
│   ├── utils
│   └── app.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd medical-sample-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and fill in the required environment variables.

### Running the Application

To start the application in development mode, use the following command:
```
npm run dev
```

### API Endpoints

- **POST /api/samples**: Add a new sample.
- **PATCH /api/samples/:id/collected**: Mark a sample as collected.
- **GET /api/samples/agent/:agentId**: Fetch all samples assigned to an agent.
- **POST /api/delays**: Report a delay on a sample pickup.
- **POST /api/auth/login**: Agent login to receive a JWT token.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.