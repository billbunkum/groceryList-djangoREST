# Grocery List

+ Uses DjangoREST & Angular
+ persists data onto a django back-end
+ keeps track of items which have been 'got'
+ deployed on Heroku
+ uses a 'djangoSEED' which includes webpack, gulp

# Using
+ $ pip install -r requirements.txt
+ $ ./manage.py runserver
+ $ npm start

## Heroku
+ after pushing to your Git repo:
+ $ heroku login
+ $ git push heroku master
+ troubleshoot all the errors; remember to look for Heroku codes w/:
+ $ heroku logs -n 1500
+ make migrations on heroku w/:
+ $ heroku run python manage.py makemigrations (then) migrate
+ start the app w/:
+ $ heroku open

### If the damn thing will build but won't open past an error page
+ remember to start up a web process w/:
+ $ heroku ps:scale web=1