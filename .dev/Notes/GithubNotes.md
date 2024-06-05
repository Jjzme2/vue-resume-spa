# Github Notes:

I might want a place to remind myself of the many changes I make between Git Pushes, this should store that information.

## GitChange - 5e7faf42-78c0-4512-ab48-597c0f9eb23b

Date: 6/1/24
Detail:
	1. Modified the **StringConversion** Plugin to make the functions chainable.
	2. Added notes to the `Personal.md` file about this.
	3. Separated Utilities in the UtilPlugin and made a note about this.
      	- Added both packages from the export to the **main.js** `use()` function

Detail 2:
	1. Removed Description from Card
	2. Categorized Library based on `content_type`
	3. Added **Overlay** once a card is clicked on to show more info about that card.
	4. Added **Sample_Page** link to existing Journal.
	5. Added **Active** field to journals to hide inactive journals.
	6. Added **Go Back Button** to *BaseView* and a *prop* for **includeGoHomeButton**, which is false on **HomeView**


## GitChange - d3739149-d8ba-44b9-ad3b-6a6f0d5413ca

Brief Detail: 
	1. Restructure Codebase.
	2. Add Journal Model.

Date: 6/5/24

Detail: 
	1. Added `BaseJournal` Model, and made this the prop required for the `JournalCard` component. 
   	- **This will likely need to be updated further.**
  1. Reorganized the code to hopefully make it more readable.
     - Moved Images to public, instead of being in both `public` and `src`.
     - Moved `util` from `assets` to `src`.
     - Renamed `util` to `utils` to match the naming convention.
     - Moved `data` to `assets`
     - Removed *Vue* Logo.