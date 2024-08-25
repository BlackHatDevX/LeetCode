main() {
  var nums1 = [0, 1, 2, 3, 3];
  var nums2 = [2, 6, 7, 5, 4];
  var m = 5;
  var n = 5;
  print(merge(nums1, m, nums2, n));
}

merge(nums1, m, nums2, n) {
  var ptr1 = 0;
  var ptr2 = 0;
  var merged = [];

  // Sort nums2 first to ensure proper merging
  nums2.sort();

  // Merge until one of the arrays is fully traversed
  while (ptr1 < m && ptr2 < n) {
    if (nums1[ptr1] < nums2[ptr2]) {
      merged.add(nums1[ptr1]);
      ptr1++;
    } else if (nums1[ptr1] > nums2[ptr2]) {
      merged.add(nums2[ptr2]);
      ptr2++;
    } else {
      merged.add(nums1[ptr1]);
      merged.add(nums2[ptr2]);
      ptr1++;
      ptr2++;
    }
  }

  // Add remaining elements from nums1 if any
  while (ptr1 < m) {
    merged.add(nums1[ptr1]);
    ptr1++;
  }

  // Add remaining elements from nums2 if any
  while (ptr2 < n) {
    merged.add(nums2[ptr2]);
    ptr2++;
  }

  return merged;
}
