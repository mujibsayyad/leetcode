let mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let curr = head;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.val < current2.val) {
      curr.next = current1;
      current1 = current1.next;
    } else {
      curr.next = current2;
      current2 = current2.next;
    }
    curr = curr.next;
  }

  curr.next = current1 || current2;

  return head.next;
};

// T.C : O(n)
// S.C : O(1)

// link :- https://leetcode.com/problems/merge-two-sorted-lists/
