def caught_speeding(speed, is_birthday):
    bonus = 5 if is_birthday else 0
    
    if speed <= 60 + bonus:
        return 0
    elif 61 + bonus <= speed <= 80 + bonus:
        return 1
    else:
        return 2