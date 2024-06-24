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