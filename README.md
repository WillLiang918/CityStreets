# CityStreets

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://city-streets.herokuapp.com/

## Minimum Viable Product

CityStreets is a web application inspired by StreetEasy built using Ruby on Rails
and React.js. CityStreets allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create an account
- [x] Log in / Log out
- [ ] Create, read, edit, and delete listings/properties
- [ ] Search through listings by criteria
- [x] Map search page results using google maps api

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Property Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). Users are required to log in to update or create new listings. Before building out the front end, I will begin by setting up a full JSON API for
properties.

[Details][phase-one]

### Phase 2: Flux Architecture and Property CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Property store will be implemented and a set of actions corresponding
to the needed CRUD functionality created. Once this is done, I will create React
views for the Properties `Photo` and `Detail`. At the end of Phase 2,
Properties can be created, read, edited and destroyed in the browser.

[Details][phase-two]

### Phase 3: Search Functionality (2 days)

Phase 3 adds the search functionality querying the database returning PropertyListItem Components. Users are also able to refine their search with the searchForm Component.

[Details][phase-three]

### Phase 4: Display Property with Google Maps API (1 day)

Phase 4 provides a visual representation of a property's location when a user hovers over a listing.

[Details][phase-four]

### Phase 5: User's Profile Page (1.5 day)

Phase 5 allows a user to update their account information and listings.   

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

In Phase 6 I will add styling flourishes and seed the database with random
listings.

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Users can save listings
- [ ] Add more features to Profile page
- [ ] Pagination / infinite scroll for Search Page
- [ ] Add additional information to Property Page

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
