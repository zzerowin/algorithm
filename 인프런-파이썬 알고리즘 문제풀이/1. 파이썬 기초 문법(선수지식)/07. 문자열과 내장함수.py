"""
문자열과 내장함수
"""

msg = "It is Time"
# 대문자
print(msg.upper())
# 소문자
print(msg.lower())
print(msg)

tmp = msg.upper()
print(tmp)
# 'T'의 인덱스 찾기
print(tmp.find("T"))
# 'T'의 갯수
print(tmp.count("T"))

print(msg)
# slice
print(msg[:2])
print(msg[3:5])

# 문자길이
print(len(msg))
for i in range(len(msg)):
    print(msg[i], end='')
print()

for x in msg:
    print(x, end='')
print()

for x in msg:
    if x.isupper():
        print(x, end=' ')
print()

for x in msg:
    if x.islower():
        print(x, end=' ')
print()

# 띄어쓰기 제거
for x in msg:
    if x.isalpha():
        print(x, end='')
print()

# 아스키코드
tmp = 'AZ'
for x in tmp:
    print(ord(x), end=' ')
print()

tmp = 'az'
for x in tmp:
    print(ord(x), end=' ')
print()

tmp = 66
print(chr(tmp))
