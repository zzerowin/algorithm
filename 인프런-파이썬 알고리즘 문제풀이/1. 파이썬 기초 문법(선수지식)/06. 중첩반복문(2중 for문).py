"""
중첩 반복문(2중 for문)


for i in range(5):
    for j in range(i + 1):
        print('*', end=' ')
    print()
"""

for i in range(5):
    for j in range(5 - i):
        print('*', end=' ')
    print()
