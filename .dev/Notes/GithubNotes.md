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


## GitChange - eb54bd02-ef96-439f-af44-bde944d5b461

Date: 6/8/24

Detail:
	1. Added `Things To Consider.md` to the `.dev/Notes` folder.

---
Continued:

Date 6/10/24

Detail:
	1. Renamed `BaseJournal` to `BaseBook` and updated all references to this.
	2. Added `Journal` class which will inherit from `BaseBook`. Modified `JournalCard` to use this.

## Gitchange - 619de80c-20a5-4a0b-bb4d-0c02e0925183

Date: 6/13/24

Detail: Moved to dev PC.
1. Added Ollie Lumberjack started.
2. Edited `JournalCard.vue` to allow for BaseBook instead of only Journal. 
   - This should be edited further to be appropriate. E.G rename Journal, file/class etc.
3. Modified `HomeView` message.

## Gitchange - 28a8e228-70af-4c75-be7e-2819507e781e

Date: 6/19/24

Detail:
1. Added new CustomError model.
2. Added new StyledError Model.
3. Modified `this.$loggerUtils` to reflect the changes allowing for new calls:
   - `this.$loggerUtils.sendInfoLog()`
   - `this.$loggerUtils.sendErrorLog()`
   - `this.$loggerUtils.sendWarningLog()`
   - `this.$loggerUtils.sendInfoLogISO()`
   - `this.$loggerUtils.sendErrorLogISO()`
   - `this.$loggerUtils.sendWarningLogISO()`
4. Removed any uncommented code that `console.log`'d anything, in favor of the new logger.
5. **IMPORTANT** All logs expect a message, and an optional StackTrace string, and an optional AdditionalInfo object -- In that order.