# Python Subject at ELTE IK 🎓🐍

## Development 🚀

1. **Install Node.js** 📥: Ensure that you have Node.js installed on your system. You can download the latest version from the official Node.js website: https://nodejs.org/. Next.js requires Node.js version 12.0 or newer.

2. **Clone or download the project** 📁: If the project is hosted on a platform like GitHub, GitLab, or Bitbucket, clone the repository to your local machine using git clone `<repository-url>`. Alternatively, download the project as a ZIP file and extract it.

3. **Navigate to the project directory** 💻: Open a terminal or command prompt and navigate to the project directory using the cd command:
    ```bash
    cd path/to/python-lab
    ```

4. **Install dependencies** 🧰: Run the following command to install the project's dependencies:
    ```bash
    npm install
    ```

5. **Start the development server** 🚧: To start the development server, run the following command:
    ```bash
    npm run dev
    ```
    This command will start the development server on a default port, usually 3000. You can access your application by opening a web browser and navigating to http://localhost:3000.

6. **Lint your code** ✅: To check your code for potential issues and ensure that it follows best practices, you can run the built-in linter with the following command:
    ```bash
    npm run lint
    ```

7. **Build the application** 🏗️: To build the application for production, run the following command:
    ```bash
    npm run build
    ```
    This command generates an optimized build in the .next folder.

8. **Start the production server** 🌐: After building the application, you can start the production server with the following command:
    ```bash
    npm run start
    ```
    This command will start the production server on a default port, usually 3000. You can access your application by opening a web browser and navigating to http://localhost:3000.

---

## Deployment 🌍

1. **Build the application** 🏗️: To build the application for production, run the following command:
    ```bash
    npm run build
    ```
    This command generates an optimized build in the `.next` folder.

2. **Export the application** 📦: To export the application as a static site, run the following command:
    ```bash
    npm run export
    ```
    This command generates a static version of the application in the `out` folder.

3. **Deploy to GitHub Pages** 🌐: To deploy the application to GitHub Pages, you can use the `gh-pages` package.
    > Note: You can skip the first two steps if the `gh-pages` is already installed (default)
    
    1. First, install it as a development dependency:
        ```bash
        npm install --save-dev gh-pages
        ```
    2. Second, add the following scripts to your `package.json` file:
        ```json
        "scripts": {
        "predeploy": "npm run build && npm run export",
        "deploy": "gh-pages -d out"
        }
        ```
    3. Finally, run the following command to deploy the application:
        ```bash
        npm run deploy
        ```

    This command will create a new branch named `gh-pages` (or a "Updates" commit if it already exists) in your repository and upload the contents of the `out` folder to it.

----

You're all set!🚚 Have a great time coding and enhancing the ELTE IK Python subject website, and remember to adhere to best practices consistently! 🥳👩‍💻👨‍💻

