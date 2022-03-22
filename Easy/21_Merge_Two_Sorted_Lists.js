/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let result = new ListNode();
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      result.next = list1;
      list1 = list1.next;
    } else {
      result.next = list2;
      list2 = list2.next;
    }
    result = result.next;
    console.log(result);
  }
  if (list1) result.next = list1;
  if (list2) result.next = list2;
  console.log(result);
  return result;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
mergeTwoLists([], []);
mergeTwoLists([], [0]);
