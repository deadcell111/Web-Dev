def lone_sum(a, b, c):
    sum_val = 0
    if a != b and a != c: sum_val += a
    if b != a and b != c: sum_val += b
    if c != a and c != b: sum_val += c
    return sum_val