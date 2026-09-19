# Stack vs Heap Memory

> A mental model for how JavaScript stores values in memory, and how the Garbage
> Collector reclaims what is no longer reachable.

**Contents**

- [1. Data Structures & Memory](#1-data-structures--memory)
- [2. Stack Memory](#2-stack-memory)
- [3. Heap Memory](#3-heap-memory)
- [4. The Hybrid Approach](#4-the-hybrid-approach)
- [5. Stack vs Heap — Trade-off](#5-stack-vs-heap--trade-off)
- [6. Garbage Collector](#6-garbage-collector)
- [7. Memory Leaks](#7-memory-leaks)

---

## 1. Data Structures & Memory

Our data can be stored in memory using different types of **data structures**.

> [!NOTE]
> Don't confuse **data structures** with **DSA**.

Data structures can broadly be divided into:

- **Primitive data types**
- **Non-primitive data structures**

**Objects** help us group related data together.

---

## 2. Stack Memory

The **stack** is used for storing things such as:

- Primitive values
- Function calls
- Local variables
- References to objects

```js
let fname = "Ayush";
```

The value of `fname` can be stored directly in stack memory.

### Problem with the stack

Stack memory is:

- **Fast**
- Limited in size
- Managed in a structured way

It is **not designed for dynamically growing data structures**.

---

## 3. Heap Memory

The **heap** is used for dynamically allocated data, especially:

- Objects
- Arrays
- Other dynamically sized data

Unlike the stack, the heap can allocate and release memory dynamically, as
required.

```js
const p1 = {};
```

The object itself is stored in the **heap**, while the variable `p1` holds a
**reference** to that object.

---

## 4. The Hybrid Approach

JavaScript uses a combination of **stack + heap** for objects.

```js
const p1 = {
  name: "Ayush",
};
```

Conceptually:

```text
STACK                         HEAP

p1 ────────────────►      ┌──────────────┐
                          │ name: Ayush  │
                          └──────────────┘
```

You can think of it like this:

```text
p1 = reference to 0x1
```

...where `0x1` represents some location in the heap.

> [!IMPORTANT]
> This is a simplified mental model. JavaScript doesn't require you to think of
> references as literal memory addresses like `0x1`.

When we run:

```js
console.log(p1);
```

JavaScript follows the reference and accesses the object stored in the heap. It
doesn't simply print the underlying memory address.

---

## 5. Stack vs Heap — Trade-off

| Stack                                          | Heap                                            |
| :--------------------------------------------- | :---------------------------------------------- |
| Very fast access                               | Generally more expensive to manage              |
| Limited memory                                 | Dynamically allocated                           |
| Structured allocation                          | Flexible allocation                             |
| Stores primitives, local data and references   | Stores objects, arrays and other dynamic data   |

### The basic trade-off

> **Stack** → fast and structured, but limited
>
> **Heap** → flexible and dynamically allocated, but more expensive to manage

---

## 6. Garbage Collector

JavaScript has a **Garbage Collector (GC)** that automatically manages memory.

```js
function main() {
  const p1 = {
    name: "Ayush",
  };
}
```

Once `main()` finishes, `p1` goes out of scope.

If nothing else references the object:

```text
p1 ─────► { name: "Ayush" }
```

...the object becomes **unreachable**, and the Garbage Collector can reclaim that
heap memory.

### Important idea

```text
Variable goes out of scope
        ↓
Reference is no longer reachable
        ↓
Object may become unreachable
        ↓
Garbage Collector reclaims memory
```

> [!WARNING]
> The Garbage Collector does **not** necessarily clear memory the moment a
> variable goes out of scope. It reclaims memory when appropriate.

---

## 7. Memory Leaks

A **memory leak** happens when a program continues to hold references to data it
no longer needs.

Because the object is still reachable, the Garbage Collector cannot reclaim its
memory.

Conceptually:

```text
Program still holds reference
          ↓
Object is still reachable
          ↓
Garbage Collector cannot remove it
          ↓
Memory remains occupied
```

### To do

- [ ] Read about **memory leaks** and how they happen in JavaScript
- [ ] Look at common leak sources: forgotten timers, detached DOM nodes, global
      variables, unbounded caches, lingering event listeners
