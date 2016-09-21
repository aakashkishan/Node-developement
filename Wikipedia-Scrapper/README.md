# wiki-scrapper
A simple Wikipedia Scrapper that returns a JSON scrapped from Wikipedia.

# Demo
![success](wiki_success.png "wikipedia-scrapper success")

![error](wiki_error.png "wikipedia-scrapper error")

# Running the Program
* INPUT
  * The URL should be passed as a query string inside `wiki` parameter

* OUTPUT
  * The output contains three parameter: title, body and error
    * `heading` contains the title of the document
    * `body` contains the first paragraph of text
    * `error` parameter is added whenever something goes wrong
