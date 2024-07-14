# Github Notes:

I might want a place to remind myself of the many changes I make between Git Pushes, this should store that information.

## GitChange - a1359ee4-9f6d-4054-89fd-549c65febfe2

- Date: 06/24/2024

- Detail: Decision to change the application to an advice application made.

	1. Name: ILYTAT.com
	2. Description: A place where someone cares.

- Steps: 
  1. Remove redundant code.
     1. Note: This is not applicable for the `.src/components/` directory.
  2. Modified `404.html` to reflect the new application.

- Changes:
  - Modified the Layout element to remove the banner from quotes and align more with a traditional header.
    - This will need to be modfied further to increase the aesthetic.
  - Modified HomeView to reflect the new tagline and added in the `TextSubmissionElement` component.
  - Added the `TextSubmissionElement` component to the `src/components/app/mainElements/submissionElements` directory.
  - Added in Auth0 for authentication.
  - Will need to continue working on `LoginForm.vue`. It seems like the user is working as expected, but the user may not be being stored in the Vuex store.

GitChange - 1e3b3b3b-9f6d-4054-89fd-549c65febfe2

- Date: 06/26/2024

- Detail: Adding new Models to the application.


- Steps
  1. Added in the `BaseReport` Model.
  2. Added in the `SessionReport` Model.
  3. Added in the `DailyReport` Model.


GitChange - 4dfa9317-14bb-431f-9849-e0dee80e7d00

- Date: 06/27/2024
- Detail: Decision to revert this to a Single Page Application Resume.
- Will create new card game using Vue and Express in a new folder.