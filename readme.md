# Cuarta Parte Prueba Tecnica - Ivan Castellanos
***

I solved this challenge with JS + NightWatch.js, which were the requested technologies.

In order to execute the test, run this command by console
>npm test


<h3>Project Idea:</h3>

The first portion of this challenge was to test the Get in Touch form of December Labs, so we click the "Get In Touch" button in the homepage to then assert the title of the PopUp and the presence of it.
We then proceed to click the button to send the contact information without updating any data and wait for the warnings on the obligatory fields.
Next we complete the fields with valid info, and reassert if the warnings on the fields disappeared.

<h3>Improvements to do:</h3>

I didn't use the page object model, so the test, locators and testdata share the same .js file, which is not a good practice. Something else that I noticed in my methods is that some of them could be improved in certain parts of the test, but since I couldn't read all the documentation in an effort to buy time to get to know this framework, the test seems to be missing some features of said framework.



## Other Parts of the technical challenge 

- [First Part](https://docs.google.com/spreadsheets/d/18gUHXKXDtqBV-t3oEFQotHtBXly_4RvEnUMOxiuR8VM/edit?usp=sharing)
- [Second Part](https://drive.google.com/drive/folders/1BHWl1jK5sXIIAhcckT0Na0bo7kLNkS7l?usp=sharing)
- [Third Part](https://github.com/Ivan-Castellanos/TerceraPartePruebaTecnica)
