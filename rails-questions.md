# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
            A: rails new app_name -d postgresql -T


2. Explain each section of the following route:  
get '/library/:id' => 'book#show'

Notes: Route file is intended to house all valid urls in your rails application. (config/routes.rb)

get -       HTTP verb/method 
library -   Rails will determine that you have requested the /library 
            route and that it needs to find the book controller and run the show method
:id -       The instance variable that is storing the information that 
            will be passed as a param
book -      Name of controller file
show -      Name of method in the controller file


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.
    1. (Terminal) $ rails generate migration Add_foreign_key_to_model
        - Running this command in your terminal will generate a new file to your migration directory. 
    2. Running this command in your terminal will generate a new file to your migration directory. Editing this file and adding the changes you want within the "def change" method will allow you to change the schema as needed:
class AddForeignKeytoModel < ActiveRecord::Migration[6.0]
  def change
		add_foreign_key :models, :second_models
  end
end
    3. After we save the file, we are ready to tell rails to make the changes by running the migrate command in terminal.
        $ rails db:migrate
            - The database schema is now updated!

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
    $ rails c
    $ Person.create shirt: "nil", pants: "nil", shoes: "nil"

5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < ApplicationRecord
  validates :shirt, :pants, :shoes, presence: true
end


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
    A: Either  PascalCase  or  Snake_case