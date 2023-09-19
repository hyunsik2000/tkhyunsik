num = int(input())
a = list(map(int,input().split()))
b = list(map(int,input().split()))
c = b

result = 0

for i in range(num):
    result += min(a) * max(b)
    a.pop(a.index(min(a)))
    b.pop(b.index(max(b)))

print(result)
