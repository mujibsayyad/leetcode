let deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next !== null && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/remove-duplicates-from-sorted-list/
