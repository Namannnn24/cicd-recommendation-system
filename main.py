from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow the React frontend to communicate with this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RepoRequest(BaseModel):
    url: str

@app.post("/api/analyze")
async def analyze_repository(request: RepoRequest):
    url = request.url.lower()
    
    # Simulating the ML Classification Logic
    if "java" in url or "spring" in url or "boot" in url:
        detected_tech = "Java (Maven)"
        workflow_yaml = """name: Optimized Java CI

on:
  push:
    branches: [ "main", "master" ]
  pull_request:
    branches: [ "main", "master" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven # Optimal caching recommendation
        
    - name: Build and Test with Maven
      run: mvn -B package --file pom.xml
      
    - name: Upload Test Artifacts
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-reports
        path: target/surefire-reports/
"""
    elif "python" in url or "django" in url or "flask" in url:
        detected_tech = "Python"
        workflow_yaml = """name: Optimized Python CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v3
      with:
        python-version: "3.10"
        cache: 'pip' # Optimal caching recommendation
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install flake8 pytest
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    - name: Run Tests
      run: pytest
"""
    else:
        detected_tech = "Node.js / Generic"
        workflow_yaml = """name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js 18.x
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
"""

    return {
        "status": "success",
        "detected_technology": detected_tech,
        "recommended_workflow": workflow_yaml,
        "message": f"Successfully analyzed repository and generated optimal pipeline for {detected_tech}."
    }

# To run: uvicorn main:app --reload