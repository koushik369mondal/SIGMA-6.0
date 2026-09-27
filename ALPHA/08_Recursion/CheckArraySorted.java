public class CheckArraySorted {
    public static boolean isSorted(int[] arr, int i) {
        if (i == arr.length - 1) {
            return true;
        }
        if (arr[i] > arr[i + 1]) {
            return false;
        }
        return isSorted(arr, i + 1);
    }

    public static void main(String[] args) {
        int[] arr1 = { 1, 2, 3, 4, 5 };
        int[] arr2 = { 8, 3, 6, 9, 5 };
        System.out.println("arr1 is sorted: " + isSorted(arr1, 0));
        System.out.println("arr2 is sorted: " + isSorted(arr2, 0));
    }
}
