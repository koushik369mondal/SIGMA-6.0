import java.util.*;
import java.lang.reflect.Array;

class LivePractice {
    public static boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        for(int i=0; i<nums.length; i++){
            if(nums[i] == nums[i+1]){
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 4, 2 };
        System.out.println("Contains Duplicate: " + containsDuplicate(nums));
    }
}
