# 최솟값 구하기

arr = [5, 3, 7, 9, 2, 5, 2, 6]
arrMin = float('inf')

for i in range(len(arr)):
    # 3 < 5
    # 7 < 3
    # 9 < 3
    # 5 < 2
    # 2 < 2
    # 6 < 2
    # 최종 최솟값 2
    if arr[i] < arrMin:
        arrMin = arr[i]
print(arrMin)


