# React/Redux Budget Tracker

A bare bones react starter set of files

## Setup

```
npm install
```
```
npm run build
```
> `run build` has been modified to watch for changes.
```
npm start
```
# Step 1
Create ExpenseEntries folder with ExpenseEntries.jsx and index.js inside component with a class name danger.

# Step 2 
Create IncomeEntries folder with ExpenseEntries.jsx and index.js inside component with a class name success.

# Step 3 
Create Summary folder with Summary.jsx and index.js inside component.

# Step 4
Create a file named rootReducer.js and rootStore.js.

# Step 5
Update App.js with new imports and add IncomeEntries, ExpenseEntries and Summary.

# Step 6
To make it easier them easier to import in the index.js of each component simply import and export default the same component. This file will have more later, but for now it allows us to shorten our import path from './components/IncomeEntries/IncomeEntries' to './components/IncomeEntries'.

# Step 7
Now that we have our components separated we can update the app.jsx file to use them.

# Step 8
Now here normally we would have to npm install redux rect-redux, but I've included it already.

We need to create the store and attach any middleware. In this case the only middleware we'll use is the Redux DevTools. By attaching it as middleware the Redux DevTools will be able to see all the changes that pass through the Store.

Also note for now, since we haven't created any reducers we need an empty temporary one.

# Step 9
In order for React to make use of the store we'll need to use a special connect() function later. And for that connect() function to work we need to wrap our <App/> in the <Provider> component.

# Step 10
The Provider will provide the store to the connect() function using some of the more complex layers of React called the context.

Again, at this point the application isn't going to look any different.

# Step 11
Now that our store is working and connected to React, we need to create and connect our reducers. These will define how the Actions affect or change the store.

Since input to our application is only coming from the two Entries components we only need to create reducers for those components.

This file should either live in the same directory as the component or it could be in it's own directory if it doesn't have a matching component.

In the file we also need to create a default state for the part of the Store this reducer is responsible for. Since this component has two input fields we'll need two properties with empty strings, and of course we'll start with an empty list (array) of line Items.

# Step 12
Again for IncomeEntries/incomeReducer.js we can use the exact same code just changing the name from expense to income. And making sure it's in the correct directory.

Now that we have some reducers and we need to combine them, because the store ultimately only accepts one reducer.

# Step 13
And we need to update the store to use our new reducer.

# Step 14
Next we need a way to create the actions that the reducer needs to change the store.

Remember that Actions are just objects that describe a change, we'll have our action adhere to the Flux Standard Action pattern.

An FSA action should have at minimum a type and a payload.

The type and payload are used by the reducer to identify and modify the state.

# Step 15
The goal of actions is to predefine all state changes, but the text of that example could be any user input. So we need a way to dynamically create actions, hence Actions Creators.

Action Creators are just functions that return Actions, simple.

Create a file next to the expenseEntries component called expenseActions.js.

In the actions file we're going to create our action types and the action creators. We'll export the action types in order to reuse them in the reducer.

# Step 16
Now that we have an idea of what our actions are going to be we can update the reducers to use those actions.

We'll import the types from the actions file. And to the reducer functions we will add a switch-case statement that will return a different state based on the action that come in.

# Step 17
Again, you can copy both files for the IncomeEntries component, just changing the names.

# Step 18
Now we can finally start connecting the individual components.

We'll use the connect() function from the react-redux library. This will allow us to translate data from the store to the props of the component.

# Step 19
Finally we can update the components themselves to start using all these pieces.

In addition to pushing the store to props, connect() also pushed the store's dispatch method as a prop. Dispatch is the function that we pass actions to, in order to change the store.

# Step 20
There are quite a few changes in this file, take your time to go through each line to understand how the data is going to flow using all that you've learned so far.

To recap the LifeCycle of the React-Redux implementation:

Element's onChange fires the handleChange method
          HandleChange dispatches an action-created action
            A Reducer catches the action and updates the store
              connect() function updates a component by it's props
                The component rerenders and now reflects the new state.

# Step 21
You'll note that we never created a place in the store for the Summary component. This is not usually the case with patterns like MVC. That's because all the data needed to calculate the summary is in the line items in income and expense. In other words we can derive the information from existing data.

Let's start by updating the Summary component's index.js.

# Step 22
Now let's use the lineItems as props to calculate the final tallies.

# Step 23
