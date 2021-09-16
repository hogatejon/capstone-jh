# Overview

This is an app that a fishing charter business can use to maintain and keep track of different charters that they offer. They can add charters (groups) to predefined types of fishing (organizations).  Those charters contain a list of members that the user of the app can add/edit/delete.

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












## Project Ideas Brainstorming:

- 2 different types of users, admin vs. normal user
  - Admins can add, edit and delete organizations and events.
  - 

- Organizations: Type of fishing (Deep Sea, River, Lake, Small Creek, Ice, Ocean Flats)
``` TS
    const ExampleOrg = {
        OrganizationName: 'Deep Sea',
        OrganizationId: 1,
        Description: 'Mainly fishing a few miles off of the coast'
    }
```
- Groups: The Different Charters (The group could be the guide)
``` TS
    const ExampleGroup = {
        GroupName: 'Unsinkable',                 // Boat Name
        SponsorName: 'Mr. Guide',                // Name of Guide/Captain
        OrganizationName: 'Deep Sea',            // Type of Fishing (Organization)
        SponsorPhone: '555-5555',                // Guide Phone#
        SponsorEmail: 'fishing-guide@test.com',  // Guide Email
        MaxGroupSize: 3,                         // Boat's Max occupancy
    }
```
- Members: People on the charter

``` TS
    const ExampleMember = {
        MemberId: 4,
        MemberEmail: 'fisherMan22@test.com',
        MemberName: 'John Doe',
        MemberPhone: '555-5555'
    }
```

- Users: Probably people who work at the chartering angency

``` TS
    const ExampleUser = {
        name: 'John Doe',
        username: 'fisherguide',
        password: 'test123'
    }
```

- List of proposed Features:
  - Home page **HIGH**
    - Description of the theme of the site
    - Display of all of the organizations

  - Ability to search for and view a list of groups based on criteria that makes sense for my theme (include a view all groups) option. **HIGH**

  - Ability to view a particular group's details and the members in that group **HIGH**

  - Ability to Register a Group (add a boat/captain). **HIGH**

  - Ability to add a member (person purchasing a charter) **HIGH**

  - Ability to view a group's details and the members in that group **HIGH**

  - Ability to edit a member's information **MEDIUM**

  - Ability to delete a member **MEDIUM**

  - Ability to edit a group's info **MEDIUM**

  - Ability to delete a group **LOW**

  - Ability to register a user / login to the site **LOW**

  ### Rough Ideas for implementation:
  - Change color based on group availability.
  - Should build a default component to handle bogus paths
  - **Lazy load all of the features**, if there is a core folder probably shouldn't be lazy loaded. Most likely will be fine without a core, can just use the app module for core features since the app will not be massive.
  - Possibly look into directives for adding a loading mask?

  - Main screen that shows all Organizations

  - May have to create a User model.

  ### Stupid show off Ideas:

  - Animated water background

  ### Brainstorming All of the Modules
  - Login/Signup Module
  - Loading Module (take care of loading mask)
  - Module for viewing all the data.
  - 

  ### Components:

  - Header Component
  - Main Component
    - Organization View Component *Home Screen essentially*
      - Individual Org Panel Component
    - Multiple Groups Details Component (actual groups depends on the org selected)
      - Group Component
      - Admin needs ability to edit/add groups from here.
      - Regular User


    - Individual Group Details View (drill into more details of a specific group)
      - Admin will have the ability to edit/delete a member from the group here.
      - Register Member Component.
  - Footer Component


  - A profile component, could display profile info. (maybe allow the user to change user name/password)

  - An admin only view all data component.
  

  ### Services:

  - Some kind of message service for toast messages.

  - LoginService (Login request, add a user, username available?) *Low Priority*

  - Group Service
    - get all groups, get group by id, get group by org, add a group, delete a group, edit a group

  - Member Service
    - add member to a group, delete a member, edit a member in a group, Get a specific member of a group

  - Organization Service
    - get all organizations.
