n = int(input())
a = list(map(int, input().split()))

ave = round(sum(a) / n)
minimum = 214700000

for idx, x in enumerate(a):
    tmp = abs(x - ave)
    if tmp < minimum:
        minimum = tmp
        score = x
        res = idx + 1
    elif tmp == minimum:
        if x > score:
            score = x
            res = idx + 1
print(ave, res)
