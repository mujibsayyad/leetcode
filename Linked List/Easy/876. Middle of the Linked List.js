let middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // OR
  //   while (fast !== null) {
  //     fast = fast.next;
  //     if (fast === null) break;
  //     fast = fast.next;
  //     slow = slow.next;
  //   }

  return slow;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/middle-of-the-linked-list/
