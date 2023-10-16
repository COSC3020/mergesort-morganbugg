[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12117173&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Answer

The implementation used here uses two main loops.  The outer one iterates over the subarray size, and the inner loop iterates over the array jumping by double the subarray size.  The inner while loops might seem like they would cause a larger increase, but the actual merging process should only take linear time for the subarrays.  This many loops seems like it should increase time complexity by a great deal, but because the subarray size doubles with each iteration of the outer loop, the time complexity should only be $\Theta(nlogn)$

## Sources:

I used the following source after a few attempts at an approach more similar to the example of merge sort in the slides.  While I was able to get close to a solution, I was running into problems with how I wanted to traverse the arrays used.

https://www.geeksforgeeks.org/iterative-merge-sort/#