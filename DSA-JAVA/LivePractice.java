import java.util.*;
import java.lang.reflect.Array;

class LivePractice {
    public static boolean containsDuplicate(char[] nums) {
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        char[] nums = { 'a', 'b', 'c', 'd' };
        System.out.println("Contains Duplicate: " + containsDuplicate(nums));
    }
}
