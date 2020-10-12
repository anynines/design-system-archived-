<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <img src="https://user-images.githubusercontent.com/61698985/95465564-99268d00-097b-11eb-8443-4e27d0252fae.png" />
</p>

----

`design_system` is the central repository to manage our UI components. This should lead to a straight forward separation of concerns, so that UI logic keeps within the component library and business logic will be added in the actual application. This way we can guarantee a specific degree of consistency across all our applications, rapidly speed up our development process of frontend applications and even achieve a high degree of customization by overwriting the theme object.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Install from the command line:

```sh
yarn install @anynines/design-system
```

Install via package.json:

```sh
"@anynines/design-system": "^0.1.0"
```

## Development

Clone the GitHub Repo locally, then run

```sh
yarn install
```

Run this to build the package (before an update in external repo), important after changing components or other configurations:

```sh
yarn build
```

## Testing

In the project directory, you can run:

Run this to start the storybook application

```sh
yarn storybook 
# or
yarn sb
```

Run this to ensure it is correctly packaged

```sh
yarn start
```

Run this to start the Test Suite

```sh
yarn test
```

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Production

It automatically deploys the design_system if you <b>push a commit on the master-branch.</b>

For a manual Deployment you need to build the application first with

```sh
yarn build
```

Check if the `dist` Folder has the completed build in it (should include all Components). Only the dist-folder needs to be deployed (if you want to add a folder to the deployment you need to add those in the `package.json` in the `files-array`).

If your test-suite is also okay you can publish the build via

```sh
yarn publish
```

## Learn More

You can learn more in the [Parcel documentation](https://en.parceljs.org/getting_started.html).

To learn React, check out the [React documentation](https://reactjs.org/).
