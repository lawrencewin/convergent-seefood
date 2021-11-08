# Convergent SeeFood

Demo repository for AI-Tech tech workshops. Goal is to implement a simple React Native / Flask app that runs resnet trained on binary image classification of hotdogs.

## How to clone:

Clone this repo with `git clone https://github.com/lawrencewin/convergent-seefood.git`. Navigate to the repo folder on your local machine.

## Setting up the Front-End

1. Navigate to the `client` folder in this repo.

2. Run `npm install` in the `client` folder to install missing dependencies.

3. Run `npm start` to start the app.

## Setting up the Back-End

1. You will notice that the `api` folder is empty. To populate this, run two commands: `git submodule init` and `git submodule update`.

2. Navigate to the `api` folder. To install our python dependencies, we first need to create a python virtual environment. For this, run `python3 -m venv venv`. Activate the virtual environment with `source venv/bin/activate` (on Windows, this script will be different. consult a lead for help).

3. Install missing dependencies with `pip install -r requirements.txt`.

4. Run the flask server with `flask run`.