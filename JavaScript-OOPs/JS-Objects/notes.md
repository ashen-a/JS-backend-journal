### Stack v/s Heap memory

- Our data can be stored in memory in diffferent types of DATA STRUCTURES (don't confuse it with dsa)
- Data Strutures are divided into PRIMITIVES (arrays & objects) & NON-PRIMITIVES
- Objects help in GROUPING of DATA


- All the variables in our code use the stack memory (let p1 = xxx et-cetra)
- example: let fname = 'Ayush' is stored in the stack memory

- Problem with STACK -> it can't GROW
- whereas HEAP is DYNAMIC
- arrays / objects can GROW -> stored in HEAP and their POINTER is stored in STACK
- const p1 = {} -> something like this can't be stored directly in the heap because it would raise readability issues
- The Hybrid Approach
- {} is stored in a memory location in HEAP, suppose the address of that location is 0x1 -> this is stored in p1 and put into the STACK memory as p1 = 0x1 
- Now this becomes a pointer to that memory location in HEAP
- doing console.log(p1) doesn't print any address because our compiler is smart and it goes to that location and actually fetches the data


- Re-read about Trade-Off
-  Stack memory -> fast readability but can't  GROW
-  Heap memory -> Slow readability but can grow

- Garbage Collector
- once the variables like p1, p2 that stores the address of the memory are out of scope of main, the garbage collector clear it from heap memory as well

-> Read on Memory Leak


