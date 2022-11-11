# REGULAR EXPRESSION

* Regular expressions are used for performing client-side validation efficiently.
* *(Client-SIde Validation: When we enter the data to any browser, it will check the data. If the browser checks the data then it client-side validation; if the server checks the data then it called server-side validation. We can embed a script in our JavaScript to perform Client-side validation and that is script is Regex.)*
* When you perform a search in a text you use a search pattern to describe what you are searching for.
* *(If we have a string and we need to find a substring in that long string, we will first define a pattern and then we will match it with the original string.)*
* Regular Expression is a sequence of characters that form a search pattern.

## HOW TO WRITE A REGEX

**SYNTAX:** /pattern/modifiers;

**MODIFIERS:** There are 3 types to modifiers:

1. **g** : global match (returns all the instances)
2. **i** : case-insensitive matching
3. **m** : multi-line matching

**METACHARACTERS:** Characters with a special meaning. If we add a \ before any charcter it becomes a special character.

1. **\b:** word boundary - it matches the string with the left boundary
   / \bor / this will match organic and will not match traitor or normal
2. **\d:** numral - matches any character that is a number.
   / \d\d\d / this will match 212 and will not match B17
   this tells that there are 3 characters and every character should be a number.
3. \s: single white space
   / over\sbite / this matches over bite and not overbite
   this tells that there should be a space between both the words
4. \w: letter, numral, ....
   / A\w / matches A1 or AA or A_ (supports underscore)
5. . : any charcter
   / ... / matches any character inplace of dot (.) will match AbC or 1+3
6. [ .. ] CharacterSet
   / [AN]BC / matched ABC NBC but will not BBC
   means anyone from the sqaure bracket.

**COUNTING METACHARACTERS:**

1. "*"it matches last character zero or more times.
   */Ja*va/ - Jaaava (yes)  Jova(No)
2. "?" zero or one time
   /Ja?va/ Java(yes) Jaava(No)
3. "+" one or more times
4. {n} exactly n times
5. {n, } n or more times
6. {n,m} at least n times and at most m times

POSITIONAL METACHARCTERS:

^ it matches at beginning of a string or line

$ it matches at the end of a string or line

Regex patterns can be used with methods of string as well as regualar expressions objects methods.
