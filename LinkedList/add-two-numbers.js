
/** You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//solution 1

var addTwoNumbers = function(l1, l2) {
    let resultSum = 0, sum1 = '', sum2 = '';
    
    while(l1 || l2) {
        if(l1) {
            sum1 = l1.val + sum1;        
            l1 = l1.next;
        }        
        if(l2) {
            sum2 = l2.val + sum2;
            l2 = l2.next;
        }
    }
    resultSum = `${BigInt(sum1) + BigInt(sum2)}`.split('');
    let count = resultSum.length - 1,resultList = new ListNode(resultSum[count]),
        resultList1 = resultList;
    count = count - 1;        
    while(count >= 0 && count < resultSum.length) {
        resultList1.next = new ListNode(resultSum[count]);
        resultList1 = resultList1.next;
        count--;
    }
    return resultList;
}

//solution2

var addTwoNumbers = function(l1, l2) {
    let sum = 0, resultList = new ListNode(0), resultList1 = resultList;
    
   while(l1 || l2) {
       if(l1) {
           sum += l1.val;
           l1 = l1.next;
       }
       if(l2) {
           sum += l2.val;
           l2 = l2.next;
       }
       resultList1.next = new ListNode(sum % 10);
       resultList1 = resultList1.next;
       sum = sum > 9 ? 1 : 0;
   }
    if(sum) resultList1.next = new ListNode(sum);
    return resultList.next;
}
