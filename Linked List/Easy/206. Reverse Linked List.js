let reverseList = function (head) {
  let cur = head;
  let prev = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/reverse-linked-list/
