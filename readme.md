App was created with Vite

Technologies/Libraries used in the SPA
1)React
2)React Router Dom (Routing)
2)Typescript
3)Tailwind (styling and some animations)
4)Framer Motion (page transitions - animations)
5)React Context (theme)
6)Redux Toolkit (warehouse items)
7)Docker
8)ESLint/Prettier (development only)
9)React Icons (some extra icons)
10)uuid (unique ids as keys for mapping arrays)

How to run the app
1)Visit url (hosted on Vercel)
https://quintessential-task.vercel.app/

2)Run via Docker (needs Docker installed)
git clone https://github.com/Theobirmp/quintessential-task.git
cd quintessential-task
docker-compose up
visit localhost on port 5173

3)Run Development Server Locally (nededs Node installed)
git clone https://github.com/Theobirmp/quintessential-task.git
cd quintessential-task
cd quintessential-task
npm i
npm run dev
visit localhost on port 5173

About the app
App supports dark theme using React Context and Tailwind dark mode.

App has pages for each warehouse. Each warehouse has it's items that are
statically typed in data folder. User can remove these items from their corresponding warehouse or select his/her warehouse of choice and add new items through the form.
Items are managed by Redux Toolkit which was preferred over Redux due to less boilerplate
and built in support for immer.

Forms have some validation on them e.g. email needs to have @ and . and not have numbers after the dots, password needs to be over 4 characters.

SPA is responsive on all devices. On mobile sidebar is removed due to lack of space and hamburger menu has been added. User can navigate through the slide-in menu.

notes:
1)warehouse management logo is commented out cause app via docker/vercel cant find the file
