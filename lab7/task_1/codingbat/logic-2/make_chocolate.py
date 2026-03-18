def make_chocolate(small, big, goal):
    max_big = goal // 5
    if big >= max_big:
        rem = goal - (max_big * 5)
    else:
        rem = goal - (big * 5)
        
    if rem <= small:
        return rem
    return -1