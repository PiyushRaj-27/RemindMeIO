RemindMeIO
==========
Repository for internship at Innovate

RemindMeIO is a web app that helps you stay on top of important events like birthdays, anniversaries, and more. Built with Next.js, TypeScript, ESLint, TailwindCSS, and Firebase, RemindMeIO ensures you never miss a moment!

Getting Started
---------------

Follow these steps to set up the project locally from GitHub.

### Prerequisites

-   Node.js (v14.x or later)
-   npm (v6.x or later) or Yarn (v1.x or later)
-   Firebase account and project set up

### Installation

1.  **Clone the repository:**

    `git clone https://github.com/yourusername/RemindMeIO.git
    cd RemindMeIO`

2.  **Install dependencies:**

    Using npm:

    `npm install`

    Or using Yarn:

    `yarn install`

3.  **Set up Firebase:**

    -   Go to the Firebase Console.

    -   Create a new project or use an existing project.

    -   In your project, navigate to **Project Settings** and then to the **Service accounts** tab.

    -   Generate a new private key and save the JSON file.

    -   Create a `.env.local` file in the root of your project and add your Firebase configuration:

        `NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key`
        
        `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain`
        
        `NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id`
        
        `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket`
        
        `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id`
        
        `NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`

4.  **Run the development server:**

    Using npm:

    `npm run dev`

    Or using Yarn:

    `yarn dev`

5.  **Open your browser and navigate to:**

    `http://localhost:3000`

    You should now see the RemindMeIO app running locally.

### Linting

To lint the project using ESLint, run:

Using npm:

`npm run lint`

Or using Yarn:

`yarn lint`

### Building for Production

To build the project for production, run:

Using npm:

`npm run build`

Or using Yarn:

`yarn build`

### Deployment

You can deploy the app using any platform that supports Next.js, such as Vercel or Firebase Hosting. Follow their respective documentation for deployment steps.

Contributing
------------

We welcome contributions! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

License
-------

This project is licensed under the MIT License. See the LICENSE file for more information.

Contact
-------

If you have any questions or feedback, please reach out to us at [piyushraj.270203@gmail.com].

Happy reminding with RemindMeIO! 🎉

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
