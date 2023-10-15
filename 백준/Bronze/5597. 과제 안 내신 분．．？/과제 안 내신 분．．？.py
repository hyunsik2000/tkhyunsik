a = list(range(1,31))


for _ in range(28):
    b = int(input())
    a.remove(b)

print(a[0])
print(a[1])