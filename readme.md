## Install required dependancies

`npm i`

## Run tests

`npm test`

## Requirements

Modify the function "validateParens" in the file validateParens.js so that it satisfies the tests

Given a string s containing just the characters '(', ')'
determine if the input string is valid.

Open brackets must be closed in the correct order.

"" => true\
"()" => true\
")(" => false\
"()()()()()()()()()" => true\
"((((((()))))))" => true\
"(()()()()()()()()()" => false\
"(((((((()))))))" => false\
"((()()()(())))" => true\
"((((((((())))))()()()()((()))))) => true\
")))))))(((((((" => false\
"()())))))))(((((((" => false\
