#!/usr/bin/python3
def roman_to_int(roman_string):
    numerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    # initialize sum to zero
    sum = 0

    # this is for single roman char
    if len(roman_string) == 1:
        return numerals.get(roman_string)

    for i in range(0, len(roman_string)):
        # if we are at the last char
        if i == len(roman_string) - 1:
            prev = numerals.get(roman_string[i - 1])
            curr = numerals.get(roman_string[i])
            # if the previous char is less,
            # we have already handled both of them
            # so we break out
            if prev < curr:
                break
            else:
                # if not we add the last char to our sum
                sum += curr
                break
        if i > 0:
            prev = numerals.get(roman_string[i - 1])
            curr = numerals.get(roman_string[i])
            # this is so we don't read the char
            # whose previous is lesser
            # ie. so we won't read the V in IV
            if prev < curr:
                continue
        nxt = numerals.get(roman_string[i + 1])
        curr = numerals.get(roman_string[i])
        if curr < nxt:
            # in the case of IV
            sum += nxt - curr
        else:
            # normal case
            sum += curr

    return sum
