[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_Two_to_One/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Two_to_One/actions/workflows/test.yml/badge.svg) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Two_to_One&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Two_to_One)
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_Two_to_One/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Two_to_One/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Two to One

https://www.codewars.com/kata/5656b6906de340bd1b0000ac

## Instructions 

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:
```sh
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

## User Stories 

### 1. First story 
As a user
I want to get a sorted string, he longest possible, containing distinct letters - each taken only once 
So that create the logic

#### Scenarios 

#### 1. 
Given 'ab', 'cd'
When runs the logic
Then returns 'abcd'

#### 2. 
Given 'abade', 'cdc'
When runs the logic
Then returns 'abcde'

#### 3. 
Given 'aretheyhere', 'yestheyarehere'
When runs the logic
Then returns 'aehrsty'

#### 4. 
Given 'loopingisfunbutdangerous', 'lessdangerousthancoding'
When runs the logic
Then returns 'abcdefghilnoprstu'

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

