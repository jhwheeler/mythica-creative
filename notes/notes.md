# Question Ideas

1. Whose problem are you solving?

* Age group: 3 images [checkbox]
* Sex: M/F [images]
* Income [slider]
* Describe more [textarea]

2. What solution do you offer to this challenge?

* [textarea]

3. What is your vision for the brand? In an ideal world, if everything goes to plan, what will life be like for those whose problem you're solving?

* [textarea]

4. What is your mission? What are the steps you're taking to make your vision a reality?

* [textarea]

5. What visual message do you want to express to your future clients?

* Styles: minimalist, corporate,

6. How do you envision your business in 3 years?

* [input]
* [input]
* [input]



# Tips

* coming up and bouncing, can be dragged up
* Need context? Need clarification?


# Actions

* Get questions from db
* Add user
* Show advice
* Hide advice
* Send store to db


# onSubmit Flow

1. onSubmit() triggered
2. Dispatch action 'SAVE_FORM'
3. Takes data from store and makes api call
4. POST request to server
5. If 200, show Thank You page
6. Dispatch 'CLEAR_FORM'

7. Dispatch 'RENDER_HTML'
8. Makes a POST request to server
9. html page creation
10. html2pdf
11. Email pdf to me


