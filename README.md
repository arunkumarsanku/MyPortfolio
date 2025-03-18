# Project Name
MyPortfolio
## Description
A brief introduction of Myself,the Technologies i am familiar with and Implementations of real time projects 

## Technologies Used
- React.js - Frontend framework
- Vite - Build tool
- Tailwind CSS - Styling
- Git - Version control

## Project Structure
```
MyPortfolio/
├── src/
│   ├── components/
│   ├── pages/ 
│   └── styles/
├── public/
└── package.json
```

## CI/CD Pipeline
This project uses GitHub Actions for continuous integration and deployment:

### Workflow
1. Code changes pushed to main branch trigger the pipeline
2. Build job runs automatically
3. On successful build, deployment to production

### Pipeline Steps
```yaml
- Lint code
- Build application
- Deploy to hosting platform
```

### Deployment
The application is deployed automatically to:
- Production: On merge to main branch via GitHub Pages


## Installation

Follow these steps to set up the project locally.
### 1. Clone the repository
```bash
git clone https://github.com/arunkumarsanku/MyPortfolio.git
cd MyPortfolio
```
### 2.install dependicies
```bash 
npm install
```
### 3.To run locally
```bash
 npm run dev