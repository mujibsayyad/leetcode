let middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null) {
    fast = fast.next;

    if (fast === null) break;
    else {
      fast = fast.next;
    }
    slow = slow.next;
  }
  return slow;
};

// Using two pointer method
// Fist pointer is slow -- Second pointer is fast
// Basically [slow pointer] will go on next node and [fast pointer] will go next's-->next node

// slow - s / fast - s

// 1st time
// s       f
// 1-->2-->3-->4-->5-->null

// 2nd time
//     s           f
// 1-->2-->3-->4-->5-->null

// 3rd time
//         s            f
// 1-->2-->3-->4-->5-->nulll

// as shown in steps [fast pointer] is null now, so code will stop executing
// and we got our middle item [s poniter].

//
// link : https://leetcode.com/problems/middle-of-the-linked-list/
