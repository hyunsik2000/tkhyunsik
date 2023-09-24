S = int(input())
N = 0
num = 0 

while True:
    N += 1
    num += N
    if num > S:
        break

print(N-1)
