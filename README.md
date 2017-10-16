A simple reminder creator and deletion REACT/REDUX App, with local client storage for the state.

Using Bootstrap CSS.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To start, run `npm install` followed by `npm start`.

App code is in `src/constants.js`, `src/index.js` and in `src/actions/index.js, src/components/App.js, src/reducers/index.j`'.

While learning React, I found out that you don't have to build a
mapDispatchToProps() method, btw. There's a new short-hand way where you just
include the action-creators directly, as so:

`export default connect (mapStateToProps,
                         { addReminder, deleteReminder,
                           clearReminders }) (App);`

**Dependencies**

Using Moment for data/time stamp formatting and Sfcookies for local storage.  See package.json for more details.
