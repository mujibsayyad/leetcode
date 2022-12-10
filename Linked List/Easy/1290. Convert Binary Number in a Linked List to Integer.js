let getDecimalValue = function (head) {
  let binary = '';
  let current = head;

  while (current) {
    binary += current.val;
    current = current.next;
  }

  return parseInt(binary, 2);
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
