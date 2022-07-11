T = int(input())
for t in range(T):
    n, s, e, k = map(int, input().split())
    a = list(map(int, input().split()))

    a = a[s - 1:e]
    # 2 3 5 7 8 9
    a.sort()
    print("#%d %d" % (t + 1, a[k - 1]))

