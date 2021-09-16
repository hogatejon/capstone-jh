# Overview

This is an app that a fishing charter business can use to maintain and keep track of different charters that they offer. They can add charters (groups) to predefined types of fishing (organizations).  Those charters contain a list of members that the user of the app can add/edit/delete.

More on the technical side, I created this app without the help of external UI Frameworks (Bootstrap, PrimeNG, etc.)  The solutions found may not be as elegant as they would be if implemented by one of those frameworks, but it made for a better learning experience forcing myself to implement things like modals and toast messages.  In the end: technologies used were:

  - Angular
  - RxJS (App uses Observables and Subjects extensively)

# How to Run

## Clone Repo
First, you must clone the repo into your preferred editor.
## How to Start Server
Once done cloning, follow these steps to start the 

1. Open a terminal and change directory into the server folder.
2. Type 'npm install' and wait for everything to download
3. Run 'node server.js' and the server should be up and running.

## How to run the FE

1. In another terminal instance, change directory into the client folder.
2. Type 'npm install' again and wait for the download to finish.
3. Then type 'ng serve' and wait for the app to boot.
4. Go to your browser and type localhost:4200 to navigate to the app

## On app open

There is a login component to the app, so you will need to log in.  A test user is: 

User Name: farmgirl
Password: farmgirl

You can also register a new user, and that will give you your own login to test from there.

## Overview on API

To understand the API, the basis is that there are three main groups of data being managed:

1. Organizations
2. Groups
3. Members

In my app, Organizations are the different types of fishing listed on the home screen, Groups are the different Charters, and members are the people registered to attend charters.

### GET Requests
- Get Organizations
  - localhost:8082/api/organizations
  - Gets all Organizations

- Get All Groups
  - localhost:8082/api/groups
  - Gets All Charters

- Get One Group By Id
  - localhost:8082/api/groups/:id
  - Pass in an id of the group and return one group based on the id

- Get All Groups by Organization
  - localhost:8082/api/groups/byorganization/:orgID
  - Get all groups by an orgId

- Get Specific member in a group
  - localhost:8082/api/groups/:groupId/members/:memberId
  - based on group id and member id returns a member

- User name Available
  - localhost:8082/api/username_available/:username
  - Returns **text not JSON** of YES or NO based on if the given user name is available.

### POST Requests
- Add a Group
  - localhost:8082/api/groups
  - Post to add a new group, hit the endpoint with the body defined below.
  ``` TS
  interface groupBody = {
    GroupName: string;
    OrganizationName: string;
    SponsorPhone: string;
    SponsorEmail: string;
    MaxGroupSize: number;
    SponsorName: string;
  }
  ```

- Add a Member to a Group
  - localhost:8082/api/groups/:id/members
  - Post to add a member based on a provided group id
  ``` TS
  interface memberBody = {
    MemberName: string;
    MemberEmail: string;
    MemberPhone: string;
  }
  ```

- Add a User
  - localhost:8082/api/users
  - Post to register a new user's login
  ``` TS
  interface registerBody = {
    name: string;
    username: string;
    password: string;
  }
  ```

- Request Login
  - localhost:8082/api/login
  - Post to request login as an existing user.
  ``` TS
  interface loginRequst = {
    username: string;
    password: string;
  }
  ```

### PUT Requests

- Edit a Member in a Group
  - localhost:8082/api/groups/:id/members
  - Based on a provided group id, add a member to the group
  ``` TS
  interface memberBody = {
    MemberName: string;
    MemberEmail: string;
    MemberPhone: string;
    MemberId: number;
  }
  ```

- Edit a Group
  - localhost:8082/api/groups
  - 
  ``` TS
  interface groupBody = {
    GroupName: string;
    OrganizationName: string;
    SponsorPhone: string;
    SponsorEmail: string;
    MaxGroupSize: number;
    SponsorName: string;
    GroupId: number;
  }
  ```

### DELETE Requests
- Delete a Group By GroupId
  - localhost:8082/api/groups/:id
  - Deletes a group based on the group id

- Delete a Member in a group
  - localhost:8082/api/groups/:groupId/members/:memberId
  - delete member based on both groupid and memberid


## Noteworthy Features

- Login/Register Functionality via the login/register endpoints mentioned above.
- Home Page that shows the different types of Charters available.
  - User can click directly on the tiles and be taken to a list that is filtered according to their selection (via route param so that deep linking works)
- Charters Page
  - User can view all of the available charters and filter based on text or a filter by type of fishing via a drop down.
  - User can add a Charter via a button at the top right. This pops up a modal with a form to add a charter.
  - User can Register a member directly on this page via the Register Button, navigate to a Details page with a breakdown list of members of the charter, or delete a charter.
- Charter Details Page
  - User can further drill down into the members assigned to a specific charter.
  - User can add/edit/delete members 
  - User Can edit Charter details
- Simple about page that describes the app. May move that into the Login page so that is the first thing seen.