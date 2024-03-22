# Task Photoroom

This repository is a take home assignment as part of Photoroom recruitment process.

## Thinking

For this exercice I decided to use Typescript, NextJS and css modules. Since this was an exercise with a time limit, I think using my normal setup would help.

I started the assignment by thinking about how I want to structure my code based on the user stories. I decided to go with 2 pages: "Homepage" and "Upload".

The Homepage is a gallery where the user can:

- view all folders and images
- delete individual folders
- create a new folder
- rearrange the images between folders by drag & drop.

The Upload page is just a fullscreen page where the user is able to drag and drop or click to add a new file.

## Improvements

Now that the exercise is complete, I have a lot of ideas on how to improve it if I had more time. The first thing that I'm focus now is: Is this the best user experience?

### Uploading to/from any folder

The user should either be able to upload an image in place (under each folder) or being given the ability to specify (or create a new folder) on the "Upload" page.

I think the best UX for this is to have an upload image button under each folder. Once the user clicks on it, instead of moving to another page we can simply have a modal window with the upload logic in it. In order to properly implement this, I would like to build a modal system on top of radix-ui Dialog primitive so I inherit all accessibility features like focus trapping, keyboard shortcuts etc.

### Security

I would like to avoid exposing API keys on client-side code. One advantage of NextJS is that environment variables are server-side by default. By moving the API call to Photoroom into NextJS api route, I'm effectively masking it from the user and I'm not including it in the client-code.

I added `.env.local` to the repository so its easier to review my work, but in a normal production environment I would not do that.

## Design System

Design systems are quite important, they help you build faster and keeping a design language consist is key for massively improving user experience.

I've tried to have as much configuration as possible with css variables, I could definitely benefit from more time. I like to design my components using atomic design, and I like composing style variations on top of each component. For example `<Button />` and `<Button large />` are the same component but have a different design language based on context.
