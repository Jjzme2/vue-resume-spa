# How to build a static web application and host it on GitHub Pages, with a custom Domain.

## Introduction

This document will guide you through the process of building a static web application using Vue.js and hosting it on GitHub Pages. We will also cover how to set up a custom domain for your GitHub Pages site.

## Prerequisites

Before you begin, you will need to have the following:

- A GitHub account
- Node.js and npm installed on your computer
- A domain name that you want to use for your GitHub Pages site
- A basic understanding of Vue.js and how to build a static web application
- A basic understanding of how to use the command line
- A basic understanding of how to use Git/Github

## Guide

### Step 1: Create a new Vue.js project

First, you will need to create a new Vue.js project using the Vue CLI. If you don't already have the Vue CLI installed, you can install it by running the following command in your terminal:

```bash
npm install -g @vue/cli
```

Once you have the Vue CLI installed, you can create a new Vue.js project by running the following command in your terminal:

```bash
vue create my-vue-app
```

Replace `my-vue-app` with the name of your project.

### Step 2: Build your Vue.js application

Once you have created your new Vue.js project, you can start building your application. You can add new components, routes, and other features to your application as needed.

### Step 3: Deploy your Vue.js application to GitHub Pages

Once you have finished building your Vue.js application, you can deploy it to GitHub Pages by following these steps:

1. Add the `gh-pages` package to your project by running the following command in your terminal:

```bash
npm install --save-dev gh-pages
```

This will simplify the deployment process by automating the process of pushing your built application to the `gh-pages` branch of your GitHub repository.

2. Add a `deploy` script to your `package.json` file that will build your application and deploy it to GitHub Pages. Add the following line to your `package.json` file:

```json
"scripts": {
  "deploy": "vue-cli-service build && gh-pages -d dist"
}
```

This script will build your application using the Vue CLI and then deploy it to GitHub Pages using the `gh-pages` package.

3. Deploy your application to GitHub Pages by running the following command in your terminal:

```bash
npm run deploy
```

This will build your application and deploy it to GitHub Pages.

### Step 4: Set up a custom domain for your GitHub Pages site

Once you have deployed your application to GitHub Pages, you can set up a custom domain for your site by following these steps:

1. Go to the settings page of your GitHub repository and scroll down to the "GitHub Pages" section.
2. In the "Custom domain" section, enter the domain name that you want to use for your GitHub Pages site.
   - In my case, I used Squarespace to manage my domain name. This did cost me $12 for the first year, and $20 for the next year. GitHub Pages is free, but you will need to pay for your domain name.
   - You can also use a free domain name from GitHub Pages, but it will have the format `your-username.github.io`.
3. Once you have entered your domain name, click the "Save" button to save your changes.

### Step 5: Verify your custom domain

You might encounter an error saying that your domain is not properly configured. This is because you need to add a CNAME file to your repository. You can do this by following these steps:

1. Create a new file in the root of your repository called `CNAME`.
2. In the `CNAME` file, enter the domain name that you want to use for your GitHub Pages site.
3. Commit the `CNAME` file to your repository and push your changes to GitHub.
4. Wait a few minutes for your changes to take effect.

You will also need to configure your settings, note that this is for Squarespace, but you can use similar settings for other domain providers.

1. Go to the "Settings" page of your Squarespace account.
2. Click on "Domains" and then click on the domain name that you want to use for your GitHub Pages site.
3. Click on "DNS Settings" and then click on "Add a custom record".
   - You will need to delete the default records that Squarespace provides.
4. Create a Custom Record with the following settings:
	-
	| Record Type | Host | Points to |
	|-------------|------|-----------|
	| CNAME       | www  | your-username.github.io |
	| A		      | @    | 185.199.108.153<br/>185.199.109.153<br/>185.199.110.153<br/>185.199.111.153 |
	| AAAA		  | @    | 2606:50c0:8000:0:0:0:0:153<br/>2606:50c0:8001:0:0:0:0:153<br/>2606:50c0:8002:0:0:0:0:153<br/>2606:50c0:8003:0:0:0:0:153 |
	| TXT		  | <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages#:~:text=Add%20a%20DNS%20TXT%20record" target="_blank">GitHub Provided</a>  | <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages#:~:text=Add%20a%20DNS%20TXT%20record" target="_blank">GitHub Provided</a> |

### Step 6: Verify your custom domain

Once you have added the `CNAME` file to your repository and configured your domain settings, you can verify your custom domain by following these steps:

1. Go to the settings page of your GitHub repository and scroll down to the "GitHub Pages" section.
2. In the "Custom domain" section, you should see a message saying "Your site is published at `your-custom-domain.com`".
3. If you see this message, your custom domain has been successfully configured and you can now access your GitHub Pages site using your custom domain.
4. If you don't see this message, you may need to wait a few minutes for your changes to take effect.
5. If you still don't see this message after waiting, you may need to double-check your domain settings and make sure that everything is configured correctly.

Feel free to reach out to me if you have any questions or need further assistance with setting up a custom domain for your GitHub Pages site. I'm happy to help!





