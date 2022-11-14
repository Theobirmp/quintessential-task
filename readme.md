App was created with Vite

Technologies/Libraries used in the SPA
1)React <br/>
2)React Router Dom (Routing) <br/>
2)Typescript <br/>
3)Tailwind (styling and some animations) <br/>
4)Framer Motion (page transitions - animations) <br/>
5)React Context (theme) <br/>
6)Redux Toolkit (warehouse items) <br/>
7)Docker <br/>
8)ESLint/Prettier (development only) <br/>
9)React Icons (some extra icons) <br/>
10)uuid (unique ids as keys for mapping arrays) <br/>

How to run the app <br/>
1)Visit url (hosted on Vercel) <br/>
https://quintessential-task.vercel.app/ <br/>

2)Run via Docker (needs Docker installed) <br/>
git clone https://github.com/Theobirmp/quintessential-task.git <br/>
cd quintessential-task <br/>
docker-compose up <br/>
visit localhost on port 5173 <br/>

3)Run Development Server Locally <br/>
git clone https://github.com/Theobirmp/quintessential-task.git <br/>
cd quintessential-task <br/>
cd quintessential-task <br/>
npm i <br/>
npm run dev <br/>
visit localhost on port 5173 <br/>

About the app <br/>
App supports dark theme using React Context and Tailwind dark mode. <br/>

App has pages for each warehouse. Each warehouse has it's items that are
statically typed in data folder. User can remove these items from their corresponding warehouse or select his/her warehouse of choice and add new items through the form. <br/>
Items are managed by Redux Toolkit which was preferred over Redux due to less boilerplate
and built in support for immer. <br/>

Forms have some validation on them e.g. email needs to have @ and . and not have numbers after the dots, password needs to be over 4 characters. <br/>

SPA is responsive on all devices. On mobile sidebar is removed due to lack of space and hamburger menu has been added. User can navigate through the slide-in menu. <br/>

notes:
1)warehouse management logo is commented out cause app via docker/vercel cant find the file
