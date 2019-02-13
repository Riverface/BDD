
# BDD examples
#### Examples of Behavior Driven Design in action with a link to the Tables.


# Leap Year
Checks a year to see if it's a Leap Year.

### type a year and it will check for the conditions of a leap year.

* checks to see if the year is divisble by 4
* if the year is divisible by 4, checks if the year is divisible by 100. Will return false if true.
* if the year is divisible by 4 and 100, checks if the year is also divisble by 400. Will override false value to true if true.
* Sends a message to the user if the year is a leap year.

# piglatin

translate a sentence into piglatin.


## how to use
### Type a sentence in and press enter. You will notice that I finally figured out how to consistently use submit.
* breaks the input string up into words
* breaks each word up into characters
* checks each word, takes first letter and appends, adding "ay" if first letter is a consonant and "Way" if first letter is a vowel.
*  to the end of words with consonants
