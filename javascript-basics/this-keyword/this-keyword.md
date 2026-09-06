### this in Global Space

- this keyword in Global space will always have the value of the Global Object
- JS does not run on browser alone, and everywhere where it runs there is a JavaScript run time environment
- Inside the browser the Global Object is different and inside node.js it is different and whereever else JS is running the Global Object is different 
- Inside the browser the Global Object is window

### this inside a function

> function x() {
    // the value depends on strict / non strict mode
>    console.log(this) // Window: not the same as when logged on Global space
>}
> x()

## 'this' keyword works differently for strict mode and non-strict mode inside functions

- Inside strict-mode this prints 'undefined'
>function x() {
>    console.log(this)
>}

- Inside non-strict mode this prints 'Window'
>function x() {
>    console.log(this)
>}

### Concept behind this anamoly

- 'this' in non strict mode -> ('this' substitution)

- If the value of 'this' keyword is undefined or null, 'this' keyword will be replaced with global Object ONLY IN NON STRICT MODE 

### What is the value of 'this' keyword inside a function
- The value of 'this' keyword inside a function is UNDEFINED BUT JS has something known as 'this' substitution so the value becomes equal to the Global Object if you will NOT USE STRICT MODE

### 'this' keyword value depends on how the function is called (window)

- Inside strict mode 

> x() : undefined
> window.x() : Window 

