y = int(input())
if y % 4 == 0:
    if (y % 100 != 0) | (y % 400 == 0):
        a = 1
    else:
        a = 0
else:
    a = 0
print(a)