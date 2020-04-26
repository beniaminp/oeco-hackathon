The source for design is strutured in the following way (it is how Angular works):
-> oeco-frontend/src/app/submit-case/submit-case.html: the submit case page containg multiple sub-components like progression-details.component.html, symptoms.component.html, therapy-drugs.component.html, therapy-support.component.html
-> oeco-frontend/src/app/home/home.component.html is the main page of the application
-> oeco-frontend/src/app/search-case/search-case.component.html is the search page
-> oeco-frontend/src/app/search-case/preliminari-view/preliminari-view.component.html is the search result page

All the styles can be added to the global style file at:
-> oeco-frontend/src/styles.css