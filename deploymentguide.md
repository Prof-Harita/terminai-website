# Deployment Guide: CI/CD with Google Cloud Run & GitHub Actions

This guide details how to set up an automated deployment pipeline. Every time you push code to the `main` branch on GitHub, your website will automatically rebuild and deploy to Google Cloud Run.

## Prerequisites

1.  **Google Cloud Platform (GCP) Account**: You need an active billing account (you have credits).
2.  **GitHub Repository**: Your code must behttps://console.cloud.google.com/run/domains?project=terminhttps://console.cloud.google.com/run/domains?project=terminai-webai-web&authuser=1 hosted on GitHub.
3.  **Cloudflare Account**: For domain management (`terminai.org`).

---

## Phase 1: Google Cloud Setup

### 1. Create Project & Enable APIs

1.  Go to the [GCP Console](https://console.cloud.google.com/).
2.  Create a new project (e.g., `terminai-web`).
3.  Open the **Cloud Shell** (terminal icon in top right) or use your local terminal if `gcloud` is installed.
4.  Run these commands to enable necessary services:
    ```bash
    gcloud services enable run.googleapis.com \
        artifactregistry.googleapis.com \
        cloudbuild.googleapis.com \
        iamcredentials.googleapis.com
    ```

### 2. Create Artifact Registry

This is where your Docker images will be stored.

1.  Run the following command:
    ```bash
    gcloud artifacts repositories create terminai-repo \
        --repository-format=docker \
        --location=us-central1 \
        --description="Terminai Website Docker Repo"
    ```

### 3. Create a Service Account for GitHub

We need a special "robot account" that GitHub uses to talk to Google Cloud.

1.  **Create the account**:
    ```bash
    gcloud iam service-accounts create github-deployer \
        --display-name="GitHub Actions Deployer"
    ```
2.  **Grant Permissions**:
    Run these commands one by one to give it power to deploy:

    ```bash
    # Variable for your project ID
    export PROJECT_ID=$(gcloud config get-value project)

    # 1. Allow it to push Docker images
    gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member="serviceAccount:github-deployer@$PROJECT_ID.iam.gserviceaccount.com" \
        --role="roles/artifactregistry.writer"

    # 2. Allow it to deploy to Cloud Run
    gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member="serviceAccount:github-deployer@$PROJECT_ID.iam.gserviceaccount.com" \
        --role="roles/run.admin"

    # 3. Allow it to act as a service user (deployment requirement)
    gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member="serviceAccount:github-deployer@$PROJECT_ID.iam.gserviceaccount.com" \
        --role="roles/iam.serviceAccountUser"
    ```

### 4. Transform Service Account into a Key (Credentials)

GitHub needs a specific text block (JSON key) to log in.

1.  Generate the key file:
    ```bash
    gcloud iam service-accounts keys create gcp-key.json \
        --iam-account=github-deployer@$PROJECT_ID.iam.gserviceaccount.com
    ```
2.  **Copy the content**: View the file (`cat gcp-key.json`) and copy the **entire** JSON content. You will need this for GitHub.
3.  _Security Note_: Delete this file from your computer after the next step.

---

## Phase 2: GitHub Configuration

1.  Go to your GitHub Repository.
2.  Click **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Add the following secrets:
    - **Name**: `GCP_PROJECT_ID`
      - **Value**: Your project ID (e.g., `terminai-web-12345`).
    - **Name**: `GCP_SA_KEY`
      - **Value**: Paste the entire content of the `gcp-key.json` file you copied.

---

## Phase 3: Create the Workflow File

You need to tell GitHub what to do. Create a file in your repository at `.github/workflows/deploy.yml` with the contents provided in the repository (I will create this for you in the next step).

**What the workflow does:**

1.  Checks out your code.
2.  Authenticates with Google using the `GCP_SA_KEY`.
3.  Builds the website into a Docker container.
4.  Pushes the container to Google Artifact Registry.
5.  Deploys that container to Cloud Run.

---

## Phase 4: Cloudflare DNS (The Final Check)

Once the GitHub Action runs successfully for the first time, Cloud Run will generate a URL.

1.  Go to [Cloud Run Console](https://console.cloud.google.com/run).
2.  Click your service (`terminai-website`).
3.  Copy the URL (e.g., `https://terminai-website-xyz.a.run.app`).
4.  Go to **Cloudflare Dashboard** > **DNS**.
5.  Add a `CNAME` record:
    - **Name**: `@` (or `www`)
    - **Target**: `terminai-website-xyz.a.run.app` (remove https://)
    - **Proxy**: On (Orange Cloud).
6.  Save.

Your site is now live and will auto-update whenever you push to GitHub!
