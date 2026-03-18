def centered_average(nums):
    total = sum(nums) - max(nums) - min(nums)
    return total // (len(nums) - 2)