# angular-capstone-project

## How to Start Server

1. Open a terminal and change directory into the server folder.
2. Run 'node server.js' without the single quotes.

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
  - 