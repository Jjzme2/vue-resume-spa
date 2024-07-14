# GitChange File

Log GitChanges here:

<!--
TEMPLATE:

## GitChange #

Brief Description:

Date: DateInsert

Changes:

- ChangesInsert

Notes:

- NotesInsert

 -->

## GitChange 0

Brief Description: The initial GitChange. This file had not yet been created.

Date: 04/08/2024

Changes:

- Made changes to HomeView.vue
  - Modified Developer Description
- Modified Logo

Notes:

- Vue-Cli is not recommended anymore, consider the info at this link:
  https://github.com/vuejs/create-vue?tab=readme-ov-file

## GitChange 1

Brief Description: Added GitChange.md file

Date: 04/08/2024

Changes:

- Added GitChange.md file

Notes:

- This file will be used to log all changes made to the project and will be updated similarly to a
  git commit message.
- This will **not** be added to the gitignore file, as it is important to keep track of changes made
  to the project.

## GitChange 2

Brief Description:

1. Modified the footer CSS to be more responsive on different devices, and clean up/remove some of
   the unnecessary text.

2. Removed `Services` Cost and Rate in favor of name and description.

Date: 04/09/2024

Changes:

1. Footer UI Changes:
   - Modified `about-me.css` Social-Links class to line up evenly on the footer.
   - Modified `layout.css` Consolidated Footer Right, Left, Center to just footer-element.
   - Removed Text on MainLayout.vue
     - Powered by Vue.js
     - Hosted By Github Pages.
     - Domain provided by Squarespace.
2. Services Changes:
   - Removed `Services` Cost and Rate in favor of name and description.
   - Modified H1 tag on ServicesView.vue to reflect the change.

Notes:

- The footer should now be more responsive on different devices.
- The footer should now be cleaner and more concise.
- The footer should now be more visually appealing.
- The Services section should now be more concise and easier to read.

## GitChange 3

Brief Description: Added a few new components that should later be slotted into a video player
component.

- YoutubeVideo.vue
- InternalVideo.vue
- Added a new Javascript Export: vocabulary.js. This should be used to fetch the definition of a
  word so we can display it later when the user hoveres over the word.
- Added a new `lessons` folder in the `assets/markdown` directory. This will be used to store all
  the markdown files for the lessons.
  - Created a \_LessonPlan.md file to get me started with creating the lessons.
  - Created a TopThree.md file to get me started talking about `HTML`, `CSS`, and `JavaScript`.

Date: 04/11/2024

Changes:

- Added YoutubeVideo.vue
- Added InternalVideo.vue
- Added vocabulary.js
- Added lessons folder in assets/markdown
  - Added \_LessonPlan.md
  - Added TopThree.md

Notes:

- The YoutubeVideo.vue component will be used to display Youtube videos.
- The InternalVideo.vue component will be used to display videos that are stored locally.
- The vocabulary.js file will be used to fetch the definition of a word.
- The lessons folder will be used to store all the markdown files for the lessons.
- The \_LessonPlan.md file will be used to get me started with creating the lessons.

## GitChange 4

Brief Description: Minor changes before moving to new branch added a little more content to the
TopThree.md file.

Date: 04/12/2024

Changes:

- Added more CSS content to the TopThree.md file.

## GitChange 5

Brief Description: Complete Revamp of ILYTAT Website. This will now be a game website that will
include mostly cards games.

Date: 04/23/2024

Changes:

1. Removed about-me.css
2. Modified cssImporter to include new `socials.css` file.
3. Moved Social Buttons to `socials.css`
4. Deleted `Vocabulary.js`
5. Modified `blogPosts.js`
   - Removed all existing blog posts.
   - Added a template object for potential future posts.
6. Added `data.js` to the new folder at: `src/assets/data/games/RainbowRush/`
7. Removed all existing blog post/lesson/\_old files.
8. Added commented examples to `stringManipulation.js`
9. Added a new `TemplateView.vue`. This is a template for other views to use.
10. Removed old, outdated View template file.
11. Removed WarriorsView.vue
12. Modified `HomeView.vue` to reflect the new changes. Added `customRoutes` data to the
    HomeView.vue file.
13. Added `games.js` to the store folder.
14. Added `_template_firebase_store.js` to the store folder.
15. Added `internalVideo.vue` and `YoutubeVideo.vue` to the components folder.

### These will likely need to be continued in the next GitChange.

1.  Added `ILYTATWindow.vue` a simple window with an optional close button. This has a slot for
    another component.
2.  Modified `GamePanel.vue` This is reflective of Rainbow Rush and should be changed or renamed.
3.  Added a `SelectorTool.vue` Which is similar to my previous `Selector.vue` but with a few
    changes.
