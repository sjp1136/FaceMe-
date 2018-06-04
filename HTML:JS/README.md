*Notice: currently our application is still in development mode because making it public requires Facebook to review over it over an extended duration of time. Hence, this application only works for the developers, I and MJ Kim.

Two ways:
1. Short way
    1. Go to our personal website (https://snfaceme.heroku.com)
    2. If you try to login, it will not work because only developers have access. Hence, if you would like to try it on your facebook account, we will add you to the developers list and it will work the next time you login.

2. Long way (Recommended)
    1. Download Mamp and our source code (HTML:JS)
    2. Change the port value of apache to 8888 on MAMP.
    3. Put all the files in HTML:JS to the htdocs folder found in "MAMP" folder.
    4. Then, go to https://developers.facebook.com/ and create your own app. Select web.
    5. Enter http://localhost:8888/ as your application website link.
    6. Go to htdocs folder and open index.html (in code).
    7. Replace the current app ID in the code with yours.
    8. Should work. :)
