
## 1. What is the difference between `null` and `undefined`?

### `null`
- কোন value assign করা হবে না।
- এটিকে ইচ্ছাকৃতভাবে empty value বোঝাতে ব্যবহার করা হয়।

### `undefined`
- Variable declared করা হয়েছে কিন্তু কোন value assign করা হয় নাই।

---

## 2. What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

### `map()`
- Array-এর প্রতিটি উপাদানকে পরিবর্তন করে **নতুন array return** করে।  
- Original array পরিবর্তন হয় না।

### Difference between `map()` and `forEach()`
- `map()` → নতুন array return করে  
- `forEach()` → array return করে না, return করলে **undefined** হয়  

---

## 3. What is the difference between `==` and `===`?

- `==` → শুধু **value** check করে  
- `===` → **value এবং type** উভয় check করে  

---

## 4. What is the significance of `async/await` in fetching API data?

- `async/await` ব্যবহার করে **sequentially data fetch** করা যায়  
- কোড লেখা হয় সহজ এবং readable  

---

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block)

### Global Scope
- Variable কে **code-এর যে কোন জায়গা থেকে access** করা যায়  

### Function Scope
- Variable কে **function এর ভিতর থেকে access** করা যায়  

### Block Scope
- `{}` এর ভিতরে থাকা variable কে **শুধু সেই block এর ভিতর থেকে access** করা যায়


