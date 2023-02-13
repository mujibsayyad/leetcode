let isPalindrome = function (head) {
  let slow = head,
    fast = head;

  // Find the mid
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  // reverse list from mid next to last
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // compare
  while (head && prev) {
    if (head.val !== prev.val) {
      return false;
    }

    head = head.next;
    prev = prev.next;
  }

  return true;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/palindrome-linked-list/
