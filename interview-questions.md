# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

    Your answer: I understand that Rails follows an MVC pattern however, I can't quite recall the meaning of the acronym and I'd love to give you an accurate answer. If it's fine with you, I can look it up in my notes.

    Researched answer: According to my notes, Rails is a model-view-controller (MVC) framework, which means it provides a default structure or preliminary framework for the application created.

2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD is an acronym that stands for Create, Read, Update, Delete. It's a guideline or check-off list for functional applications. The user should be able to
    - Create content on the application,
    - Read content on the application,
    - Update content on the application, and
    - Delete content on the application.

  Researched answer: My researched answer corroborates my answer for the meaning of CRUD in applications, "CRUD is an acronym for the four basic types of SQL commands: Create , Read , Update , Delete." In addition to my answer, a CRUD application is one that uses forms to get data into and out of a database."

3. What is a migration? Why would you use one?

  Your answer: Migration denotes the changes made to a table. If I need to make a change to my table I would need to update my terminal with the command 
    $ rails generate migration add_foreign_key_to_models
  As well as update my migration file and following the change with the terminal command:
    $ db:migrate    

  Researched answer: It is bad practice to make edits on the schema, which is not desiigned to be edited. Instead, if a change is to be made to a table in the schema, there is a command used on rails to permit the change. Once the command has been made, a migration file is generated that holds the desired changes to be made.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: In this scenario, I would need to determine which model has the 'has_many' method versus "belongs_to". A computer may have many users - people, so the person model will hold the foreign key.
  Model - Computer:
  1. Family_Computer      has many users (3 users)
  2. Work_Computer        has many users (200 users)
  3. Personal_Computer    has 1 user
  Model - Person:
  1. s.habteab.user - 1   Person.find(1) belongs to computer.find(1)
  2. a.habteab.user - 1   Person.find(2) belongs to computer.find(1)
  3. e.habteab.user - 1   Person.find(3) belongs to computer.find(1)
  4. employee.user - 2    Person.find(4) belongs to computer.find(2)
  204. employee.user - 2  Person.find(204) belongs to computer.find(2)
  205. personal.user - 3  Person.find(205) belongs to computer.find(3)

or you can think a person has many computers and in that case the computer has the foreign key.
Model - Person:
  1. Person1        has many computers (3)
  2. Person2        has many computers (2)
  3. Person3        has 1 computer
  Model - Computer:
  1. work_computer_A - 1   Computer.find(1) belongs to Person.find(1)
  2. personal_computer - 1   Computer.find(2) belongs to Person.find(1)
  3. work_computer_B - 1   Computer.find(3) belongs to Person.find(1)
  4. personal_computer - 2    Computer.find(4) belongs to Person.find(2)
  5. work_computer - 2  Computer.find(5) belongs to Person.find(2)
  6. personal_computer - 3  Computer.find(6) belongs to Person.find(3)

  Researched answer:
According to my researched answer, in the case that a computer has many users, the user would hold the foreign key. As noted, "A foreign key is a column in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them. The foreign key always goes on the belongs_to side." and as a result, the foreign key lives in the person table in my specific example.scenario. 


5. What is object-relational mapping?

  Your answer: Object relational mapping (ORM) describes the relationships between models. 

  Researched answer: ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.



6. What is a gem?

  Your answer: I understand that Gems are regarded in Ruby however, I can't quite recall its purpose and I'd love to give you an accurate answer. If it's fine with you, I can look it up in my notes.

  Researched answer: According to my research, gem contains a packaged Ruby application or library. Gems can be used to extend or modify functionality in Ruby applications. 

7. Why is it important to have validations in your application?

  Your answer: Validations are an important security measure that outlines a valid input for the expected/desired output. If a user inputs an invalid response, a validation can also act as a notification to the user and developer of how they can correct their response to retrieve the expected/desired outcome.

  Researched answer: My researched answer proves my answer correct. Validations are used to ensure that only valid data is saved into one's database.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- JSON
- API
- Endpoints
- Strong params
